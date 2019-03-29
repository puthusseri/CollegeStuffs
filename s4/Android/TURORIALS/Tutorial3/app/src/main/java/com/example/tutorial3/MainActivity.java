package com.example.tutorial3;


import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.CheckBox;
import android.widget.CompoundButton;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    EditText txt,temp;
    CheckBox india,sri,pak;
    String str = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        txt = (EditText)findViewById(R.id.textView);
        temp = (EditText)findViewById(R.id.temp);
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

