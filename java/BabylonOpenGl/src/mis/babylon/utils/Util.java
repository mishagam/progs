/* 
 * Copyright (c) 2002-2008 LWJGL Project
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are 
 * met:
 * 
 * * Redistributions of source code must retain the above copyright 
 *   notice, this list of conditions and the following disclaimer.
 *
 * * Redistributions in binary form must reproduce the above copyright
 *   notice, this list of conditions and the following disclaimer in the
 *   documentation and/or other materials provided with the distribution.
 *
 * * Neither the name of 'LWJGL' nor the names of 
 *   its contributors may be used to endorse or promote products derived 
 *   from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
 * TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, 
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, 
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR 
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING 
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
package mis.babylon.utils;

import java.nio.FloatBuffer;
import java.nio.IntBuffer;
import java.util.List;

import mis.babylon.game.graphics.Point;
import mis.babylon.utils.vector.MMatrix4f;

/**
 * Util.java
 * <p/>
 * <p/>
 * Created 7-jan-2004
 *
 * @author Erik Duijs
 */
public class Util {

    /**
     * temp IntBuffer of one for getting an int from some GL functions
     */
    private static IntBuffer scratch = MBufferUtils.createIntBuffer(16);

    /**
     * temp IntBuffer of one for getting an int from some GL functions
     */
    private static FloatBuffer fscratch = MBufferUtils.createFloatBuffer(16);

	/**
	 * Return ceiling of integer division
	 *
	 * @param a
	 * @param b
	 *
	 * @return int
	 */
	protected static int ceil(int a, int b) {
		return (a % b == 0 ? a / b : a / b + 1);
	}

	/**
	 * Normalize vector
	 *
	 * @param v
	 *
	 * @return float[]
	 */
	protected static float[] normalize(float[] v) {
		float r;

		r = (float)Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
		if ( r == 0.0 )
			return v;

		r = 1.0f / r;

		v[0] *= r;
		v[1] *= r;
		v[2] *= r;

		return v;
	}

	/**
	 * Calculate cross-product
	 *
	 * @param v1
	 * @param v2
	 * @param result
	 */
	protected static void cross(float[] v1, float[] v2, float[] result) {
		result[0] = v1[1] * v2[2] - v1[2] * v2[1];
		result[1] = v1[2] * v2[0] - v1[0] * v2[2];
		result[2] = v1[0] * v2[1] - v1[1] * v2[0];
	}

	/**
	 * Method nearestPower.
	 * <p/>
	 * Compute the nearest power of 2 number.  This algorithm is a little strange, but it works quite well.
	 *
	 * @param value
	 *
	 * @return int
	 */
	protected static int nearestPower(int value) {
		int i;

		i = 1;

		/* Error! */
		if ( value == 0 )
			return -1;

		for ( ; ; ) {
			if ( value == 1 ) {
				return i;
			} else if ( value == 3 ) {
				return i << 2;
			}
			value >>= 1;
			i <<= 1;
		}
	}
    
    public static void printMatrix(String name, float []mat) {
        System.out.println("Matrix: " + name);
        for (int i=0; i<4; i++) {
            for (int j=0; j<4; j++) {
                System.out.printf("%8f ", mat[4*i+j]);
            }
            System.out.println();
        }
    }
    
    public static void matStoreArray(MMatrix4f mat, float []ma) {
        mat.store(fscratch);
        fscratch.get(ma);        
    }
    
    public static void printMatrix(String name, MMatrix4f mat) {
        float []ma = new float[16];
        matStoreArray(mat, ma);
        printMatrix(name, ma);
    }
    
    public static void printMatrix(String name, FloatBuffer mat) {
        float []ma = new float[16];
        mat.get(ma);
        mat.position(0);
        printMatrix(name, ma);
    }
    
    public static void printVector(String name, float []v) {
        System.out.print("Vector " + name + " : ");
        for (int i=0; i<v.length; i++) {
            System.out.printf("%8f ", v[i]);
        }
        System.out.println();
    }
    
    public static int colorFloatToInt(float r, float g, float b) {
        int ir = (int)(255 * r);
        int ig = (int)(255 * g);
        int ib = (int)(255 * b);
        return (ir << 16) + (ig << 8) + ib;
    }
    
    public static float [] colorIntToFloat(int col) {
        float redf =   (float)(((col >>16) & 0xFF) / 256.0);
        float greenf = (float)(((col >> 8) & 0xFF) / 256.0);
        float bluef =  (float)(((col >> 0) & 0xFF) / 256.0);
        float []ret = new float[]{redf, greenf, bluef};
        return ret;
    }
    
    public static void copyList(List<Point> src, List<Point> dst) {
        dst.clear();
        for (Point p : src) {
            Point pd = new Point(p.x, p.y, p.z);
            dst.add(pd);        }
        
    }
}
