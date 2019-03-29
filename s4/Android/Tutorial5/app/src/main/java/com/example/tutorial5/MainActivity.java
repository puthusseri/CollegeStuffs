package com.example.tutorial5;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    RadioGroup radioGroup;
    RadioButton male,female;
    TextView textView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        radioGroup = findViewById(R.id.sexradiogroup);
        textView =  findViewById(R.id.textView2);

//        int i = radioGroup.getCheckedRadioButtonId();
//        radioButton = findViewById(i);
//        textView.setText(radioButton.getText());
//        radioButton = findViewById(R.id.female);
//        textView.setText(radioButton.getText());
        male = findViewById(R.id.male);
        female = findViewById(R.id.female);
        male.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                textView.setText("SELECTED SEX : MALE");
            }
        });
        female.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                textView.setText("SELECTED SEX : FEMALE");
            }
        });

    }
}
