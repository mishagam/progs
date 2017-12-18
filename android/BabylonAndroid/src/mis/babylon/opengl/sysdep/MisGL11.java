package mis.babylon.opengl.sysdep;

import java.nio.Buffer;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.DoubleBuffer;
import java.nio.FloatBuffer;
import java.nio.IntBuffer;
import java.nio.ShortBuffer;

import javax.microedition.khronos.opengles.GL11;

/**
 * class for helping conversion android -> LwJgl
 * All X methods -> f methods
 * started with matrixTrackingGL - but removed actual matrix tracking 
 * 
 * @author Misha
 */
public class MisGL11 {
    // GL constants
    public static final int GL_CW = GL11.GL_CW;
    public static final int GL_TRIANGLES = GL11.GL_TRIANGLES;
    public static final int GL_TEXTURE_2D = GL11.GL_TEXTURE_2D;
    public static final int GL_VERTEX_ARRAY = GL11.GL_VERTEX_ARRAY;
    public static final int GL_COLOR_ARRAY = GL11.GL_COLOR_ARRAY;
    public static final int GL_TEXTURE_COORD_ARRAY = GL11.GL_TEXTURE_COORD_ARRAY;
    public static final int GL_FLOAT = GL11.GL_FLOAT;
    public static final int GL_UNSIGNED_SHORT = GL11.GL_UNSIGNED_SHORT;
    public static final int GL_ALPHA_BITS = GL11.GL_ALPHA_BITS;
    public static final int GL_RED_BITS = GL11.GL_RED_BITS;
    public static final int GL_GREEN_BITS = GL11.GL_GREEN_BITS;
    public static final int GL_BLUE_BITS = GL11.GL_BLUE_BITS;
    public static final int GL_PROJECTION = GL11.GL_PROJECTION;
    public static final int GL_MODELVIEW = GL11.GL_MODELVIEW;
    public static final int GL_COLOR_BUFFER_BIT = GL11.GL_COLOR_BUFFER_BIT;
    public static final int GL_DEPTH_BUFFER_BIT = GL11.GL_DEPTH_BUFFER_BIT;
    public static final int GL_TEXTURE = GL11.GL_TEXTURE;
    
    // public static final int XSCALE = 1<<16;
    private static FloatBuffer floatBuf = null;
    private static IntBuffer intBuf = null;
    public GL11 gl;

    public MisGL11(GL11 gl) {
        initBuffers();
        this.gl = gl;
    }
    
    private static synchronized void initBuffers()  {
        if (floatBuf != null) {
            return;
        }
        ByteBuffer bbuf = ByteBuffer.allocateDirect(20*4);
        bbuf.order(ByteOrder.nativeOrder());
        floatBuf = bbuf.asFloatBuffer();
        bbuf = ByteBuffer.allocateDirect(20*4);
        bbuf.order(ByteOrder.nativeOrder());
        intBuf = bbuf.asIntBuffer();
    }

    // ---------------------------------------------------------------------
    // GL10 methods:

    public void glActiveTexture(int texture) {
        gl.glActiveTexture(texture);
    }

    public void glAlphaFunc(int func, float ref) {
        gl.glAlphaFunc(func, ref);
    }

    public void glAlphaFuncx(int func, float ref) {
        gl.glAlphaFunc(func, ref);
    }

    public void glBindTexture(int target, int texture) {
        gl.glBindTexture(target, texture);
    }

    public void glBlendFunc(int sfactor, int dfactor) {
        gl.glBlendFunc(sfactor, dfactor);
    }

    public void glClear(int mask) {
        gl.glClear(mask);
    }

    public void glClearColor(float red, float green, float blue, float alpha) {
        gl.glClearColor(red, green, blue, alpha);
    }

    public void glClearColorx(float red, float green, float blue, float alpha) {
        gl.glClearColor(red, green, blue, alpha);
    }

    public void glClearDepthf(float depth) {
        // gl.glClearDepth(depth);
    }

    public void glClearDepthx(float depth) {
        // gl.glClearDepth(depth);
    }

    public void glClearStencil(int s) {
        gl.glClearStencil(s);
    }

    public void glClientActiveTexture(int texture) {
        gl.glClientActiveTexture(texture);
    }

