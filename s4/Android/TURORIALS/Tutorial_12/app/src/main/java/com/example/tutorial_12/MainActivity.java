package com.example.tutorial_12;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Chronometer;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    Chronometer c;
    int i=0;
    int duration=10;
    TextView tv;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        c=(Chronometer)findViewById(R.id.cnm);
        tv=(TextView)findViewById(R.id.tv);
        c.start();
        c.setOnChronometerTickListener(new Chronometer.OnChronometerTickListener() {
            @Override
            public void onChronometerTick(Chronometer arg0) {

                tv.setText("Show toast after " + (duration - (i + 1)) + " seconds");
                i++;
                if (i >= duration)
                {
                    Toast.makeText(getApplicationContext(),"Toast no :"+(i/10),   Toast.LENGTH_LONG).show();
                    duration=duration+10;
                }

            }
        });
    }

}
