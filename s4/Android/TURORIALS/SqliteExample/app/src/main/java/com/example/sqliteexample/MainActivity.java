package com.example.sqliteexample;

import android.database.sqlite.SQLiteDatabase;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    public static final String dBName = "student";
    SQLiteDatabase sqLiteDatabase;
    EditText name,admno;
    Button button;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        name = (EditText)findViewById(R.id.name);
        admno = (EditText)findViewById(R.id.admno);
        button = (Button)findViewById(R.id.button);
        sqLiteDatabase = openOrCreateDatabase(dBName,MODE_PRIVATE,null);

        createTable();
    }
    private void createTable() {
        String sql = "create table student(name varchar(20),admno int)";
        sqLiteDatabase.execSQL(sql);
    }
}