    public void glColor4f(float red, float green, float blue, float alpha) {
        gl.glColor4f(red, green, blue, alpha);
    }

    public void glColor4x(float red, float green, float blue, float alpha) {
        gl.glColor4f(red, green, blue, alpha);
    }

    public void glColorMask(boolean red, boolean green, boolean blue,
            boolean alpha) {
        gl.glColorMask(red, green, blue, alpha);
    }

    public void glColorPointer(int size, int type, int stride, Buffer pointer) {
        gl.glColorPointer(size, type, stride, (FloatBuffer)pointer);
    }

    public void glColorPointer(int stride, int offset, FloatBuffer buf) {
        // gl.glVertexPointer(stride, offset, buf);             
        throw new UnsupportedOperationException("Not implemented yet MG");
    }

    public void glCompressedTexImage2D(int target, int level,
            int internalformat, int width, int height, int border,
            int imageSize, Buffer data) {
        throw new UnsupportedOperationException("Not implemented yet MG");
    }

    public void glCompressedTexSubImage2D(int target, int level, int xoffset,
            int yoffset, int width, int height, int format, int imageSize,
            Buffer data) {
        throw new UnsupportedOperationException("Not implemented yet MG");
    }

    public void glCopyTexImage2D(int target, int level, int internalformat,
            int x, int y, int width, int height, int border) {
        throw new UnsupportedOperationException("Not implemented yet MG");
    }

    public void glCopyTexSubImage2D(int target, int level, int xoffset,
            int yoffset, int x, int y, int width, int height) {
        throw new UnsupportedOperationException("Not implemented yet MG");
    }

    public void glCullFace(int mode) {
        gl.glCullFace(mode);
    }

    public void glDeleteTextures(int n, int[] textures, int offset) {
        throw new UnsupportedOperationException("Not implemented yet MG");
    }

    public void glDeleteTextures(int n, IntBuffer textures) {
        throw new UnsupportedOperationException("Not implemented yet MG");
    }

    public void glDepthFunc(int func) {
        gl.glDepthFunc(func);
    }

    public void glDepthMask(boolean flag) {
        gl.glDepthMask(flag);
    }

    public void glDepthRangef(float near, float far) {
        //gl.glDepthRange(near, far);
        throw new UnsupportedOperationException("Not implemented yet MG");
    }

    public void glDepthRangex(float near, float far) {
        //gl.glDepthRange(near, far);
        throw new UnsupportedOperationException("Not implemented yet MG");
    }

    public void glDisable(int cap) {
        gl.glDisable(cap);
    }

    public void glDisableClientState(int array) {
        gl.glDisableClientState(array);
    }

    public void glDrawArrays(int mode, int first, int count) {
        gl.glDrawArrays(mode, first, count);
    }

    public void glDrawElements(int mode, int count, int type, Buffer indices) {
        gl.glDrawElements(mode, count, type, (ShortBuffer)indices);
    }

    public void glDrawElements(int mode, ShortBuffer indices) {
        // gl.glDrawElements(mode, indices);
        throw new UnsupportedOperationException("Not implemented yet MG");
    }

    public void glEnable(int cap) {
        gl.glEnable(cap);
    }

    public void glEnableClientState(int array) {
        gl.glEnableClientState(array);
    }

    public void glFinish() {
        gl.glFinish();
    }

    public void glFlush() {
        gl.glFlush();
    }

    public void glFogf(int pname, float param) {
        gl.glFogf(pname, param);
    }

    public void glFogfv(int pname, float[] params, int offset) {
        throw new UnsupportedOperationException("Not implemented yet MG");
    }

    public void glFogfv(int pname, FloatBuffer params) {
        gl.glFogfv(pname, params);
    }

    public void glFogx(int pname, float param) {
        gl.glFogf(pname, param);
    }

    public void glFogxv(int pname, int[] params, int offset) {
        // gl.glF
        throw new UnsupportedOperationException("Not implemented yet MG");
    }

    public void glFogxv(int pname, IntBuffer params) {
        gl.glFogxv(pname, params);
    }

    public void glFrontFace(int mode) {
        gl.glFrontFace(mode);
    }

    public void glFrustumf(float left, float right, float bottom, float top,
            float near, float far) {
        gl.glFrustumf(left, right, bottom, top, near, far);
    }

