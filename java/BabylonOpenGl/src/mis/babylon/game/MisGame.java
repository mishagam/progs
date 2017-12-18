package mis.babylon.game;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintStream;

import mis.android.utils.Context;
import mis.android.utils.EGLConfig;
import mis.android.utils.Log;
import mis.android.utils.OnClickListener;
import mis.android.game.GameSurfaceView;
import mis.babylon.game.graphics.Box;
import mis.babylon.game.graphics.ColPoint;
import mis.babylon.game.graphics.Point;
import mis.babylon.utils.MisProject;
import mis.babylon.utils.vector.MVector3f;
import mis.babylon.opengl.sysdep.MisGL11;
import mis.babylon.opengl.sysdep.MisGLU;
import mis.babylon.opengl.sysdep.MisGlUtils;

/**
 * Device and OS independent part of MisGameActivity
 * extracted more of less device and OS independent part of Android Game activity, 
 * and planning to port this code to LwJgl
 * 
 * @author Misha
 */
public class MisGame {
    
    public enum GameMode {
        NORMAL, MOVE_SCENE, ADD_BRICKS;
    }
    public static final boolean ANDROID = false;
    public static final String TAG = "MisGame"; 
    public World w = null; 
    ColPoint cp = null;
    TopPanel topPanel = null;
    SelectGame selectGame = null;
    //boolean needRenderBack = true;
    int ww;
    int hh;
    Context myContext;
    public float mAngleX = 0.0f;
    public float mAngleZ = 0f;;
    float ratio = 1.0f;
    MisProject misProj = new MisProject();
    boolean projChanged = true;
    boolean drawCpOnly = false;
    public MovableFigure selectedFigure = null;
    MVector3f selectedPos = new MVector3f();
    MVector3f selectedShift = new MVector3f();
    Point lastSelectedPos = new Point(0,0,0); 
    public static final float DEFAULT_Z = 80f;
    GameSurfaceView view = null;
    public float distWorld = 450f;
    public static final int RAISEH = 20;
    private float lastMouseX = 0;
    private float lastMouseY = 0;
    private final float MOUSE_EPS = 0.0001f;
    public GameMode gameMode = GameMode.NORMAL;
    private float sceneX=0, sceneY = 0;
    private float lastSceneX, lastSceneY = 0;
    private static final int SCENE_Z = 10;
    GameButton moveAllButton = null;
    GameButton addBrickButton = null;
    
    public boolean showMenu = true;  // XXX;
    
    public String MOUSE_LOG_FILENAME = "mouse_events.log";
    /** recording to mouse events in log file */
    public boolean MOUSE_LOGGING = false;
    /** Play mouse events from log */
    public boolean PLAY_LOG = false;
    /**
     * opened file used for mouse logging
     */
    public PrintStream mouseLog = null;
   
    public MisGame(Context context, GameSurfaceView view) throws IOException {
        myContext = context;
        w = new World(this);
        w.readWorld(myContext, "world");
        this.view = view;
    }
    
    public void playLog() {
        try (BufferedReader br = new BufferedReader(new FileReader(MOUSE_LOG_FILENAME))) {
            String s;
            long lastMillis = 0;
            while ((s = br.readLine()) != null) {
                String []ss = s.split(" ");
                String cmd = ss[0];
                float x = Float.parseFloat(ss[3]);
                float y = Float.parseFloat(ss[4]);
                long millis = Long.parseLong(ss[5]);
                if (lastMillis != 0) {
                    long dt = millis - lastMillis;
                    try {
                        Thread.sleep(dt);
                    } catch (InterruptedException ie) {
                        // do nothing
                    }
                }
                lastMillis = millis;
                if (cmd.equals("MD")) {
                    onMouseDown(x, y);
                } else if (cmd.equals("MU")) {
                    onMouseUp(x, y);
                } else if (cmd.equals("MV")) {
                    onMove(x, y);
                }
            }
        } catch (IOException ioe) {
            ioe.printStackTrace();
            throw new RuntimeException("Playing mouse log failed " + ioe);
        }        
    }
    
    private void logMouse(String pref, float x, float y) {
        if (MOUSE_LOGGING && mouseLog != null) {
            long millis = System.currentTimeMillis();
            mouseLog.printf("%s xyt = %f %f %d\n", pref, x, y, millis);
        }
    }
    
