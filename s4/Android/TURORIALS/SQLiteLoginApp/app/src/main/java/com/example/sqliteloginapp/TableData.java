package com.example.sqliteloginapp;

import android.provider.BaseColumns;

public class TableData {
    public TableData(){

    }
    public static abstract class TableInfo implements BaseColumns {

        public static final String USER_NAME = "user_name";
        public static final String USER_PASSWORD = "user_pass";
        public static final String DATABASE_NAME = "user_info";
        public static final String TABLE_NAME = "reg_ifo";


    }
}
