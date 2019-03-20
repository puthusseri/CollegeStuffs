package com.example.todolist;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        RecyclerView programmingList =(RecyclerView)findViewById(R.id.programminglist);
        programmingList.setLayoutManager(new LinearLayoutManager(this));
        String[] languages = {"Java", "Javascript","sql","php"};
        programmingList.setAdapter(new ProgrammingAdapter(languages));

    }
}
