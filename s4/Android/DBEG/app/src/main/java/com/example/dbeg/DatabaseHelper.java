package com.example.dbeg;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.DatabaseErrorHandler;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.widget.Toast;

public class DatabaseHelper extends SQLiteOpenHelper {

    public static final String DATABASE_NAME = "st.db";
    public static final String TABLE_NAME = "st";
    public static final String COL_1 = "ID";
    public static final String COL_2 = "USERNAME";
    public static final String COL_3 = "PASSWORD";



    public DatabaseHelper(Context context) {
        super(context, DATABASE_NAME,null,1);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {

        String sql = "CREATE TABLE "+TABLE_NAME+" (ID INTEGER PRIMARY KEY AUTOINCREMENT," +
                "USERNAME TEXT," +
                "PASSWORD TEXT)";
        db.execSQL(sql);
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {

        String sql = "DROP TABLE IF EXISTS "+TABLE_NAME;
        db.execSQL(sql);
        onCreate(db);
    }
    public boolean insertData(String username, String password) {
        SQLiteDatabase sq =this.getWritableDatabase();
        ContentValues contentValues = new ContentValues();
        contentValues.put(COL_2,username);
        contentValues.put(COL_3,password);
        long result = sq.insert(TABLE_NAME,null,contentValues);
        if(result == -1)
            return false;
        else
            return true;
    }
    public void updateData(String id,String username, String password) {

        SQLiteDatabase db = this.getWritableDatabase();
        ContentValues contentValues = new ContentValues();
        contentValues.put(COL_2,username);
        contentValues.put(COL_3,password);
        int result = db.update(TABLE_NAME,contentValues,"ID=?",new String[] {id});

    }
    public int deleteData(String id) {

        SQLiteDatabase db = this.getWritableDatabase();

       int i =  db.delete(TABLE_NAME,"ID=?",new String[] {id});
       return i;


    }


    public Cursor viewAll() {
        SQLiteDatabase db = this.getWritableDatabase();
        String sql = "SELECT * FROM "+TABLE_NAME;
        Cursor result = db.rawQuery(sql,null);
        return  result;
    }
    public Cursor viewData(String id) {
        SQLiteDatabase db = this.getWritableDatabase();

        Cursor result = db.rawQuery("SELECT * FROM "+TABLE_NAME+" WHERE ID = ?",new String[] {id});
        return  result;
    }
}
