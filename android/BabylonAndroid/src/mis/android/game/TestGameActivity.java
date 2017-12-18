package mis.android.game;

import mis.android.utils.MisContext;
import mis.babylon.utils.GameOptions;
import android.app.Activity;
import android.os.Bundle;
import android.widget.TextView;

public class TestGameActivity extends Activity {
    
    public static final String TAG = TestGameActivity.class.getSimpleName();
    public static boolean USE_TEXTURES = true;
    private BrickSurfaceView gameView;
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        gameView = new BrickSurfaceView(new MisContext(this));
//        mGLSurfaceView.setGLWrapper(new GLSurfaceView.GLWrapper() {
//            public GL wrap(GL gl) {
//                return new MatrixTrackingGL(gl);
//            }});
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
