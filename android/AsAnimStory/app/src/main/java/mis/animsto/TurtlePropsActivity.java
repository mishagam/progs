package mis.animsto;

import mis.animsto.figures.Turtle;
import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;
import android.widget.TextView;

public class TurtlePropsActivity extends Activity {
	
	public static Turtle workTurtle = null;
	private TextView turtleNameView = null;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_turtle_props);
		turtleNameView = (TextView)this.findViewById(R.id.turtleName);
		turtleNameView.setText(workTurtle.getName());
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.turtle_props, menu);
		return true;
	}

}
