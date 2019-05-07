package com.example.employee;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;


public class DatabaseHelper extends SQLiteOpenHelper {

    final public static  String DATABASE_NAME = "employee.db";
    final public static String TABLE_NAME = "employee";
    final public static String COL_1 = "ID";
    final public static String COL_2 = "NAME";
    final public static String COL_3 = "SALARY";
    SQLiteDatabase db= this.getWritableDatabase();
    public DatabaseHelper(Context context) {
        super(context, DATABASE_NAME, null,1);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        String sql = "CREATE TABLE "+TABLE_NAME+"(ID INTEGER PRIMARY KEY AUTOINCREMENT,NAME VARCHAR(20),SALARY VARCHAR(20)";
        db.execSQL(sql);


    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {

        String sql= "DROP TABLE IF EXISTS "+TABLE_NAME;
        db.execSQL(sql);
        onCreate(db);
    }
}