    public void glFrustumx(int left, int right, int bottom, int top,
            int near, int far) {
        gl.glFrustumx(left, right, bottom, top, near, far);
    }

    public void glGenTextures(int n, int[] textures, int offset) {
        gl.glGenTextures(n, textures, offset);
    }

    public void glGenTextures(int n, IntBuffer textures) {
        gl.glGenTextures(n, textures);
    }

    public int glGetError() {
        int result = gl.glGetError();
        return result;
    }

    public void glGetIntegerv(int pname, int[] params, int offset) {
        IntBuffer intBuf = IntBuffer.allocate(params.length);
        gl.glGetIntegerv(pname, intBuf);
        intBuf.get(params);
    }

    public void glGetIntegerv(int pname, IntBuffer params) {
        gl.glGetIntegerv(pname, params);
    }

    public String glGetString(int name) {
        String result = gl.glGetString(name);
        return result;
    }

    public void glHint(int target, int mode) {
        gl.glHint(target, mode);
    }

    public void glLightModelf(int pname, float param) {
        gl.glLightModelf(pname, param);
    }

    public void glLightModelfv(int pname, float[] params, int offset) {
        FloatBuffer fbuf = FloatBuffer.allocate(params.length);
        fbuf.put(params);
        gl.glLightModelfv(pname, fbuf);
    }

    public void glLightModelfv(int pname, FloatBuffer params) {
        gl.glLightModelfv(pname, params);
    }

    public void glLightModelxv(int pname, int[] params, int offset) {
        IntBuffer fbuf = IntBuffer.allocate(params.length);
        fbuf.put(params);
        gl.glLightModelxv(pname, fbuf);
    }

    public void glLightModelxv(int pname, IntBuffer params) {
        gl.glLightModelxv(pname, params);
    }

    public void glLightf(int light, int pname, float param) {
        gl.glLightf(light, pname, param);
    }

    public void glLightfv(int light, int pname, float[] params, int offset) {
        throw new UnsupportedOperationException("Not implemented yet MG");
    }

    public void glLightfv(int light, int pname, FloatBuffer params) {
        gl.glLightfv(light, pname, params);
    }

    public void glLightx(int light, int pname, float param) {
        gl.glLightf(light, pname, param);
    }

    public void glLightxv(int light, int pname, float[] params, int offset) {
        throw new UnsupportedOperationException("Not implemented yet MG");
    }

    public void glLightxv(int light, int pname, IntBuffer params) {
        gl.glLightxv(light, pname, params);
    }

    public void glLineWidth(float width) {
        gl.glLineWidth(width);
    }

    public void glLineWidthx(float width) {
        gl.glLineWidth(width);
    }

    public void glLoadIdentity() {
        gl.glLoadIdentity();
    }

    public void glLoadMatrixf(float[] m, int offset) {
        floatBuf.put(m);        
        gl.glLoadMatrixf(floatBuf);
        floatBuf.position(0);
    }

    public void glLoadMatrixf(FloatBuffer m) {
        gl.glLoadMatrixf(m);
    }

    public void glLoadMatrixx(int[] m, int offset) {
        IntBuffer intBuf = IntBuffer.wrap(m, offset, m.length - offset);     
        gl.glLoadMatrixx(intBuf);
        floatBuf.position(0);
    }

    public void glLoadMatrixx(IntBuffer m) {
        gl.glLoadMatrixx(m);
    }

    public void glLogicOp(int opcode) {
        gl.glLogicOp(opcode);
    }

    public void glMaterialf(int face, int pname, float param) {
        gl.glMaterialf(face, pname, param);
    }

    public void glMaterialfv(int face, int pname, float[] params, int offset) {
        float parm = params[0];
        gl.glMaterialf(face, pname, parm);
    }

    public void glMaterialfv(int face, int pname, FloatBuffer params) {
        gl.glMaterialfv(face, pname, params);
    }

    public void glMaterialx(int face, int pname, int param) {
        gl.glMaterialx(face, pname, param);
    }

    public void glMaterialxv(int face, int pname, int[] params, int offset) {
        IntBuffer intBuf = IntBuffer.wrap(params, offset, params.length - offset);     
        gl.glMaterialxv(face, pname, intBuf);
    }

