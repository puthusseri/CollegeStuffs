package com.example.tutorial6;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.AutoCompleteTextView;

public class MainActivity extends AppCompatActivity {

    String[] names = {"vyshak puthusseri","vyshnav","yeanest","yedhu thampi","vimuna","vishnu prashanth","Tarson","Tyson"};
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ArrayAdapter<String> adapter = new ArrayAdapter<String>(this, android.R.layout.select_dialog_item,names);
        AutoCompleteTextView txt = (AutoCompleteTextView)findViewById(R.id.autoCompleteTextView);
        txt.setThreshold(1);//Start prediction from first character
        txt.setAdapter(adapter);
    }
}
