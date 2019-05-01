package com.example.dimscreen;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.RelativeLayout;
import android.widget.SeekBar;
import android.widget.TextView;



public class MainActivity extends AppCompatActivity {


    private RelativeLayout mRelativeLayout;
    private SeekBar mSeekBar;
    private TextView mTextView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}

