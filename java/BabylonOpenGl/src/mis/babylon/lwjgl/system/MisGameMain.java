package mis.babylon.lwjgl.system;

import java.io.IOException;

import javax.xml.xpath.XPathException;

import mis.android.utils.Context;
import mis.android.utils.EGLConfig;
import mis.android.game.GameSurfaceView;
import mis.babylon.game.MisGame;
import mis.babylon.opengl.sysdep.MisGL11;

import org.lwjgl.LWJGLException;
import org.lwjgl.input.Keyboard;
import org.lwjgl.input.Mouse;
import org.lwjgl.opengl.Display;
import org.lwjgl.opengl.DisplayMode;
import org.lwjgl.opengl.GL11;

public class MisGameMain {

    /** Intended display mode */
    private DisplayMode mode;

    private boolean isCloseRequested = false;

    /** The shared texture */
    MisGame mg = null;
    int WID = 800;
    int HGH = 600;
    int keyboardDelay = 0;
    public static final String BACKUP_WORLD = "world_backup.xml";
    private boolean mouseWasDown = false;
    private boolean needRender = true; 
    
    // OpenGl specific:
    MisGL11 mgl= new MisGL11();

    private void init() throws LWJGLException, IOException, XPathException {
        // find displaymode
        mode = findDisplayMode(WID, HGH, 16);
        Display.setDisplayMode(mode);
        // start of in windowed mode
        Display.create();
        glInit();
        Keyboard.create();
        
        Context ctx = new Context();
        EGLConfig config = new EGLConfig();
        GameSurfaceView view = new GameSurfaceView(this);
        mg = new MisGame(ctx, view);
        mg.onSurfaceCreated(mgl, config);
        mg.onSurfaceChanged(mgl, WID, HGH);
        mg.startGame();
    }

    /**
     * Initializes OGL
     */
    private void glInit() {
        // sync frame (only works on windows)
        Display.setVSyncEnabled(true);

        // Create shared texture
        initGLState(mode.getWidth(), mode.getHeight(), 0f);
        GL11.glEnableClientState(GL11.GL_VERTEX_ARRAY);
        GL11.glEnableClientState(GL11.GL_COLOR_ARRAY);        
        // GL11.glEnableClientState(GL11.GL_TEXTURE_COORD_ARRAY);        
    }

    private void initGLState(int width, int height, float color) {
   
        GL11.glMatrixMode(GL11.GL_MODELVIEW);
        GL11.glLoadIdentity();
        GL11.glViewport(0, 0, width, height);

        // set clear color to black
        GL11.glClearColor(color, color, color, 0.0f);
    }

    private void cleanup() {
        mg.closeGame();
        Display.destroy();
    }
    
    private void changeAngleX(float da) {
        mg.mAngleX += da;
        mg.requestRender();
    }
    
    private void changeAngleZ(float da) {
        mg.mAngleZ += da;
        mg.requestRender();
    }
    
    private void changeDistWorld(float dd) {
        mg.distWorld += dd;
        mg.requestRender();
    }

    private void processKeyboard() {
        Keyboard.poll();
        if (keyboardDelay > 0) {
            keyboardDelay--;
            return;
        }
        keyboardDelay = 20;
        float da = 5.0f;
        if (Keyboard.isKeyDown(Keyboard.KEY_ESCAPE)) {
            isCloseRequested = true;
        } else if (Keyboard.isKeyDown(Keyboard.KEY_UP)) {
            changeAngleX(da);
        } else if (Keyboard.isKeyDown(Keyboard.KEY_DOWN)) {
            changeAngleX(-da);
        } else if (Keyboard.isKeyDown(Keyboard.KEY_LEFT)) {
            changeAngleZ(da);
        } else if (Keyboard.isKeyDown(Keyboard.KEY_RIGHT)) {
            changeAngleZ(da);
        } else if (Keyboard.isKeyDown(Keyboard.KEY_ADD)) {
            changeDistWorld(20f);
        } else if (Keyboard.isKeyDown(Keyboard.KEY_SUBTRACT)) {
            changeDistWorld(-20f);
        } else if (Keyboard.isKeyDown(Keyboard.KEY_T)) {
            if (mg.selectedFigure != null) {
                mg.selectedFigure.turn();
            }
        } else if (Keyboard.isKeyDown(Keyboard.KEY_E)) {
            requestRender();
        } else if (Keyboard.isKeyDown(Keyboard.KEY_W)) {
            try {
                mg.w.writeWorldToFile(null, BACKUP_WORLD);
                requestRender();
            } catch (Exception e) {
                e.printStackTrace();
            }            
        } else if (Keyboard.isKeyDown(Keyboard.KEY_R)) {
            try {
                mg.w.readWorldFromFile(null, BACKUP_WORLD);
                requestRender();
            } catch (Exception e) {
                e.printStackTrace();
            }
        } else {
            keyboardDelay = 0;
        }
    }
    
