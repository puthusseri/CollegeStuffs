package com.example.tutorial_10;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.DatePicker;
import android.widget.TextView;
import android.widget.TimePicker;

import java.time.Year;
import java.util.Calendar;

public class MainActivity extends AppCompatActivity {

    DatePicker datePicker;
    TextView textView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        datePicker =findViewById(R.id.datePicker);
        textView = findViewById(R.id.display);


        final Calendar calendar = Calendar.getInstance();
        textView.setText(calendar.get(calendar.DAY_OF_MONTH)+" : "+ calendar.get(Calendar.MONTH)+ " : " +calendar.get(Calendar.YEAR));
        datePicker.init(calendar.get(Calendar.YEAR), calendar.get(Calendar.MONTH), calendar.get(Calendar.DAY_OF_MONTH), new DatePicker.OnDateChangedListener() {
            @Override
            public void onDateChanged(DatePicker view, int year, int monthOfYear, int dayOfMonth) {
                textView.setText(dayOfMonth +" : "+monthOfYear+" : "+ year);
            }
        });


    }
}
