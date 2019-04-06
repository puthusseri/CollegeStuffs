package com.example.tutorial;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;
import android.widget.TimePicker;


public class MainActivity extends AppCompatActivity {

    TimePicker timePicker;
    TextView textView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        timePicker =findViewById(R.id.timePicker);
        textView = findViewById(R.id.display);

        textView.setText("Current Time : "+timePicker.getHour()+ " : "+timePicker.getMinute()+"  ");
        timePicker.setOnTimeChangedListener(new TimePicker.OnTimeChangedListener() {
            @Override
            public void onTimeChanged(TimePicker view, int hourOfDay, int minute) {
                textView.setText("Time : "+hourOfDay + " : "+minute);
            }
        });

    }
}
