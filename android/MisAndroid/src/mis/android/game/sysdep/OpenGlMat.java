package mis.android.game.sysdep;

import org.lwjgl.util.vector.Matrix4f;

public class OpenGlMat {
    public static int glhProjectf(float objx, float objy, float objz,
            float[] modelview, float[] projection, int[] viewport,
            float[] windowCoordinate) {
        // Transformation vectors
        float[] fTempo = new float[8];
        // Modelview transform
        fTempo[0] = modelview[0] * objx + modelview[4] * objy + modelview[8]
                * objz + modelview[12]; // w is always 1
        fTempo[1] = modelview[1] * objx + modelview[5] * objy + modelview[9]
                * objz + modelview[13];
        fTempo[2] = modelview[2] * objx + modelview[6] * objy + modelview[10]
                * objz + modelview[14];
        fTempo[3] = modelview[3] * objx + modelview[7] * objy + modelview[11]
                * objz + modelview[15];
        // Projection transform, the final row of projection matrix is always [0
        // 0 -1 0]
        // so we optimize for that.
        fTempo[4] = projection[0] * fTempo[0] + projection[4] * fTempo[1]
                + projection[8] * fTempo[2] + projection[12] * fTempo[3];
        fTempo[5] = projection[1] * fTempo[0] + projection[5] * fTempo[1]
                + projection[9] * fTempo[2] + projection[13] * fTempo[3];
        fTempo[6] = projection[2] * fTempo[0] + projection[6] * fTempo[1]
                + projection[10] * fTempo[2] + projection[14] * fTempo[3];
        fTempo[7] = -fTempo[2];
        // The result normalizes between -1 and 1
        if (fTempo[7] == 0.0) // The w value
            return 0;
        fTempo[7] = 1.0f / fTempo[7];
        // Perspective division
        fTempo[4] *= fTempo[7];
        fTempo[5] *= fTempo[7];
        fTempo[6] *= fTempo[7];
        // Window coordinates
        // Map x, y to range 0-1
        windowCoordinate[0] = (fTempo[4] * 0.5f + 0.5f) * viewport[2]
                + viewport[0];
        windowCoordinate[1] = (fTempo[5] * 0.5f + 0.5f) * viewport[3]
                + viewport[1];
        // This is only correct when glDepthRange(0.0, 1.0)
        windowCoordinate[2] = (1.0f + fTempo[6]) * 0.5f; // Between 0 and 1
        return 1;
    }

    public static int glhUnProjectf(float winx, float winy, float winz,
            float[] modelview, float[] projection, int[] viewport,
            float[] objectCoordinate) {
        // Transformation matrices
        float[] m = new float[16];
        float[] A = new float[16];
        float[] in = new float[16];
        float[] out = new float[16];
        // Calculation for inverting a matrix, compute projection x modelview
        // and store in A[16]
        MultiplyMatrices4by4OpenGL_FLOAT(A, projection, modelview);
        // Now compute the inverse of matrix A
        if (glhInvertMatrixf2(A, m) == 0)
            return 0;
        // Transformation of normalized coordinates between -1 and 1
        in[0] = (winx - (float) viewport[0]) / (float) viewport[2] * 2.0f
                - 1.0f;
        in[1] = (winy - (float) viewport[1]) / (float) viewport[3] * 2.0f
                - 1.0f;
        in[2] = 2.0f * winz - 1.0f;
        in[3] = 1.0f;
        // Objects coordinates
        MultiplyMatrixByVector4by4OpenGL_FLOAT(out, m, in);
        if (out[3] == 0.0)
            return 0;
        out[3] = 1.0f / out[3];
        objectCoordinate[0] = out[0] * out[3];
        objectCoordinate[1] = out[1] * out[3];
        objectCoordinate[2] = out[2] * out[3];
        return 1;
    }

