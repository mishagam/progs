package mis.babylon.utils;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.FloatBuffer;
import java.nio.IntBuffer;

public class MBufferUtils {
    public static IntBuffer createIntBuffer(int n) {
        ByteBuffer bb = ByteBuffer.allocateDirect(n*4);
        bb.order(ByteOrder.nativeOrder());
        IntBuffer ib = bb.asIntBuffer();
        return ib;        
    }

    public static FloatBuffer createFloatBuffer(int n) {
        ByteBuffer bb = ByteBuffer.allocateDirect(n*4);
        bb.order(ByteOrder.nativeOrder());
        FloatBuffer fb = bb.asFloatBuffer();
        return fb;        
    }

}
