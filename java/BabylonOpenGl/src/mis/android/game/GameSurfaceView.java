package mis.android.game;

import mis.babylon.lwjgl.system.MisGameMain;

/**
 * dummy class to change less code when porting to android.
 * 
 * @author TCSDEVELOPER
 */
public class GameSurfaceView {
    public MisGameMain gameMain = null;
    
    public GameSurfaceView(MisGameMain mgm) {
        this.gameMain = mgm;
    }
    
    public void requestRender() {
        gameMain.requestRender();
    }

}