    public void onMove(float x, float y) {
        logMouse("MV", x, y);
        if (Math.abs(x - lastMouseX) + Math.abs(y - lastMouseY) < MOUSE_EPS) {
            return;
        }
        if (gameMode == GameMode.MOVE_SCENE) {
            moveScene(x, y);
            return;
        } else if (gameMode == GameMode.ADD_BRICKS) {
            // do nothing for now
            return;
        }
        lastMouseX = x;
        lastMouseY = y;
        float z = DEFAULT_Z;
        MVector3f mod = new MVector3f();
        convertPosZ(x, y, z, mod);
        cp.setPos(mod.x, mod.y, mod.z);
        //Log.d(TAG, " converted win xyz [" + x + " " + y + " " + z + "] to [" + 
        //        cp.getPos().toString());
        if (selectedFigure != null) { 
            MovableFigure mf = selectedFigure;
            Point p = mf.getPos();
            convertPosZ(x,y, p.z, mod);
            p.x = mod.x - selectedShift.x;
            p.y = mod.y - selectedShift.y;
            float maxH = w.freeFigureHeight(mf);
            p.z = maxH + 10.0f;
            setSelectedPos(x, y);
        }
        requestRender();
    }
    
    MisFigure findSelectedFigure(float x, float y, boolean needGrab) {
        float z0 = 0.8f;
        float z1 = 0.95f;
        MVector3f a = new MVector3f();
        MVector3f b = new MVector3f();
        convertPos(x, y, z0, a);
        convertPos(x, y, z1, b);            
        MisFigure mf = w.findFigure(a, b, needGrab);
        return mf;
    }
    
    public void onMouseDown(float x, float y) {
        logMouse("MD", x, y);
        Log.d(TAG, "onMouseDown, x, y = " + x + " " + y);
        if (showMenu) {
            selectGame.onClick(x, y);
            return;
        }
        if (y > hh - topPanel.VSIZE) {
            topPanel.onClick(x, y);
            return;
        }
        if (gameMode == GameMode.MOVE_SCENE) {
            startMoveScene(x, y);
            return;            
        } else if (gameMode == GameMode.ADD_BRICKS) {
            // do nothing for now
            return;
        }
        MisFigure mf = findSelectedFigure(x,y, true);
        if (mf != null && selectedFigure == null) {
            Log.d(TAG, "onClick. Found figure, name: " + mf.name);
            selectedFigure = (MovableFigure)mf;
            w.raise(selectedFigure);
            Point p = selectedFigure.getPos();
            p.toVector(selectedPos); 
            lastSelectedPos.set(p);
            MVector3f a = new MVector3f();
            convertPosZ(x, y, p.z, a);
            selectedShift.x = a.x - selectedPos.x;
            selectedShift.y = a.y - selectedPos.y;
            selectedShift.z = 0;
            p.z += RAISEH * Box.SCALE;
            onMove(x,y);
            requestRender();
        } else {
            Log.d(TAG, "onClick. No Figures found");
            // releasing selected figure
        }
    }
    
    public void onMouseUp(float x, float y) {
        logMouse("MU", x, y);
        if (showMenu) {
            // ignore mouse up on select game panel
            return;
        }
        if (y > hh - topPanel.VSIZE) {
            // ignore mouse up on top panel
            return;
        }
        if (gameMode == GameMode.MOVE_SCENE) {
            endMoveScene(x, y);
            return;
        } else if (gameMode == GameMode.ADD_BRICKS) {
            if (w.addBrick(x, y)) {
                requestRender();
            }
            return;
        }
        
        // mode is normal
        if (selectedFigure != null) {
            onMove(x,y);
            Point p = selectedFigure.getPos();
            Point sh = new Point(0,0,0);
            // float nz = w.place(selectedFigure, sh);
            float nz = w.place(selectedFigure);
            if (nz > 0) {
                // selectedFigure.getDraw().getPos().z = nz;
                // selectedFigure.getDraw().getPos().x -= sh.x;
                // selectedFigure.getDraw().getPos().y -= sh.y;                
                selectedFigure = null;
                Log.d(TAG, "place figure ok");
            } else {
                selectedFigure.getPos().set(lastSelectedPos);
                selectedFigure = null;
            }
            requestRender();
        }
    }

    public void onDrawFrame(MisGL11 gl) {
        if (drawCpOnly) {
            gl.glMatrixMode(MisGL11.GL_MODELVIEW);
            gl.glLoadIdentity();
            //cp.draw(gl);
            //drawCpOnly = false;
            //Log.d(TAG, "Drawing CP at " + cp.getPos());
            return;
        }
        gl.glClear(MisGL11.GL_COLOR_BUFFER_BIT | MisGL11.GL_DEPTH_BUFFER_BIT);
        if (showMenu) {
            selectGame.draw(gl);
            return;
        }
        topPanel.draw(gl);
        
        // now working with world projection matrix
        rotateView(gl);
        gl.glMatrixMode(MisGL11.GL_MODELVIEW);
        gl.glLoadIdentity();
        w.draw(gl);
        cp.draw(gl);
    }
    