    public void glMaterialxv(int face, int pname, IntBuffer params) {
        gl.glMaterialxv(face, pname, params);
    }

    public void glMatrixMode(int mode) {
        switch (mode) {
        case MisGL11.GL_MODELVIEW:
            //mCurrent = mModelView;
            break;
        case MisGL11.GL_TEXTURE:
            //mCurrent = mTexture;
            break;
        case MisGL11.GL_PROJECTION:
            //mCurrent = mProjection;
            break;
        default:
            throw new IllegalArgumentException("Unknown matrix mode: " + mode);
        }
        gl.glMatrixMode(mode);
    }

    public void glMultMatrixf(float[] m, int offset) {
        floatBuf.put(m);
        floatBuf.position(0);
        gl.glMultMatrixf(floatBuf);
    }

    public void glMultMatrixf(FloatBuffer m) {
        gl.glMultMatrixf(m);
    }

    public void glMultMatrixx(int[] m, int offset) {
        IntBuffer intBuf = IntBuffer.wrap(m, offset, m.length - offset);     
        floatBuf.position(0);
        gl.glMultMatrixx(intBuf);
    }

    public void glMultMatrixx(IntBuffer m) {
        gl.glMultMatrixx(m);
    }

    public void glMultiTexCoord4f(int target,
            float s, float t, float r, float q) {
        gl.glMultiTexCoord4f(target, s, t, r, q);
    }

    public void glMultiTexCoord4x(int target, float s, float t, float r, float q) {
        gl.glMultiTexCoord4f(target, s, t, r, q);
    }

    public void glNormal3f(float nx, float ny, float nz) {
        gl.glNormal3f(nx, ny, nz);
    }

    public void glNormal3x(float nx, float ny, float nz) {
        gl.glNormal3f(nx, ny, nz);
    }

    public void glNormalPointer(int type, int stride, Buffer pointer) {
        gl.glNormalPointer(type, stride, pointer);
    }

    public void glOrthof(float left, float right, float bottom, float top,
            float near, float far) {
        gl.glOrthof(left, right, bottom, top, near, far);
    }

    public void glOrthox(float left, float right, float bottom, float top,
            float near, float far) {
        gl.glOrthof(left, right, bottom, top, near, far);
    }

    public void glPixelStorei(int pname, int param) {
        gl.glPixelStorei(pname, param);
    }

    public void glPointSize(float size) {
        gl.glPointSize(size);
    }

    public void glPointSizex(float size) {
        gl.glPointSize(size);
    }

    public void glPolygonOffset(float factor, float units) {
        gl.glPolygonOffset(factor, units);
    }

    public void glPolygonOffsetx(float factor, float units) {
        // GL11.glPolygonOffset(factor, units);
    }

    public void glPopMatrix() {
        gl.glPopMatrix();
    }

    public void glPushMatrix() {
        gl.glPushMatrix();
    }

    public void glReadPixels(int x, int y, int width, int height, int format,
            int type, Buffer pixels) {
        gl.glReadPixels(x, y, width, height, format, type, (ByteBuffer)pixels);
    }

    public void glRotatef(float angle, float x, float y, float z) {
        gl.glRotatef(angle, x, y, z);
    }

    public void glRotatex(float angle, float x, float y, float z) {
        gl.glRotatef(angle, x, y, z);
    }

    public void glSampleCoverage(float value, boolean invert) {
        gl.glSampleCoverage(value, invert);
    }

    public void glSampleCoveragex(float value, boolean invert) {
        gl.glSampleCoverage(value, invert);
    }

    public void glScalef(float x, float y, float z) {
        gl.glScalef(x, y, z);
    }

    public void glScalex(float x, float y, float z) {
        gl.glScalef(x, y, z);
    }

    public void glScissor(int x, int y, int width, int height) {
        gl.glScissor(x, y, width, height);
    }

    public void glShadeModel(int mode) {
        gl.glShadeModel(mode);
    }

    public void glStencilFunc(int func, int ref, int mask) {
        gl.glStencilFunc(func, ref, mask);
    }

    public void glStencilMask(int mask) {
        gl.glStencilMask(mask);
    }

