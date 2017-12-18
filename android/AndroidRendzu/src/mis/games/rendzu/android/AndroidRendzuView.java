package mis.games.rendzu.android;

import java.util.List;
import java.util.Timer;

import mis.games.rendzu.GameException;
import mis.games.rendzu.RGame;
import mis.games.rendzu.RMove;
import mis.games.rendzu.RPoint;
import mis.games.rendzu.client.RemoteGame;
import mis.games.rendzu.client.RendzuClient;
import mis.games.rendzu.simplegame.Rendzu;
import mis.games.utils.GameState;
import mis.games.utils.GameVariant;
import mis.games.utils.RendzuOptions;
import mis.games.utils.RendzuStatistics;
import mis.games.rendzgame.RendzuGame;
import mis.games.rendzgame.RendzuParameters;
import mis.games.server.OneRGame;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Typeface;
import android.os.Handler;
import android.os.Message;
import android.util.Log;
import android.view.Display;
import android.view.MotionEvent;
import android.view.View;
import android.widget.HorizontalScrollView;
import android.widget.ScrollView;

public class AndroidRendzuView extends View implements View.OnClickListener, Handler.Callback {
	public static final String TAG = AndroidRendzuView.class.getSimpleName();

	int step = 50;
	final int stepmax = 50;
	int stepmin = 21;
	float coefBigSmall = ((float) stepmax) / stepmin;
	int nx = 19;
	int ny = 19;
	int sx = nx * step + 5;
	int sy = ny * step + 5;
	int halfScreenMin = 0;
	ScrollView scrollV;
	HorizontalScrollView scrollH;
	boolean bigScreen = false;
	int lastX, lastY;
	public RGame game = null;
	/**
	 * show simplest hints - need to close 4, close 3
	 */
	public boolean showHints0 = false;
	public boolean showLastComputerMove = true;
	public boolean showLastYourMove = true;
	int X0, X1, Y0, Y1;
	static final int SHIFT_X = 6; 
	static final int SHIFT_Y = 21; 	
	static final int SHIFT_X_BIG = 15; 
	static final int SHIFT_Y_BIG = 35; 
	int shiftX=0, shiftY=0;
	Timer t = null;
	AndroidRendzuActivity activityContext;
	Handler handler;
	public static final int MSG_COMPUTER_MOVE_DONE = 500;
    public static final int MSG_SCROLL = 501;
    public static final int MSG_OBSERVE_REMOTE_GAME = 502;
	private RendzuOptions opts = null; 
	RendzuClient client = null;
	private RMove computerMove = null;
	private GameState state;
    private RendzuStatistics stats;

	public AndroidRendzuView(AndroidRendzuActivity context, ScrollView scrollV,
			HorizontalScrollView scrollH) {
		super(context);
		opts = GameMenuActivity.opts; 
		this.activityContext = context;
		this.scrollV = scrollV;
		this.scrollH = scrollH;
		scrollV.setVerticalFadingEdgeEnabled(false);
		scrollV.setHorizontalFadingEdgeEnabled(false);
		scrollH.setVerticalFadingEdgeEnabled(false);
		scrollH.setHorizontalFadingEdgeEnabled(false);
		this.setOnClickListener(this);
        if (opts.gameVar == GameVariant.EASY) {
            game = new Rendzu();
        } else if (opts.gameVar == GameVariant.OBSERVE) {
            OneRGame ogame = new OneRGame(opts.remoteGameId, 0);
            game = new RemoteGame(ogame, 0);
            game.setId(opts.remoteGameId);
		} else if (opts.gameVar == GameVariant.HARD) {
		    int sz = RendzuOptions.DEFAULT_SIZE;
		    byte [][]pos = new byte[sz][sz];
		    game = new RendzuGame(pos);
		}
		Display display = context.getWindowManager().getDefaultDisplay(); 
		stepmin = (display.getWidth()-5) / nx;
		bigScreen = false;
		setGameSizes();
		client = RendzuClient.getInstance(game, opts.gameServerUrl);
		if (opts.gameVar != GameVariant.OBSERVE) {
		    if (opts.connectToServer) {
		        client.reportNewGame();
		    }
            if (opts.compFirst) {
                RMove rm = new RMove(9, 9, 1);
                if (opts.connectToServer) {
                    client.reportMove(rm);
                }
                game.addMove(rm);
            } 
        }
        handler = new Handler(this);
        if (opts.gameVar == GameVariant.OBSERVE) {
            handler.sendEmptyMessageDelayed(MSG_OBSERVE_REMOTE_GAME, 500);
        }
        if (opts.gameVar == GameVariant.HARD) {
            RendzuGame rgame = (RendzuGame)game;
            rgame.moveTime = opts.timePerMove;
        }
        stats = RendzuStatistics.getInstance();
        setState(GameState.WAITING);        
	}
	
