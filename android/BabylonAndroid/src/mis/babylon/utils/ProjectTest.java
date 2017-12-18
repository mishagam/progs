package mis.babylon.utils;

import java.nio.FloatBuffer;
import java.nio.IntBuffer;

import mis.babylon.utils.vector.MMatrix4f;
import mis.babylon.utils.vector.MVector3f;

import junit.framework.TestCase;

public class ProjectTest extends TestCase {
    FloatBuffer modelMatrix;
    FloatBuffer projMatrix;
    IntBuffer viewport;
    FloatBuffer win_pos;
    int ww = 320;
    int hh = 430;

    /**
     * Initialize model matrix -> identity   
     */
    protected void setUp() throws Exception {
        modelMatrix  = MBufferUtils.createFloatBuffer(16);
        projMatrix = MBufferUtils.createFloatBuffer(16);
        Project.gluMakeIdentityf(modelMatrix);
        Project.gluMakeIdentityf(projMatrix);
        initProjectMat();
        viewport = MBufferUtils.createIntBuffer(4);
        viewport.put(new int[]{0,0, ww, hh});
        viewport.position(0);
        
        win_pos = MBufferUtils.createFloatBuffer(3);
        
        super.setUp();
    }
    
    private void initProjectMat() {
        MMatrix4f mat = new MMatrix4f();
        MMatrix4f mret = new MMatrix4f();        
        Project.gluPerspective(45.0f,(float)((1.0 * 320) / 480.0),2.0f,100.0f, mat);
        Util.printMatrix("Perspective matrix", mat);
        MMatrix4f.load(mat, mret);
        
        // translate
        MVector3f translateVector = new MVector3f();
        translateVector.z = -10f;
        MMatrix4f.translate(translateVector, mat, mret);
        
        // rotate
        MMatrix4f.load(mret, mat);
        MVector3f vy = new MVector3f();
        vy.y = 1.0f;  
        float a = (float)(10 * Math.PI/180);
        mat.rotate(a, vy, mret);
        mret.store(projMatrix);
        
        projMatrix.position(0);
    }

    protected void tearDown() throws Exception {
        super.tearDown();
    }

    public void testGluPerspective() {
        MMatrix4f mat = new MMatrix4f();
        MMatrix4f mret = new MMatrix4f();        
        MVector3f translateVector = new MVector3f();
        translateVector.z = -10f;
        Project.gluPerspective(45.0f,(float)((1.0 * 320) / 480.0),2.0f,100.0f, mat);
        Util.printMatrix("Perspective matrix", mat);
        MMatrix4f.load(mat, mret);
        MMatrix4f.translate(translateVector, mat, mret);
        // gl.glTranslatef(0f, 0f, -10.0f);
        Util.printMatrix("Translated Perspective matrix", mret);
    }

    public void testGluPerspectiveRotate() {
        MMatrix4f mat = new MMatrix4f();
        MMatrix4f mret = new MMatrix4f();        
        MVector3f translateVector = new MVector3f();
        MVector3f vy = new MVector3f();
        vy.y = 1.0f;        
        translateVector.z = -10f;
        Project.gluPerspective(45.0f,(float)((1.0 * 320) / 480.0),2.0f,100.0f, mat);
        Util.printMatrix("Perspective matrix", mat);
        MMatrix4f.load(mat, mret);
        MMatrix4f.translate(translateVector, mat, mret);        
        // rotating mret
        MMatrix4f.load(mret, mat);
        float a = (float)(10 * Math.PI/180);
        mat.rotate(a, vy, mret);
        // gl.glTranslatef(0f, 0f, -10.0f);
        Util.printMatrix("Translated, rotated Perspective matrix", mret);
    }

    public void testGluProject() {
        // prepare project matrix
        projMatrix.position(0);
        float []mod = new float[]{0f, 2f, 0.5f};
        Project.gluProject(mod[0], mod[1], mod[2], modelMatrix, projMatrix, viewport, win_pos);
        float []win = new float[3];
        win_pos.get(win);
        Util.printVector("mod", mod);
        Util.printVector("win", win);
    }    

    public void testGluUnProject() {
        Util.printMatrix("testGluUnProject: Perspective matrix", projMatrix);
        Util.printMatrix("testGluUnProject: Model matrix", modelMatrix);
        float []mod = new float[]{2f, 1f, 0.01f};
        float []win = new float[3];
        System.out.println("win, mod before project");
        Util.printVector("win", win);
        Util.printVector("mod", mod);
        // first project
        Project.gluProject(mod[0], mod[1], mod[2], modelMatrix, projMatrix, viewport, win_pos);
        win_pos.get(win);
        System.out.println("win, mod after project");
        Util.printVector("win", win);
        Util.printVector("mod", mod);
        
        // now unproject
        FloatBuffer obj_pos = MBufferUtils.createFloatBuffer(3);        
        Project.gluUnProject(win[0], win[1], win[2], modelMatrix, projMatrix, viewport, obj_pos);
        obj_pos.get(mod);
        System.out.println("win, mod after unProject");
        Util.printVector("win", win);
        Util.printVector("mod", mod);
    }
    
    public void testMatMul() {
        projMatrix.position(0);
        Project.gluMakeIdentityf(projMatrix);
        projMatrix.put(2, 5f);
        modelMatrix.put(8, 5f);
        FloatBuffer ret = MBufferUtils.createFloatBuffer(16);
        Project.gluMakeIdentityf(ret);
        Project.gluMultMatricesf(projMatrix, modelMatrix, ret);
        //Util.printMatrix("project", projMatrix);
        //Util.printMatrix("model", modelMatrix);
        //Util.printMatrix("product", ret);
        assertEquals(5f, ret.get(2), 0.00001f);
    }
    
    public void testInvert() {
        projMatrix.position(0);
        Project.gluMakeIdentityf(projMatrix);
        projMatrix.put(1, 5f);
        projMatrix.put(11, 3f);
        projMatrix.put(14, -3f);
        FloatBuffer ret = MBufferUtils.createFloatBuffer(16);
        Project.gluMakeIdentityf(ret);
        Project.gluInvertMatrixf(projMatrix, ret);
        //Util.printMatrix("project", projMatrix);
        //Util.printMatrix("inverted", ret);
        float ret11 = ret.get(1);
        assertEquals(-5.0f, ret11, 0.00001f);
        assertEquals(-0.3f, ret.get(11), 0.00001f);
    }

}