package mis.babylon.game;

import mis.android.utils.Context;
import mis.android.utils.OnClickListener;
import mis.babylon.game.graphics.TexSquare;

/**
 * Class for display of texture image of button - such as selection 
 * of brick or log, turning image and so on.  
 */
public class GameSelectButton extends GameButton {
    OnClickListener listener = null;
    Context myContext = null;
    final int SIZE_Y = 80;
    final int SIZE_X = 700;
    
    public GameSelectButton(Context context, String image) {
        super();
        myContext = context;
        TexSquare md = new TexSquare(this);
        md.setSize(384, 128, 0);
        md.setMyContext(context);
        md.setTextureFileName(image);
        md.fillData(context);
        this.images.add(md);
    }
}