    static void MultiplyMatrices4by4OpenGL_FLOAT(float[] result,
            float[] matrix1, float[] matrix2) {
        result[0] = matrix1[0] * matrix2[0] + matrix1[4] * matrix2[1]
                + matrix1[8] * matrix2[2] + matrix1[12] * matrix2[3];
        result[4] = matrix1[0] * matrix2[4] + matrix1[4] * matrix2[5]
                + matrix1[8] * matrix2[6] + matrix1[12] * matrix2[7];
        result[8] = matrix1[0] * matrix2[8] + matrix1[4] * matrix2[9]
                + matrix1[8] * matrix2[10] + matrix1[12] * matrix2[11];
        result[12] = matrix1[0] * matrix2[12] + matrix1[4] * matrix2[13]
                + matrix1[8] * matrix2[14] + matrix1[12] * matrix2[15];
        result[1] = matrix1[1] * matrix2[0] + matrix1[5] * matrix2[1]
                + matrix1[9] * matrix2[2] + matrix1[13] * matrix2[3];
        result[5] = matrix1[1] * matrix2[4] + matrix1[5] * matrix2[5]
                + matrix1[9] * matrix2[6] + matrix1[13] * matrix2[7];
        result[9] = matrix1[1] * matrix2[8] + matrix1[5] * matrix2[9]
                + matrix1[9] * matrix2[10] + matrix1[13] * matrix2[11];
        result[13] = matrix1[1] * matrix2[12] + matrix1[5] * matrix2[13]
                + matrix1[9] * matrix2[14] + matrix1[13] * matrix2[15];
        result[2] = matrix1[2] * matrix2[0] + matrix1[6] * matrix2[1]
                + matrix1[10] * matrix2[2] + matrix1[14] * matrix2[3];
        result[6] = matrix1[2] * matrix2[4] + matrix1[6] * matrix2[5]
                + matrix1[10] * matrix2[6] + matrix1[14] * matrix2[7];
        result[10] = matrix1[2] * matrix2[8] + matrix1[6] * matrix2[9]
                + matrix1[10] * matrix2[10] + matrix1[14] * matrix2[11];
        result[14] = matrix1[2] * matrix2[12] + matrix1[6] * matrix2[13]
                + matrix1[10] * matrix2[14] + matrix1[14] * matrix2[15];
        result[3] = matrix1[3] * matrix2[0] + matrix1[7] * matrix2[1]
                + matrix1[11] * matrix2[2] + matrix1[15] * matrix2[3];
        result[7] = matrix1[3] * matrix2[4] + matrix1[7] * matrix2[5]
                + matrix1[11] * matrix2[6] + matrix1[15] * matrix2[7];
        result[11] = matrix1[3] * matrix2[8] + matrix1[7] * matrix2[9]
                + matrix1[11] * matrix2[10] + matrix1[15] * matrix2[11];
        result[15] = matrix1[3] * matrix2[12] + matrix1[7] * matrix2[13]
                + matrix1[11] * matrix2[14] + matrix1[15] * matrix2[15];
    }

    static void MultiplyMatrixByVector4by4OpenGL_FLOAT(float[] resultvector,
            float[] matrix, float[] pvector) {
        resultvector[0] = matrix[0] * pvector[0] + matrix[4] * pvector[1]
                + matrix[8] * pvector[2] + matrix[12] * pvector[3];
        resultvector[1] = matrix[1] * pvector[0] + matrix[5] * pvector[1]
                + matrix[9] * pvector[2] + matrix[13] * pvector[3];
        resultvector[2] = matrix[2] * pvector[0] + matrix[6] * pvector[1]
                + matrix[10] * pvector[2] + matrix[14] * pvector[3];
        resultvector[3] = matrix[3] * pvector[0] + matrix[7] * pvector[1]
                + matrix[11] * pvector[2] + matrix[15] * pvector[3];
    }

    // This code comes directly from GLU except that it is for float
    static int glhInvertMatrixf2(float[] m, float[] out) {
        Matrix4f mm = new Matrix4f();
        Matrix4f mout = new Matrix4f();
        mm.loadArray(m);
        if (Matrix4f.invert(mm, mout) == null) {
            return 0;
        } else {
            mout.storeArray(out);
            return 1;
        }
    }
}
