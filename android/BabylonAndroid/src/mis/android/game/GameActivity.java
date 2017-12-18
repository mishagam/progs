package mis.android.game;

import mis.android.utils.MisContext;

import android.app.Activity;
import android.os.Bundle;

public class GameActivity extends Activity {
    
    public static final String TAG = GameActivity.class.getSimpleName();
    public static boolean USE_TEXTURES = true;
    public static String worldFileName = "";
    private GameSurfaceView gameView;
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        gameView = new GameSurfaceView(new MisContext(this));
//        mGLSurfaceView.setGLWrapper(new GLSurfaceView.GLWrapper() {
//            public GL wrap(GL gl) {
//                return new MatrixTrackingGL(gl);
//            }});
        gameView.game.worldName = worldFileName;
        setContentView(gameView);
        gameView.requestFocus();
        gameView.setFocusableInTouchMode(true);
    }

    @Override
    protected void onResume() {
        // Ideally a game should implement onResume() and onPause()
        // to take appropriate action when the activity looses focus
        super.onResume();
        gameView.onResume();
    }

    @Override
    protected void onPause() {
        // Ideally a game should implement onResume() and onPause()
        // to take appropriate action when the activity looses focus
        super.onPause();
        gameView.onPause();
    }

}
