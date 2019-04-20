package com.example.sqliteloginapp;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.util.Log;

public class DatabaseOperation extends SQLiteOpenHelper {
    public static int database_version = 1;
    public String CREATE_QUERY = "CREATE TABLE"+ TableData.TableInfo.TABLE_NAME+"("+ TableData.TableInfo.USER_NAME+"TEXT,"+ TableData.TableInfo.USER_PASSWORD+"TEXT)";
    public DatabaseOperation(Context context) {

        super(context, TableData.TableInfo.DATABASE_NAME,null,database_version);
        Log.d("Database operation","Database created");
    }

    @Override
    public void onCreate(SQLiteDatabase db) {

        db.execSQL(CREATE_QUERY);
        Log.d("Table operation","Table created");
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {

    }
    public void  putInformation(DatabaseOperation dob,String name,String password) {
        

    }
}
