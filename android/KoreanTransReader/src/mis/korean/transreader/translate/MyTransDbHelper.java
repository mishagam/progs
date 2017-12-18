package mis.korean.transreader.translate;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.util.Log;

/**
 * SQL code partly borrowed from:
 * http://www.vogella.com/tutorials/AndroidSQLite/article.html#databasetutorial_intro
 * @author misha
 *
 */

public class MyTransDbHelper extends SQLiteOpenHelper {
	private static final String TAG = MyTransDbHelper.class.getName();

	public static final String TRANS_DB_NAME = "trans.db";
	public static final int TRANS_DB_VERSION = 1;
	public static final String TABLE_TRANS = "trans";
	public static final String COL_ID = "_id";
	public static final String COL_WORD = "word";
	public static final String COL_TRANS = "trans";

	// Database creation sql statement
	private static final String TRANS_DB_CREATE = "create table " + TABLE_TRANS
			+ "(" + COL_ID + " integer primary key autoincrement, " + COL_WORD
			+ " text not null," + COL_TRANS + " text not null);";

	public MyTransDbHelper(Context context) {
		super(context, TRANS_DB_NAME, null, TRANS_DB_VERSION);
	}

	@Override
	public void onCreate(SQLiteDatabase database) {
		database.execSQL(TRANS_DB_CREATE);
	}

	@Override
	public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
		Log.w(TAG, "Upgrading database from version " + oldVersion + " to "
				+ newVersion + ", which will destroy all old data");
		db.execSQL("DROP TABLE IF EXISTS " + TABLE_TRANS);
		onCreate(db);
	}

}
