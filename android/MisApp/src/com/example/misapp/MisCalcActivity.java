package com.example.misapp;

import android.app.Activity;
import android.content.Context;
import android.graphics.Color;
import android.os.Bundle;
import android.text.Editable;
import android.util.Log;
import android.view.Menu;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MisCalcActivity extends Activity {
	public static final String TAG = MisCalcActivity.class.getSimpleName();

	TextView calcView = null;
	View allView = null;

	long valA = 0;
	long valB = 0;
	char lastOp = 0;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_calc);
		allView = this.findViewById(R.id.lineText);
		

		int[] btnIds = new int[] { R.id.button0, R.id.button1, R.id.button2,
				R.id.button3, R.id.button4, R.id.button5, R.id.button6,
				R.id.button7, R.id.button8, R.id.button9, 0 };
		int[] opBtnIds = new int[] { R.id.buttonAdd, R.id.buttonSub,
				R.id.buttonMul, R.id.buttonDiv, R.id.buttonEqu };
		char []ops = new char[]{'+','-','*','/','='};

		calcView = (TextView) findViewById(R.id.calcText);

		// set text buttons
		for (int ib = 0; ib < 10; ib++) {
			int bid = btnIds[ib];
			final int finalb = ib;
			Button btn = (Button) findViewById(bid);
			if (btn == null) {
				throw new IllegalStateException("Cannot find button " + ib);
			}
			btn.setOnClickListener(new View.OnClickListener() {
				public void onClick(View view) {
					Context context = MisCalcActivity.this;
					((MisCalcActivity) context).digitOp(finalb);
				}
			});
		}

		// set text buttons
		for (int ib = 0; ib < 5; ib++) {
			int bid = opBtnIds[ib];
			final char finalOp = ops[ib];
			Button btn = (Button) findViewById(bid);
			if (btn == null) {
				throw new IllegalStateException("Cannot find button " + ib);
			}
			btn.setOnClickListener(new View.OnClickListener() {
				public void onClick(View view) {
					Log.d(TAG, "Test Scrolll called");
					Context context = MisCalcActivity.this;
					((MisCalcActivity) context).opOp(finalOp);
				}
			});
		}
	}
	
	void setNumber(long a) {
		String s = "" + a;
		calcView.setText(s);
		String ss = calcView.getText().toString();
		Log.d(TAG, " new text = " + ss);
		allView.setBackgroundColor(Color.BLUE);
	}

	void digitOp(int idx) {
		Log.d(TAG, "digitOp called, idx = " + idx);
		Log.d(TAG, " first valB: |" + valB + "|");
		valB = 10*valB + idx;
		Log.d(TAG, "snum: |" + valB + "|");
		setNumber(valB);
	}

	void opOp(char op) {
		Log.d(TAG, "opOp called, op = " + op);
		String snum = calcView.getText().toString();
		valB = Long.parseLong(snum);
		if (op == '=') {
			if (lastOp == '+') {
				valA = valA + valB;
			} else if (lastOp == '-') {
				valA = valA - valB;
			} else if (lastOp == '*') {
				valA = valA * valB;
			} else if (lastOp == '/') {
				valA = valA / valB;
			} else {
				valA = valB;
			}
		} else {
			valA = valB;
			valB = 0;
			lastOp = op;
		}		
		setNumber(valA);
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.activity_main, menu);
		return true;
	}

}