    private void processMouse() {
        Mouse.poll();
        float x = Mouse.getX();
        float y = Mouse.getY();
        
        if (!Mouse.isInsideWindow()) {
            // do nothing for now
        } else if (Mouse.isButtonDown(0)) {
            if (mouseWasDown) {
                mg.onMove(x, y);
            } else {
                mg.onMouseDown(x, y);
                mouseWasDown = true;
            }
        } else if (!Mouse.isButtonDown(0)) {
            if (mouseWasDown) {
                mg.onMouseUp(x, y);
                mouseWasDown = false;
            }
        }
    }

    private void mainLoop() throws InterruptedException {
        while (!Keyboard.isKeyDown(Keyboard.KEY_ESCAPE)
                && !Display.isCloseRequested() && !isCloseRequested) {
            if (Display.isVisible()) {
                // check keyboard input
                processKeyboard();
                processMouse();
                // do "game" logic, and render it
                mg.logic();
                if (needRender) {
                    render(false);
                } else {
                    Thread.sleep(100);
                }
            } else {
                // no need to render/paint if nothing has changed (ie. window
                // dragged over)
                if (Display.isDirty()) {
                    render(false);
                }
                // don't waste cpu time, sleep more
                try {
                    Thread.sleep(100);
                } catch (InterruptedException inte) {
                }
            }
            // Update window
            Display.update();
        }
    }

    /**
     * Retrieves a displaymode, if one such is available
     * 
     * @param width
     *            Required width
     * @param height
     *            Required height
     * @param bpp
     *            Minimum required bits per pixel
     * @return
     */
    private DisplayMode findDisplayMode(int width, int height, int bpp)
            throws LWJGLException {
        DisplayMode[] modes = Display.getAvailableDisplayModes();
//        for (int i = 0; i < modes.length; i++) {
//            System.out.printf("Mode[%d], w, h = %d %d\n", 
//                    i, modes[i].getWidth(), modes[i].getHeight());
//        }
        for (int i = 0; i < modes.length; i++) {
            if (modes[i].getWidth() == width && modes[i].getHeight() == height
                    && modes[i].getBitsPerPixel() >= bpp) {
                return modes[i];
            }
        }
        return null;
    }
    double ave = 0.0;
    private void render(boolean select) {
        long t0 = System.currentTimeMillis();
        try {
            Display.makeCurrent();
            GL11.glEnable(GL11.GL_DEPTH_TEST);
        } catch (LWJGLException e) {
            throw new RuntimeException(e);
        }
        mg.onDrawFrame(mgl);
        needRender = false;
        long t1 = System.currentTimeMillis();
        long dt = t1-t0;
        ave = ave*9/10 + dt/10;
        System.out.println("render, dt = " + dt + 
                " FPS = " + (dt==0 ? "INF" : "" + (1000.0 / dt)) + 
                " AveDT = " + ave);
    }
    
    public void requestRender() {
        needRender = true;
    }

    public static void main(String[] args) throws Exception {
        DisplayMode[] dmodes = Display.getAvailableDisplayModes();
        for (DisplayMode dm : dmodes) {
            if (dm.getWidth() > 1300) {
                System.out.printf(" Mode: %s\n", dm.toString());
            }
        }
        // starting window
        MisGameMain mgm = new MisGameMain();
        mgm.init();
        mgm.mainLoop();
        mgm.cleanup();
    }
}
