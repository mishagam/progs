package mis.korean.transreader.translate;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.SQLException;
import android.database.sqlite.SQLiteDatabase;

public class TransDataSource {

	// Database fields
	private SQLiteDatabase database;
	private MyTransDbHelper dbHelper;
	private String[] allColumns = { MyTransDbHelper.COL_ID,
			MyTransDbHelper.COL_WORD, MyTransDbHelper.COL_TRANS };

	public TransDataSource(Context context) {
		dbHelper = new MyTransDbHelper(context);
	}

	public void open() throws SQLException {
		database = dbHelper.getWritableDatabase();
	}

	public void close() {
		dbHelper.close();
	}

	public WordTrans createTrans(String word, String trans) {
		ContentValues values = new ContentValues();
		values.put(MyTransDbHelper.COL_WORD, word);
		values.put(MyTransDbHelper.COL_TRANS, trans);
		long insertId = database.insert(MyTransDbHelper.TABLE_TRANS, null,
				values);
		Cursor cursor = database.query(MyTransDbHelper.TABLE_TRANS, allColumns,
				MyTransDbHelper.COL_ID + " = " + insertId, null, null, null,
				null);
		cursor.moveToFirst();
		WordTrans newWt = cursorToWordTrans(cursor);
		cursor.close();
		return newWt;
	}

	public void deleteWt(WordTrans comment) {
		long id = comment.getId();
		System.out.println("Comment deleted with id: " + id);
		database.delete(MyTransDbHelper.TABLE_TRANS, MyTransDbHelper.COL_ID
				+ " = " + id, null);
	}

	private WordTrans cursorToWordTrans(Cursor cursor) {
		WordTrans wt = new WordTrans();
		wt.setId(cursor.getLong(0));
		wt.setWord(cursor.getString(1));
		wt.setTrans(cursor.getString(2));
		return wt;
	}
	
	public String findTrans(String word) {
		Cursor cursor = database.query(MyTransDbHelper.TABLE_TRANS, allColumns, 
				MyTransDbHelper.COL_WORD + " = \'" + word + "\'", 
				null, null, null, null);
		String trans;
		if (cursor.moveToFirst()) {
			WordTrans wt = cursorToWordTrans(cursor);
			trans = wt.getTrans();
		} else {
			trans = null;
		}
		return trans;
	}

}
