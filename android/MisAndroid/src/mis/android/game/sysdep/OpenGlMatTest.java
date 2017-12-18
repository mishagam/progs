package mis.android.game.sysdep;

import org.lwjgl.util.vector.Matrix4f;

import junit.framework.TestCase;

public class OpenGlMatTest extends TestCase {
    float []m0=null;
    float []m1=null;
    float []ret=null;;

    protected void setUp() throws Exception {
        m0 = new float[16];
        m1 = new float[16];
        ret = new float[16];
        Matrix4f m = new Matrix4f();
        m.setIdentity();
        m.storeArray(m0);
        m.storeArray(m1);
        super.setUp();
    }

    protected void tearDown() throws Exception {
        super.tearDown();
    }

    public void testGlhProjectf() {
        fail("Not yet implemented");
    }

    public void testGlhUnProjectf() {
        fail("Not yet implemented");
    }

    public void testMultiplyMatrices4by4OpenGL_FLOAT() {
        m1[2] = 3;
        OpenGlMat.MultiplyMatrices4by4OpenGL_FLOAT(ret, m0, m1);
        assertEquals(ret[2], 4);
    }

    public void testMultiplyMatrixByVector4by4OpenGL_FLOAT() {
        fail("Not yet implemented");
    }

    public void testGlhInvertMatrixf2() {
        fail("Not yet implemented");
    }

}
