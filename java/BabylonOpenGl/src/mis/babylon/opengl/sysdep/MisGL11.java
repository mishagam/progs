package mis.babylon.opengl.sysdep;

import java.nio.Buffer;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.DoubleBuffer;
import java.nio.FloatBuffer;
import java.nio.IntBuffer;
import java.nio.ShortBuffer;

import org.lwjgl.opengl.GL11;
import org.lwjgl.opengl.GL13;

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
    
    // public static final int XSCALE = 1<<16;
    private FloatBuffer floatBuf = null;

    public MisGL11() {
        ByteBuffer bbuf = ByteBuffer.allocateDirect(20*4);
        bbuf.order(ByteOrder.nativeOrder());
        floatBuf = bbuf.asFloatBuffer();
    }

    // ---------------------------------------------------------------------
    // GL10 methods:

    public void glActiveTexture(int texture) {
        GL13.glActiveTexture(texture);
    }

    public void glAlphaFunc(int func, float ref) {
        GL11.glAlphaFunc(func, ref);
    }

    public void glAlphaFuncx(int func, float ref) {
        GL11.glAlphaFunc(func, ref);
    }

    public void glBindTexture(int target, int texture) {
        GL11.glBindTexture(target, texture);
    }

    public void glBlendFunc(int sfactor, int dfactor) {
        GL11.glBlendFunc(sfactor, dfactor);
    }

    public void glClear(int mask) {
        GL11.glClear(mask);
    }

    public void glClearColor(float red, float green, float blue, float alpha) {
        GL11.glClearColor(red, green, blue, alpha);
    }

    public void glClearColorx(float red, float green, float blue, float alpha) {
        GL11.glClearColor(red, green, blue, alpha);
    }

    public void glClearDepthf(float depth) {
        GL11.glClearDepth(depth);
    }

    public void glClearDepthx(float depth) {
        GL11.glClearDepth(depth);
    }

    public void glClearStencil(int s) {
        GL11.glClearStencil(s);
    }

    public void glClientActiveTexture(int texture) {
        GL13.glClientActiveTexture(texture);
    }

    public void glColor4f(float red, float green, float blue, float alpha) {
        GL11.glColor4f(red, green, blue, alpha);
    }

    public void glColor4x(float red, float green, float blue, float alpha) {
        GL11.glColor4f(red, green, blue, alpha);
    }

    public void glColorMask(boolean red, boolean green, boolean blue,
            boolean alpha) {
        GL11.glColorMask(red, green, blue, alpha);
    }

    public void glColorPointer(int size, int type, int stride, Buffer pointer) {
        GL11.glColorPointer(size, stride, (FloatBuffer)pointer);
    }

    public void glColorPointer(int stride, int offset, FloatBuffer buf) {
        GL11.glVertexPointer(stride, offset, buf);               
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
        GL11.glCullFace(mode);
    }

    public void glDeleteTextures(int n, int[] textures, int offset) {
        throw new UnsupportedOperationException("Not implemented yet MG");
    }

    public void glDeleteTextures(int n, IntBuffer textures) {
        throw new UnsupportedOperationException("Not implemented yet MG");
    }

    public void glDepthFunc(int func) {
        GL11.glDepthFunc(func);
    }

    public void glDepthMask(boolean flag) {
        GL11.glDepthMask(flag);
    }

    public void glDepthRangef(float near, float far) {
        GL11.glDepthRange(near, far);
    }

    public void glDepthRangex(float near, float far) {
        GL11.glDepthRange(near, far);
    }

    public void glDisable(int cap) {
        GL11.glDisable(cap);
    }

    public void glDisableClientState(int array) {
        GL11.glDisableClientState(array);
    }

    public void glDrawArrays(int mode, int first, int count) {
        GL11.glDrawArrays(mode, first, count);
    }

    public void glDrawElements(int mode, int count, int type, Buffer indices) {
        GL11.glDrawElements(mode, (ShortBuffer)indices);
    }

    public void glDrawElements(int mode, ShortBuffer indices) {
        GL11.glDrawElements(mode, indices);
    }

    public void glEnable(int cap) {
        GL11.glEnable(cap);
    }

    public void glEnableClientState(int array) {
        GL11.glEnableClientState(array);
    }

    public void glFinish() {
        GL11.glFinish();
    }

    public void glFlush() {
        GL11.glFlush();
    }

    public void glFogf(int pname, float param) {
        GL11.glFogf(pname, param);
    }

    public void glFogfv(int pname, float[] params, int offset) {
        throw new UnsupportedOperationException("Not implemented yet MG");
    }

    public void glFogfv(int pname, FloatBuffer params) {
        GL11.glFog(pname, params);
    }

    public void glFogx(int pname, float param) {
        GL11.glFogf(pname, param);
    }

    public void glFogxv(int pname, int[] params, int offset) {
        throw new UnsupportedOperationException("Not implemented yet MG");
    }

    public void glFogxv(int pname, IntBuffer params) {
        throw new UnsupportedOperationException("Not implemented yet MG");
    }

    public void glFrontFace(int mode) {
        GL11.glFrontFace(mode);
    }

    public void glFrustumf(float left, float right, float bottom, float top,
            float near, float far) {
        GL11.glFrustum(left, right, bottom, top, near, far);
    }

    public void glFrustumx(float left, float right, float bottom, float top,
            float near, float far) {
        GL11.glFrustum(left, right, bottom, top, near, far);
    }

    public void glGenTextures(int n, int[] textures, int offset) {
        throw new UnsupportedOperationException("Not implemented yet MG");
    }

    public void glGenTextures(int n, IntBuffer textures) {
        GL11.glGenTextures(textures);
    }

    public int glGetError() {
        int result = GL11.glGetError();
        return result;
    }

    public void glGetIntegerv(int pname, int[] params, int offset) {
        IntBuffer intBuf = IntBuffer.allocate(params.length);
        GL11.glGetInteger(pname, intBuf);
        intBuf.get(params);
    }

    public void glGetIntegerv(int pname, IntBuffer params) {
        GL11.glGetInteger(pname, params);
    }

    public String glGetString(int name) {
        String result = GL11.glGetString(name);
        return result;
    }

    public void glHint(int target, int mode) {
        GL11.glHint(target, mode);
    }

    public void glLightModelf(int pname, float param) {
        GL11.glLightModelf(pname, param);
    }

    public void glLightModelfv(int pname, float[] params, int offset) {
        FloatBuffer fbuf = FloatBuffer.allocate(params.length);
        fbuf.put(params);
        GL11.glLightModel(pname, fbuf);
    }

    public void glLightModelfv(int pname, FloatBuffer params) {
        GL11.glLightModel(pname, params);
    }

    public void glLightModelxv(int pname, float[] params, int offset) {
        FloatBuffer fbuf = FloatBuffer.allocate(params.length);
        fbuf.put(params);
        GL11.glLightModel(pname, fbuf);
    }

    public void glLightModelxv(int pname, FloatBuffer params) {
        GL11.glLightModel(pname, params);
    }

    public void glLightModelxv(int pname, IntBuffer params) {
        throw new UnsupportedOperationException("Not implemented yet MG");
    }

    public void glLightf(int light, int pname, float param) {
        GL11.glLightf(light, pname, param);
    }

    public void glLightfv(int light, int pname, float[] params, int offset) {
        throw new UnsupportedOperationException("Not implemented yet MG");
    }

    public void glLightfv(int light, int pname, FloatBuffer params) {
        GL11.glLight(light, pname, params);
    }

    public void glLightx(int light, int pname, float param) {
        GL11.glLightf(light, pname, param);
    }

    public void glLightxv(int light, int pname, float[] params, int offset) {
        throw new UnsupportedOperationException("Not implemented yet MG");
    }

    public void glLightxv(int light, int pname, FloatBuffer params) {
        GL11.glLight(light, pname, params);
    }

    public void glLineWidth(float width) {
        GL11.glLineWidth(width);
    }

    public void glLineWidthx(float width) {
        GL11.glLineWidth(width);
    }

    public void glLoadIdentity() {
        GL11.glLoadIdentity();
    }

    public void glLoadMatrixf(float[] m, int offset) {
        floatBuf.put(m);        
        GL11.glLoadMatrix(floatBuf);
        floatBuf.position(0);
    }

    public void glLoadMatrixf(FloatBuffer m) {
        GL11.glLoadMatrix(m);
    }

    public void glLoadMatrixx(float[] m, int offset) {
        floatBuf.put(m);        
        GL11.glLoadMatrix(floatBuf);
        floatBuf.position(0);
    }

    public void glLoadMatrixx(FloatBuffer m) {
        GL11.glLoadMatrix(m);
    }

    public void glLogicOp(int opcode) {
        GL11.glLogicOp(opcode);
    }

    public void glMaterialf(int face, int pname, float param) {
        GL11.glMaterialf(face, pname, param);
    }

    public void glMaterialfv(int face, int pname, float[] params, int offset) {
        float parm = params[0];
        GL11.glMaterialf(face, pname, parm);
    }

    public void glMaterialfv(int face, int pname, FloatBuffer params) {
        GL11.glMaterial(face, pname, params);
    }

    public void glMaterialx(int face, int pname, float param) {
        GL11.glMaterialf(face, pname, param);
    }

    public void glMaterialxv(int face, int pname, float[] params, int offset) {
        glMaterialfv(face, pname, params, offset);
    }

    public void glMaterialxv(int face, int pname, FloatBuffer params) {
        GL11.glMaterial(face, pname, params);
    }

    public void glMatrixMode(int mode) {
        switch (mode) {
        case GL11.GL_MODELVIEW:
            //mCurrent = mModelView;
            break;
        case GL11.GL_TEXTURE:
            //mCurrent = mTexture;
            break;
        case GL11.GL_PROJECTION:
            //mCurrent = mProjection;
            break;
        default:
            throw new IllegalArgumentException("Unknown matrix mode: " + mode);
        }
        GL11.glMatrixMode(mode);
        //mMatrixMode = mode;
        //if ( _check) check();
    }

    public void glMultMatrixf(float[] m, int offset) {
        floatBuf.put(m);
        floatBuf.position(0);
        GL11.glMultMatrix(floatBuf);
    }

    public void glMultMatrixf(FloatBuffer m) {
        GL11.glMultMatrix(m);
    }

    public void glMultMatrixx(float[] m, int offset) {
        floatBuf.put(m);
        floatBuf.position(0);
        GL11.glMultMatrix(floatBuf);
    }

    public void glMultMatrixx(FloatBuffer m) {
        GL11.glMultMatrix(m);
    }

    public void glMultiTexCoord4f(int target,
            float s, float t, float r, float q) {
        GL13.glMultiTexCoord4f(target, s, t, r, q);
    }

    public void glMultiTexCoord4x(int target, float s, float t, float r, float q) {
        GL13.glMultiTexCoord4f(target, s, t, r, q);
    }

    public void glNormal3f(float nx, float ny, float nz) {
        GL11.glNormal3f(nx, ny, nz);
    }

    public void glNormal3x(float nx, float ny, float nz) {
        GL11.glNormal3f(nx, ny, nz);
    }

    public void glNormalPointer(int type, int stride, Buffer pointer) {
        throw new UnsupportedOperationException("Not implemented yet MG");
        // GL11.glNormalPointer(type, stride, pointer);
    }

    public void glOrthof(float left, float right, float bottom, float top,
            float near, float far) {
        GL11.glOrtho(left, right, bottom, top, near, far);
    }

    public void glOrthox(float left, float right, float bottom, float top,
            float near, float far) {
        GL11.glOrtho(left, right, bottom, top, near, far);
    }

    public void glPixelStorei(int pname, int param) {
        GL11.glPixelStorei(pname, param);
    }

    public void glPointSize(float size) {
        GL11.glPointSize(size);
    }

    public void glPointSizex(float size) {
        GL11.glPointSize(size);
    }

    public void glPolygonOffset(float factor, float units) {
        GL11.glPolygonOffset(factor, units);
    }

    public void glPolygonOffsetx(float factor, float units) {
        GL11.glPolygonOffset(factor, units);
    }

    public void glPopMatrix() {
        GL11.glPopMatrix();
    }

    public void glPushMatrix() {
        GL11.glPushMatrix();
    }

    public void glReadPixels(int x, int y, int width, int height, int format,
            int type, Buffer pixels) {
        GL11.glReadPixels(x, y, width, height, format, type, (ByteBuffer)pixels);
    }

    public void glRotatef(float angle, float x, float y, float z) {
        GL11.glRotatef(angle, x, y, z);
    }

    public void glRotatex(float angle, float x, float y, float z) {
        GL11.glRotatef(angle, x, y, z);
    }

    public void glSampleCoverage(float value, boolean invert) {
        GL13.glSampleCoverage(value, invert);
    }

    public void glSampleCoveragex(float value, boolean invert) {
        GL13.glSampleCoverage(value, invert);
    }

    public void glScalef(float x, float y, float z) {
        GL11.glScalef(x, y, z);
    }

    public void glScalex(float x, float y, float z) {
        GL11.glScalef(x, y, z);
    }

    public void glScissor(int x, int y, int width, int height) {
        GL11.glScissor(x, y, width, height);
    }

    public void glShadeModel(int mode) {
        GL11.glShadeModel(mode);
    }

    public void glStencilFunc(int func, int ref, int mask) {
        GL11.glStencilFunc(func, ref, mask);
    }

    public void glStencilMask(int mask) {
        GL11.glStencilMask(mask);
    }

    public void glStencilOp(int fail, int zfail, int zpass) {
        GL11.glStencilOp(fail, zfail, zpass);
    }

    public void glTexCoordPointer(int size, int type,
            int stride, Buffer pointer) {
        GL11.glTexCoordPointer(size, stride, (FloatBuffer)pointer);
    }

    public void glTexEnvf(int target, int pname, float param) {
        GL11.glTexEnvf(target, pname, param);
    }

    public void glTexEnvfv(int target, int pname, float[] params, int offset) {
        floatBuf.put(params);
        GL11.glTexEnv(target, pname, floatBuf);
        floatBuf.position(0);
    }

    public void glTexEnvfv(int target, int pname, FloatBuffer params) {
        GL11.glTexEnv(target, pname, params);
    }

    public void glTexEnvx(int target, int pname, float param) {
        GL11.glTexEnvf(target, pname, param);
    }

    public void glTexEnvxv(int target, int pname, float[] params, int offset) {
        floatBuf.put(params);
        GL11.glTexEnv(target, pname, floatBuf);
        floatBuf.position(0);
    }

    public void glTexEnvxv(int target, int pname, FloatBuffer params) {
        GL11.glTexEnv(target, pname, params);
    }

    public void glTexImage2D(int target, int level, int internalformat,
            int width, int height, int border, int format, int type,
            Buffer pixels) {
        throw new UnsupportedOperationException();
        //GL11.glTexImage2D(target, level, internalformat, width, height, border,
        //        format, type, pixels);
    }

    public void glTexParameterf(int target, int pname, float param) {
        GL11.glTexParameterf(target, pname, param);
    }

    public void glTexParameterx(int target, int pname, float param) {
        GL11.glTexParameterf(target, pname, param);
    }

    public void glTexParameteriv(int target, int pname, int[] params, int offset) {
        IntBuffer intBuf = IntBuffer.allocate(params.length);
        intBuf.put(params);
        GL11.glTexParameter(target, pname, intBuf);
    }

    public void glTexParameteriv(int target, int pname, IntBuffer params) {
        GL11.glTexParameter(target, pname, params);
    }

    public void glTexSubImage2D(int target, int level, int xoffset,
            int yoffset, int width, int height, int format, int type,
            Buffer pixels) {
        throw new UnsupportedOperationException();
        //    GL11.glTexSubImage2D(target, level, xoffset, yoffset, width, height,
        //        format, type, pixels);
    }

    public void glTranslatef(float x, float y, float z) {
        GL11.glTranslatef(x, y, z);
    }

    public void glTranslatex(float x, float y, float z) {
        GL11.glTranslatef(x, y, z);
    }

    /**
     * we assume we have float buffer
     * @param size
     * @param type
     * @param stride
     * @param pointer
     */
    public void glVertexPointer(int size, int type,
            int stride, Buffer pointer) {
        GL11.glVertexPointer(size, stride, (FloatBuffer)pointer);
    }

    public void glViewport(int x, int y, int width, int height) {
        GL11.glViewport(x, y, width, height);
    }

    public void glClipPlanef(int plane, float[] equation, int offset) {
        DoubleBuffer equBuf = DoubleBuffer.allocate(4);
        for (int i=0; i<4; i++) {
            equBuf.put(equation[i]);
        }
        GL11.glClipPlane(plane, equBuf);
    }

    public void glClipPlanef(int plane, FloatBuffer equation) {
        DoubleBuffer equBuf = DoubleBuffer.allocate(4);
        for (int i=0; i<4; i++) {
            equBuf.put(equation.get(i));
        }
        GL11.glClipPlane(plane, equBuf);
    }

    public void glClipPlanex(int plane, float[] equation, int offset) {
        DoubleBuffer equBuf = DoubleBuffer.allocate(4);
        for (int i=0; i<4; i++) {
            equBuf.put(equation[i]);
        }
        GL11.glClipPlane(plane, equBuf);
    }

    public void glClipPlanex(int plane, FloatBuffer equation) {
        DoubleBuffer equBuf = DoubleBuffer.allocate(4);
        for (int i=0; i<4; i++) {
            equBuf.put(equation.get(i));
        }
        GL11.glClipPlane(plane, equBuf);
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
        throw new UnsupportedOperationException();
    }

    public void glDeleteBuffers(int n, IntBuffer buffers) {
        throw new UnsupportedOperationException();
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
        GL11.glVertexPointer(size, type, stride, offset);               
    }

    public void glVertexPointer(int stride, int offset, FloatBuffer buf) {
        GL11.glVertexPointer(stride, offset, buf);               
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
}
