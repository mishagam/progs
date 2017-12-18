package mis.babylon.opengl.sysdep;

import org.lwjgl.util.glu.GLU;

public class MisGLU {
    public static void gluPerspective(MisGL11 gl, 
            float angle, float ratio, float minZ, float maxZ) {
        GLU.gluPerspective(angle, ratio, minZ, maxZ);
    }

}