    public void setSelectedPos(float x, float y) {
        // move selected figure using pos and shift
        float z = selectedFigure.getPos().z;
        MVector3f a = new MVector3f();
        convertPosZ(x, y, z, a);
        MVector3f v = new MVector3f();
        v.x = a.x - selectedShift.x;
        v.y = a.y - selectedShift.y;
        v.z = selectedFigure.getPos().z;
        selectedFigure.getPos().fromVector(v);
        Log.d(TAG, "Moving Box, after move pos = " + selectedFigure.getPos());
    }
    
    public void rotateView(MisGL11 gl) {
        //Log.d(TAG, "rotateView Started, mAngleX, mAngleZ = " +  mAngleX + " , " +  mAngleZ);
        gl.glMatrixMode(MisGL11.GL_PROJECTION);
        gl.glLoadIdentity();
        float angle = 45f;
        float minZ = 100f;
        float maxZ = 1400f;
        
        MisGLU.gluPerspective(gl, angle, ratio, minZ, maxZ);
        gl.glTranslatef(-sceneX, -sceneY, -distWorld);
        gl.glRotatef(mAngleX, 1, 0, 0);
        gl.glRotatef(mAngleZ, 0, 0, 1);
        
        // set up misProj
        if (projChanged) {
            misProj.lock();
            misProj.setAngles(mAngleX, 0, mAngleZ);
            misProj.setTranslate(-sceneX, -sceneY, -distWorld);
            misProj.setPerspectiveParameters(angle, ratio, minZ, maxZ);
            misProj.setProjectMatrix();
            misProj.unlock();
            projChanged = false;
        }
        //Log.d(TAG, "rotateView ended");
    }


    public void onSurfaceCreated(MisGL11 gl, EGLConfig config) {
         initTextures(gl);
         initTopPanel();
    }
    
    public void startGame() {         
         if (PLAY_LOG) {
             playLog();            
         }
         if (MOUSE_LOGGING && !PLAY_LOG) {
             try {
                 mouseLog = new PrintStream(MOUSE_LOG_FILENAME);
             } catch (IOException ioe) {
                 mouseLog = null;
             }
         }
    }
    
    private void topPanelLogMenu() {
        String []logSizes = new String[]{"log0", "log3", "log33"};
        topPanel.clear();
        topPanel.addButton("left", new OnClickListener() {
            public void onClick(GameSurfaceView v) {
                onLeftRightButton(-5);                    
            }
        });
        topPanel.addButton("right", new OnClickListener() {
            public void onClick(GameSurfaceView v) {
                onLeftRightButton(+5);                    
            }
        });
        topPanel.addButton("up", new OnClickListener() {
            public void onClick(GameSurfaceView v) {
                onUpDownButton(-5);                    
            }
        });
        topPanel.addButton("down", new OnClickListener() {
            public void onClick(GameSurfaceView v) {
                onUpDownButton(+5);                    
            }
        });
        topPanel.addButton("nearer", new OnClickListener() {
            public void onClick(GameSurfaceView v) {
                onDistanceChange(-10);                    
            }
        });
        topPanel.addButton("further", new OnClickListener() {
            public void onClick(GameSurfaceView v) {
                onDistanceChange(+10);                    
            }
        });
        topPanel.addButton("turn", new OnClickListener() {
            public void onClick(GameSurfaceView v) {
                onTurnStorage();                    
            }
        });

        for (String slog : logSizes) {
            if (slog.length() == 4) {
                final String s = slog;
                topPanel.addButton(slog, new OnClickListener() {
                    public void onClick(GameSurfaceView v) {
                        Log.i("MisGame", "Log Selected " + s);
                        w.onSelectFigure(s);
                        requestRender();
                    }
                });
            } else {
                final String s = slog;
                topPanel.addButton(slog, 50, 25, new OnClickListener() {
                    public void onClick(GameSurfaceView v) {
                        Log.i("MisGame", "Log Selected " + s);
                        w.onSelectFigure(s);
                        requestRender();
                    }
                });
            }
        }
        topPanel.addButton("turn", new OnClickListener() {
            public void onClick(GameSurfaceView v) {
                onTurnStorage();                    
            }
        });
        topPanel.addButton("back", new OnClickListener() {
            public void onClick(GameSurfaceView v) {
                Log.i("MisGame", "Back Selected");
                topPanelMainMenu();
                requestRender();
            }
        });
        requestRender();
    }
    