    public void glStencilOp(int fail, int zfail, int zpass) {
        gl.glStencilOp(fail, zfail, zpass);
    }

    public void glTexCoordPointer(int size, int type,
            int stride, Buffer pointer) {
        gl.glTexCoordPointer(size, type, stride, (FloatBuffer)pointer);
    }

    public void glTexEnvf(int target, int pname, float param) {
        gl.glTexEnvf(target, pname, param);
    }

    public void glTexEnvfv(int target, int pname, float[] params, int offset) {
        floatBuf.put(params);
        gl.glTexEnvfv(target, pname, floatBuf);
        floatBuf.position(0);
    }

    public void glTexEnvfv(int target, int pname, FloatBuffer params) {
        gl.glTexEnvfv(target, pname, params);
    }

    public void glTexEnvx(int target, int pname, float param) {
        gl.glTexEnvf(target, pname, param);
    }

    public void glTexEnvxv(int target, int pname, int[] params, int offset) {
        intBuf.put(params);
        gl.glTexEnvxv(target, pname, intBuf);
        intBuf.position(0);
    }

    public void glTexEnvxv(int target, int pname, IntBuffer params) {
        gl.glTexEnvxv(target, pname, params);
    }

    public void glTexImage2D(int target, int level, int internalformat,
            int width, int height, int border, int format, int type,
            Buffer pixels) {
        throw new UnsupportedOperationException();
        //gl.glTexImage2D(target, level, internalformat, width, height, border,
        //        format, type, pixels);
    }

    public void glTexParameterf(int target, int pname, float param) {
        gl.glTexParameterf(target, pname, param);
    }

    public void glTexParameterx(int target, int pname, float param) {
        gl.glTexParameterf(target, pname, param);
    }

    public void glTexParameteriv(int target, int pname, int[] params, int offset) {
        IntBuffer intBuf = IntBuffer.allocate(params.length);
        intBuf.put(params);
        gl.glTexParameteriv(target, pname, intBuf);
    }

    public void glTexParameteriv(int target, int pname, IntBuffer params) {
        gl.glTexParameteriv(target, pname, params);
    }

    public void glTexSubImage2D(int target, int level, int xoffset,
            int yoffset, int width, int height, int format, int type,
            Buffer pixels) {
        throw new UnsupportedOperationException();
        //    gl.glTexSubImage2D(target, level, xoffset, yoffset, width, height,
        //        format, type, pixels);
    }

    public void glTranslatef(float x, float y, float z) {
        gl.glTranslatef(x, y, z);
    }

    public void glTranslatex(float x, float y, float z) {
        gl.glTranslatef(x, y, z);
    }

    /**
     * we assume we have float buffer
     * @param size
     * @param type
     * @param stride
     * @param pointer
     */
    public void glVertexPointer(int size, int type, int stride, Buffer pointer) {
        gl.glVertexPointer(size, type, stride, (FloatBuffer)pointer);
    }

    public void glViewport(int x, int y, int width, int height) {
        gl.glViewport(x, y, width, height);
    }

    public void glClipPlanef(int plane, float[] equation, int offset) {
        FloatBuffer equBuf = FloatBuffer.allocate(4);
        for (int i=0; i<4; i++) {
            equBuf.put(equation[i]);
        }
        gl.glClipPlanef(plane, equBuf);
    }

    public void glClipPlanef(int plane, FloatBuffer equation) {
        FloatBuffer equBuf = FloatBuffer.allocate(4);
        for (int i=0; i<4; i++) {
            equBuf.put(equation.get(i));
        }
        gl.glClipPlanef(plane, equBuf);
    }

    public void glClipPlanex(int plane, float[] equation, int offset) {
        FloatBuffer equBuf = FloatBuffer.allocate(4);
        for (int i=0; i<4; i++) {
            equBuf.put(equation[i]);
        }
        gl.glClipPlanef(plane, equBuf);
    }

    public void glClipPlanex(int plane, FloatBuffer equation) {
        FloatBuffer equBuf = FloatBuffer.allocate(4);
        for (int i=0; i<4; i++) {
            equBuf.put(equation.get(i));
        }
        gl.glClipPlanef(plane, equBuf);
    }

    // Unsupported GL11 methods

    public void glBindBuffer(int target, int buffer) {
        throw new UnsupportedOperationException();
    }