	private void setState(GameState gs) {
	    this.state = gs;
	    switch (gs) {
        case THINKING: 
            activityContext.stateView.setText("Thinking");
            break;
            
        case WAITING: 
            activityContext.stateView.setText("Waiting");
            break;
            
        case COMPUTER_WON: 
            activityContext.stateView.setText("Computer Won!");
            break;
            
        case MAN_WON: 
            activityContext.stateView.setText("Man Won!");
            break;            
	    }	    
	}

	@Override
	public void onClick(View v) {
		Log.i(TAG, "RendzuCanvasView.onClick() called, bigScreen = "
				+ bigScreen);
		
		// we check field on mouse down, we only attempt to accurately
		// check 
		if (opts.gameVar != GameVariant.OBSERVE && bigScreen && state == GameState.WAITING) {
            int xx = (int)((lastX - X0) / step);
            int yy = (int)((lastY - Y0) / step);
            RMove m = new RMove(xx, yy, game.getManSide());
            long ret = game.addMove(m);
            if (ret == Rendzu.M_OK) {
                setState(GameState.THINKING);
                if (opts.connectToServer) {
                    client.reportMove(m);
                }            
                startComputerMove();
            }
		}

		bigScreen = !bigScreen;
		setGameSizes();
		this.onMeasure(sx, sy);
		this.requestLayout();
		if (bigScreen) {
			int xx = (int) (lastX * (coefBigSmall - 1.0));
			int yy = (int) (lastY * (coefBigSmall - 1.0));
			Log.i(TAG, "last X, Y was " + lastX + " " + lastY + "scrolling to xx, yy = " + xx + " " + yy);
			if (xx < 0) {
				xx = 0;
			}
			if (yy < 0) {
				yy = 0;
			}
			if (xx > 0 || yy > 0) {
				Message msg = new Message();
				msg.what = MSG_SCROLL;
				msg.arg1 = xx;
				msg.arg2 = yy;
				handler.sendMessage(msg);
			}
		}
	}
	
	private void setGameSizes() {
		if (bigScreen) {
			step = stepmax;
			shiftX = SHIFT_X_BIG;
			shiftY = SHIFT_Y_BIG;
		} else {
			step = stepmin;
			shiftX = SHIFT_X;
			shiftY = SHIFT_Y;
		}
		nx = game.getSx();
		ny = game.getSy();
		sx = nx * step + 5;
		sy = ny * step + 5;
		halfScreenMin = (nx * stepmin) / 2;
		coefBigSmall = ((float) stepmax) / stepmin;
	}

	@Override
	protected void onDraw(Canvas c) {
		Paint p = new Paint();
		if (bigScreen) {
			p.setColor(Color.LTGRAY);
		} else {
			p.setColor(Color.rgb(240, 240, 216));
		}
		c.drawPaint(p);
		paintDesk(c);
	}