    void selectGame(String gameName) {
        Log.i(TAG, "Selected Game " + gameName);
        showMenu = false;
        requestRender();
    }
    
    private void topPanelMainMenu() {
        topPanel.clear();
        topPanel.addButton("left", new OnClickListener() {
            public void onClick(GameSurfaceView v) {
                onLeftRightButton(-5);                    
            }
        });
        topPanel.addButton("right", new OnClickListener() {
            public void onClick(GameSurfaceView v) {
                onLeftRightButton(+5);                    
            }
        });
        topPanel.addButton("up", new OnClickListener() {
            public void onClick(GameSurfaceView v) {
                onUpDownButton(-5);                    
            }
        });
        topPanel.addButton("down", new OnClickListener() {
            public void onClick(GameSurfaceView v) {
                onUpDownButton(+5);                    
            }
        });
        topPanel.addButton("nearer", new OnClickListener() {
            public void onClick(GameSurfaceView v) {
                onDistanceChange(-10);                    
            }
        });
        topPanel.addButton("further", new OnClickListener() {
            public void onClick(GameSurfaceView v) {
                onDistanceChange(+10);                    
            }
        });
        topPanel.addButton("turn", new OnClickListener() {
            public void onClick(GameSurfaceView v) {
                onTurnStorage();                    
            }
        });
        topPanel.addButton("onebrickbtn1", new OnClickListener() {
            public void onClick(GameSurfaceView v) {
                Log.i("MisGame", "Brick Selected");
                w.onSelectFigure("brick1");
                requestRender();
            }
        });
        topPanel.addButton("onebrickbtn", new OnClickListener() {
            public void onClick(GameSurfaceView v) {
                Log.i("MisGame", "Brick Selected");
                w.onSelectFigure("brick2");
                requestRender();
            }
        });

        topPanel.addButton("log1", new OnClickListener() {
            public void onClick(GameSurfaceView v) {
                Log.i("MisGame", "Log Selected");
                topPanelLogMenu();
            }
        });
        
        moveAllButton = topPanel.addButton2("move_all", "move_all_sel", new OnClickListener() {
            public void onClick(GameSurfaceView v) {
                Log.i("MisGame", "MOve Scene Selected");   
                if (gameMode == GameMode.MOVE_SCENE) {
                    gameMode = GameMode.NORMAL;
                    moveAllButton.setCurrentImage(0);
                } else {
                    gameMode = GameMode.MOVE_SCENE;
                    moveAllButton.setCurrentImage(1);
                }
                requestRender();
            }
        });
        
        addBrickButton = topPanel.addButton2("add_bricks", "add_bricks_sel", new OnClickListener() {
            public void onClick(GameSurfaceView v) {
                Log.i("MisGame", "Add Bricks Selected");    
                if (gameMode == GameMode.ADD_BRICKS) {
                    gameMode = GameMode.NORMAL;
                    addBrickButton.setCurrentImage(0);                    
                } else {
                    gameMode = GameMode.ADD_BRICKS;
                    addBrickButton.setCurrentImage(1);                    
                }
                requestRender();
            }
        });
        
        topPanel.addButton("window_btn_1", new OnClickListener() {
            public void onClick(GameSurfaceView v) {
                Log.i("MisGame", "window_btn_1 Selected");                  
                w.onSelectStandard("standwin1");
                requestRender();
            }
        });
        
        topPanel.addButton("window_btn_2", new OnClickListener() {
            public void onClick(GameSurfaceView v) {
                Log.i("MisGame", "window_btn_1 Selected");                  
                w.onSelectStandard("standwin2");
                requestRender();
            }
        });
        
        topPanel.addButton("door_btn", new OnClickListener() {
            public void onClick(GameSurfaceView v) {
                Log.i("MisGame", "window_btn_1 Selected");                  
                w.onSelectStandard("standdoor");
                requestRender();
            }
        });
        
        topPanel.addButton("roof_btn", new OnClickListener() {
            public void onClick(GameSurfaceView v) {
                Log.i("MisGame", "roof_btn Selected");                  
                w.showRoof();
                requestRender();
            }
        });
        topPanel.addButton("back", new OnClickListener() {
            public void onClick(GameSurfaceView v) {
                Log.i("MisGame", "Back to select game Selected");
                initGameSelectMenu();
                requestRender();
            }
        });
    }