    public void glBufferData(int target, int size, Buffer data, int usage) {
        throw new UnsupportedOperationException();
    }

    public void glBufferSubData(int target, int offset, int size, Buffer data) {
        throw new UnsupportedOperationException();
    }

    public void glColor4ub(byte red, byte green, byte blue, byte alpha) {
        throw new UnsupportedOperationException();
    }

    public void glDeleteBuffers(int n, int[] buffers, int offset) {
        gl.glDeleteBuffers(n, buffers, offset);
    }

    public void glDeleteBuffers(int n, IntBuffer buffers) {
        gl.glDeleteBuffers(n, buffers);
    }

    public void glGenBuffers(int n, int[] buffers, int offset) {
        throw new UnsupportedOperationException();
    }

    public void glGenBuffers(int n, IntBuffer buffers) {
        throw new UnsupportedOperationException();
    }

    public void glGetBooleanv(int pname, boolean[] params, int offset) {
        throw new UnsupportedOperationException();
    }

    public void glGetBooleanv(int pname, IntBuffer params) {
        throw new UnsupportedOperationException();
    }

    public void glGetBufferParameteriv(int target, int pname, int[] params, int offset) {
        throw new UnsupportedOperationException();
    }

    public void glGetBufferParameteriv(int target, int pname, IntBuffer params) {
        throw new UnsupportedOperationException();
    }

    public void glGetClipPlanef(int pname, float[] eqn, int offset) {
        throw new UnsupportedOperationException();
    }

    public void glGetClipPlanef(int pname, FloatBuffer eqn) {
        throw new UnsupportedOperationException();
    }

    public void glGetClipPlanex(int pname, int[] eqn, int offset) {
        throw new UnsupportedOperationException();
    }

    public void glGetClipPlanex(int pname, IntBuffer eqn) {
        throw new UnsupportedOperationException();
    }

    public void glGetFixedv(int pname, int[] params, int offset) {
        throw new UnsupportedOperationException();
    }

    public void glGetFixedv(int pname, IntBuffer params) {
        throw new UnsupportedOperationException();
    }

    public void glGetFloatv(int pname, float[] params, int offset) {
        throw new UnsupportedOperationException();
    }

    public void glGetFloatv(int pname, FloatBuffer params) {
        throw new UnsupportedOperationException();
    }

    public void glGetLightfv(int light, int pname, float[] params, int offset) {
        throw new UnsupportedOperationException();
    }

    public void glGetLightfv(int light, int pname, FloatBuffer params) {
        throw new UnsupportedOperationException();
    }

    public void glGetLightxv(int light, int pname, int[] params, int offset) {
        throw new UnsupportedOperationException();
    }

    public void glGetLightxv(int light, int pname, IntBuffer params) {
        throw new UnsupportedOperationException();
    }

    public void glGetMaterialfv(int face, int pname, float[] params, int offset) {
        throw new UnsupportedOperationException();
    }

    public void glGetMaterialfv(int face, int pname, FloatBuffer params) {
        throw new UnsupportedOperationException();
    }

    public void glGetMaterialxv(int face, int pname, int[] params, int offset) {
        throw new UnsupportedOperationException();
    }

    public void glGetMaterialxv(int face, int pname, IntBuffer params) {
        throw new UnsupportedOperationException();
    }

    public void glGetTexEnviv(int env, int pname, int[] params, int offset) {
        throw new UnsupportedOperationException();
    }

    public void glGetTexEnviv(int env, int pname, IntBuffer params) {
        throw new UnsupportedOperationException();
    }

    public void glGetTexEnvxv(int env, int pname, int[] params, int offset) {
        throw new UnsupportedOperationException();
    }

    public void glGetTexEnvxv(int env, int pname, IntBuffer params) {
        throw new UnsupportedOperationException();
    }

    public void glGetTexParameterfv(int target, int pname, float[] params, int offset) {
        throw new UnsupportedOperationException();
    }

    public void glGetTexParameterfv(int target, int pname, FloatBuffer params) {
        throw new UnsupportedOperationException();
    }

    public void glGetTexParameteriv(int target, int pname, int[] params, int offset) {
        throw new UnsupportedOperationException();
    }