	@Override
	protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
		Log.i(TAG, "onMeasure() called, wid, hei = " + widthMeasureSpec + " "
				+ heightMeasureSpec);
		setMeasuredDimension(sx, sy);
	}

	@Override
	protected int getSuggestedMinimumHeight() {
		return sy;
	}

	@Override
	protected int getSuggestedMinimumWidth() {
		return sx;
	}

	@Override
	public boolean onTouchEvent(MotionEvent event) {
		float x = event.getX();
		float y = event.getY();
		int action = event.getAction();
		lastX = (int) x;
		lastY = (int) y;
		int scV = scrollV.getScrollY();
		int scH = scrollH.getScrollX();

		Log.i("RendzuCanvasView", "onTouchEvent(), action, x, y = " + action
				+ " " + x + " " + y);
		Log.i("RendzuCanvasView", "onTouchEvent(), scV, scH = " + scV + " "
				+ scH);		
		return super.onTouchEvent(event);
	}
    
	/**
	 * painting rendzu desk.
	 * borrowed initially from Java version.
	 * @param g
	 */
    private void paintDesk(Canvas c) {
    	X0 = (sx - nx*step -1) / 2;
    	Y0 = (sy - ny*step -1) / 2;
    	X1 = X0 + nx*step +1;
    	Y1 = Y0 + ny*step +1;
    	Paint p = new Paint();
    	p.setColor(Color.BLACK);
		p.setTextSize(bigScreen ? 36 : 22);
		p.setTypeface(Typeface.DEFAULT_BOLD);

    	for (int i=0; i<=nx; i++) {
    		int xx = X0 + i * step;
    		c.drawLine(xx, Y0, xx, Y1, p);
    	}
    	for (int i=0; i<=ny; i++) {
    		int yy = Y0 + i * step;
    		c.drawLine(X0, yy, X1, yy, p);
    	}
    	
    	// writing game fields
    	String []ss = new String[] {"0", " ", "X"};
    	int myGreen = Color.rgb(0, 150, 0);
    	for (int i=0; i<ny; i++) {
    		for (int j=0; j<nx; j++) {
    			int vb = game.getFld()[i][j];
    			int vkind = game.getFldTypes()[i][j];
    			
    			if (!opts.compFirst) {
    				// crosses always play first
    				vb = -vb;  
    			}
    			String vs = ss[vb+1];
    			int x = X0 + j * step + shiftX;
    			int y = Y0 + i * step + shiftY;
    			boolean fontChanged = false;
    			if (vkind == RendzuParameters.LAST_MOVE && showLastComputerMove) {
    				p.setColor(Color.BLUE);
    				fontChanged = true;
    			} else if (vkind == RendzuParameters.LAST_MAN_MOVE && showLastYourMove) {
    				p.setTypeface(Typeface.DEFAULT_BOLD);
    				p.setColor(myGreen);    				
    				fontChanged = true;
    			}
    			c.drawText(vs, x, y, p);
    			if (fontChanged) {
    				p.setTypeface(Typeface.DEFAULT);
    				p.setColor(Color.BLACK);    				
    			}
    		}
    	}
    }
    
    protected void startComputerMove() {

        // Fire off a thread to do some work that we shouldn't do directly in the UI thread
        Thread t = new Thread() {
            public void run() {
                try {
                    computerMove = game.nextMove();
                    if (game.getNumberMoves() <= 3) {
                        computerMove = game.getRandomRMove(0.25);
                    } else if (game.getNumberMoves() <= 5) {
                        computerMove = game.getRandomRMove(0.2);
                    } else if (game.getNumberMoves() <= 7) {
                        computerMove = game.getRandomRMove(0.1);
                    }
                } catch (GameException ge) {
                    Log.e(TAG, "nextMove() failed: " + ge);
                }
                handler.sendEmptyMessageDelayed(MSG_COMPUTER_MOVE_DONE, 500);
            }
        };
        t.start();
    }

	
	/**
	 * make next computer move after drawing your move and delay.
	 */
	public void makeNextComputerMove() throws GameException, CloneNotSupportedException {
	    if (game.manWon()) {
	        Log.i(TAG, "Man Won!");
            showAlertMessage("You Won!!!");     
            stats.reportGame(true);
            setState(GameState.MAN_WON);
        } else {    		
            if (opts.connectToServer) {
                client.reportMove(computerMove);
            }
            game.addMove(computerMove);
            setState(GameState.WAITING);
            if (game.compWon()) {
                Log.i(TAG, "Computer Won!");
                showAlertMessage("Computer Won!!!");
                stats.reportGame(false);
                setState(GameState.COMPUTER_WON);
            }
        }
	    this.invalidate();
	}
	
	public void showAlertMessage(String msg) {
    	AlertDialog.Builder builder = new AlertDialog.Builder(getContext());
    	builder.setTitle(msg);
    	builder.setCancelable(true);
    	builder.setNegativeButton("Close", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int id) {
                 dialog.cancel();
            }
        });

    	AlertDialog alert = builder.create();
    	alert.show();
	}
    
    public void observeRemoteMove() {
        List<RMove> moves = client.getLastMoves();
        if (moves.size() > 0) {
            //for(RMove m : moves) {
            //    game.addMove(m);
            //}
            invalidate();
        }
        handler.sendEmptyMessageDelayed(MSG_OBSERVE_REMOTE_GAME, 500);
    }
    
    public void undoMove() {
        if (opts.connectToServer) {
            client.reportUndoMove();
        }
        game.undoMove();
        if (state == GameState.MAN_WON) {
            setState(GameState.THINKING);
            startComputerMove();
        } else {
            setState(GameState.WAITING);
        }
        invalidate();
    }

	@Override
	public boolean handleMessage(Message msg) {
		Log.e(TAG, "handling message with what = " + msg.what);
		if (msg.what == MSG_COMPUTER_MOVE_DONE) {
		    try {
		        makeNextComputerMove();
		    } catch (GameException e) {
		        Log.e(TAG, "makeNextComputerMove failed: " + e);
		    } catch (CloneNotSupportedException e) {
		        Log.e(TAG, "makeNextComputerMove failed: " + e);
		    }
        } else if (msg.what == MSG_SCROLL) {
            int xx = msg.arg1;
            int yy = msg.arg2;
            scrollH.scrollTo(xx, 0);
            scrollV.scrollTo(0, yy);
            this.invalidate();
        } else if (msg.what == MSG_OBSERVE_REMOTE_GAME) {
            observeRemoteMove();
		} else {
			Log.e(TAG, "Unknown message with what = " + msg.what);
			return false;
		}
		return true;
	}
}
