package com.example.sqliteloginapp;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

public class DatabaseOperation extends SQLiteOpenHelper {
    public static int database_version = 1;
    public DatabaseOperation(Context context) {
        super(context, TableData.TableInfo.DATABASE_NAME,null,database_version);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {

    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {

    }
}