    public void glGetTexParameteriv(int target, int pname, IntBuffer params) {
        throw new UnsupportedOperationException();
    }

    public void glGetTexParameterxv(int target, int pname, int[] params, int offset) {
        throw new UnsupportedOperationException();
    }

    public void glGetTexParameterxv(int target, int pname, IntBuffer params) {
        throw new UnsupportedOperationException();
    }

    public boolean glIsBuffer(int buffer) {
        throw new UnsupportedOperationException();
    }

    public boolean glIsEnabled(int cap) {
        throw new UnsupportedOperationException();
    }

    public boolean glIsTexture(int texture) {
        throw new UnsupportedOperationException();
    }

    public void glPointParameterf(int pname, float param) {
        throw new UnsupportedOperationException();
    }

    public void glPointParameterfv(int pname, float[] params, int offset) {
        throw new UnsupportedOperationException();
    }

    public void glPointParameterfv(int pname, FloatBuffer params) {
        throw new UnsupportedOperationException();
    }

    public void glPointParameterx(int pname, int param) {
        throw new UnsupportedOperationException();
    }

    public void glPointParameterxv(int pname, int[] params, int offset) {
        throw new UnsupportedOperationException();
    }

    public void glPointParameterxv(int pname, IntBuffer params) {
        throw new UnsupportedOperationException();
    }

    public void glPointSizePointerOES(int type, int stride, Buffer pointer) {
        throw new UnsupportedOperationException();
    }

    public void glTexEnvi(int target, int pname, int param) {
        throw new UnsupportedOperationException();
    }

    public void glTexEnviv(int target, int pname, int[] params, int offset) {
        throw new UnsupportedOperationException();
    }

    public void glTexEnviv(int target, int pname, IntBuffer params) {
        throw new UnsupportedOperationException();
    }

    public void glTexParameterfv(int target, int pname, float[] params, int offset) {
        throw new UnsupportedOperationException();
    }

    public void glTexParameterfv(int target, int pname, FloatBuffer params) {
        throw new UnsupportedOperationException();
    }

    public void glTexParameteri(int target, int pname, int param) {
        throw new UnsupportedOperationException();
    }

    public void glTexParameterxv(int target, int pname, int[] params, int offset) {
        throw new UnsupportedOperationException();
    }

    public void glTexParameterxv(int target, int pname, IntBuffer params) {
        throw new UnsupportedOperationException();
    }

    public void glColorPointer(int size, int type, int stride, int offset) {
        throw new UnsupportedOperationException();
    }

    public void glDrawElements(int mode, int count, int type, int offset) {
        throw new UnsupportedOperationException();
    }

    public void glGetPointerv(int pname, Buffer[] params) {
        throw new UnsupportedOperationException();
    }

    public void glNormalPointer(int type, int stride, int offset) {
        throw new UnsupportedOperationException();
    }

    public void glTexCoordPointer(int size, int type, int stride, int offset) {
        throw new UnsupportedOperationException();
    }

    public void glVertexPointer(int size, int type, int stride, int offset) {
        gl.glVertexPointer(size, type, stride, offset);               
    }

    public void glVertexPointer(int stride, int offset, FloatBuffer buf) {
        // gl.glVertexPointer(stride, offset, buf);               
        throw new UnsupportedOperationException();
    }

    public void glCurrentPaletteMatrixOES(int matrixpaletteindex) {
        throw new UnsupportedOperationException();
    }

    public void glLoadPaletteFromModelViewMatrixOES() {
        throw new UnsupportedOperationException();
    }

    public void glMatrixIndexPointerOES(int size, int type, int stride,
            Buffer pointer) {
        throw new UnsupportedOperationException();
    }

    public void glMatrixIndexPointerOES(int size, int type, int stride,
            int offset) {
        throw new UnsupportedOperationException();
    }

    public void glWeightPointerOES(int size, int type, int stride,
            Buffer pointer) {
        throw new UnsupportedOperationException();
    }

    public void glWeightPointerOES(int size, int type, int stride, int offset) {
        throw new UnsupportedOperationException();
    }
    
    public void glOrtho(float left, float right, float     bottom,
            float top, float zNear, float zFar) {
        gl.glOrthof(left, right, bottom, top, zNear, zFar);
    }
}
