package com.example.db;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

public class DatabaseHelper extends SQLiteOpenHelper {
    public static final String DATABASE_NAME = "STUDENT.DB";
    public static final String TABLE_NAME = "STUDENT";
    public static final String COL_1 = "ID";
    public static final String COL_2 = "NAME";
    public static final String COL_3 = "PASSWORD";

    SQLiteDatabase db;
    public DatabaseHelper(Context contex) {
        super(contex,DATABASE_NAME,null,1);
        db = this.getWritableDatabase();
    }

    @Override
    public void onCreate(SQLiteDatabase db) {

        String sql = "create table "+TABLE_NAME+" (ID int primary key autoincrement," +
                "NAME text," +
                "PASSWORD text)";

        db.execSQL(sql);
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {

        String sql="DROP TABLE "+TABLE_NAME+" IF EXISTS";
        db.execSQL(sql);
        onCreate(db);
    }

}
