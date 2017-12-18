package mis.babylon.opengl.sysdep;

import android.opengl.GLU;


public class MisGLU {
    public static void gluPerspective(MisGL11 gl, 
            float angle, float ratio, float minZ, float maxZ) {
        GLU.gluPerspective(gl.gl, angle, ratio, minZ, maxZ);
    }

}
