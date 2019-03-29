package com.example.tutorial2;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.CheckBox;
import android.widget.CompoundButton;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    TextView txt;
    CheckBox india,sri,pak;
    String str = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        txt = (TextView)findViewById(R.id.textView);
        india = (CheckBox)findViewById(R.id.india);
        sri = (CheckBox)findViewById(R.id.srilanka);
        pak = (CheckBox)findViewById(R.id.pak);


        india.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                if(isChecked) {
                   str += " INDIA ";
                    txt.setText(str);
                }
                else
                {
                    String[] split = str.split("INDIA");
                    String firstSubString = split[0];
                    String secondSubString = split[1];
                    str = firstSubString+" " +secondSubString;
                    txt.setText(str);
                }
            }
        });

        sri.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                if(isChecked) {
                    str += " SRILANKA ";

                    txt.setText(str);
                }
                else
                {
                    String[] split = str.split("SRILANKA");
                    String firstSubString = split[0];
                    String secondSubString = split[1];
                    str = firstSubString+" " +secondSubString;
                    txt.setText(str);
                }
            }
        });

        pak.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                if(isChecked) {


                    str += " PAKISTAN ";

                    txt.setText(str);
                }
                else
                {
                    String[] split = str.split("PAKISTAN");
                    String firstSubString = split[0];
                    String secondSubString = split[1];
                    str = firstSubString+" " +secondSubString;
                    txt.setText(str);
                }
            }
        });







    }
 }