    private void initGameSelectMenu() {
        selectGame.clear();        
        final String gameName0 = "log_cabin";
        selectGame.addButton(gameName0, new OnClickListener() {
            public void onClick(GameSurfaceView v) {
                selectGame(gameName0);                    
            }
        });
        
        final String gameName1 = "brick_home";
        selectGame.addButton(gameName1, new OnClickListener() {
            public void onClick(GameSurfaceView v) {
                selectGame(gameName1);                    
            }
        });
        showMenu = true;
    }
    
    void initTopPanel() {            
        topPanel = new TopPanel(myContext);
        topPanelMainMenu();
        
        selectGame = new SelectGame(myContext);
        initGameSelectMenu();
        
        // adding point
        MisFigure cpfig = new MisFigure();
        cp = new ColPoint(cpfig);
        cpfig.images.add(cp);
        cpfig.getPos().set(30f, 30f, 100f);
        cp.fillData(myContext);        
    }
    
    public void onTurnStorage() {
        w.turnStorage();
        requestRender();
    }
    
    public void onLeftRightButton(int dax) {
        mAngleZ += dax;  
        projChanged = true;
        requestRender();
    }
    
    public void onDistanceChange(int dd) {
        distWorld += dd; 
        projChanged = true;
        requestRender();
    }
    
    public void onUpDownButton(int dax) {
        mAngleX += dax; 
        projChanged = true;
        requestRender();
    }        
    
    void initTextures(MisGL11 gl) {
        MisGlUtils.initTextures(gl);
    }
    
    public void requestRender() {
        view.requestRender();
    }
    
    private void convertPos(float x, float y, float z, MVector3f mod) {
        MVector3f win_pos = new MVector3f(x, y, z);
        misProj.lock();
        misProj.misUnProject(win_pos, mod);
        misProj.unlock();
    }
    
    void convertPosZ(float x, float y, float targetZ, MVector3f mod) {
        float z0 = 0.8f;
        float z1 = 0.95f;
        MVector3f a = new MVector3f();
        MVector3f b = new MVector3f();
        convertPos(x, y, z0, a);
        convertPos(x, y, z1, b);            

        float zz = targetZ;
        float xx = a.x + ((zz-a.z)*(b.x - a.x)/(b.z-a.z));
        float yy = a.y + ((zz-a.z)*(b.y - a.y)/(b.z-a.z));
        mod.set(xx, yy, zz);
    }

    public void onSurfaceChanged(MisGL11 gl, int width, int height) {
         gl.glViewport(0, 0, width, height);
         gl.glLoadIdentity();
         ww = width;
         hh = height;
         ratio = (float) width / height;
         topPanel.setSize(width, height);
         selectGame.setSize(width, height);
         misProj.setWH(ww, hh);
         rotateView(gl);
    }

    
    public void logic() {
        long millis = System.currentTimeMillis();
        for (int i = 0; i < w.figures.size(); i++) { 
            MisFigure mf = w.figures.get(i);
            // draw table 
            if (mf instanceof MovableFigure) {
                ((MovableFigure) mf).updateState(millis);
            }
        }
    }
    
    private void startMoveScene(float x, float y) {
        MVector3f a = new MVector3f();
        convertPosZ(x, y, SCENE_Z, a);
        lastSceneX = a.x;
        lastSceneY = a.y;
    }
    
    private void moveScene(float x, float y) {
        if (Math.abs(lastSceneX) < 0.1 && Math.abs(lastSceneY)<0.1 ) {
            return;
        }
        MVector3f a = new MVector3f();
        convertPosZ(x, y, SCENE_Z, a);
        sceneX -= a.x - lastSceneX;
        sceneY -= a.y - lastSceneY;
        lastSceneX = a.x;
        lastSceneY = a.y;
        requestRender();
    }
    
    private void endMoveScene(float x, float y) {
        if (Math.abs(lastSceneX) < 0.1 && Math.abs(lastSceneY)<0.1 ) {
            return;
        }
        moveScene(x,y);
        lastSceneX = lastSceneY = 0;    
        gameMode = GameMode.NORMAL; 
        moveAllButton.setCurrentImage(0);
        projChanged = true;
    }
    
    public void setGameMove(GameMode newMode) {
        if (newMode == gameMode) {
            // nothing to do
            return;
        }
        if (gameMode == GameMode.MOVE_SCENE) {
            lastSceneX = lastSceneY = 0;    
        }
        gameMode = newMode;
    }
    
    public void closeGame() {
        if (mouseLog != null) {
            mouseLog.close();
            mouseLog = null;
        }
    }

}
