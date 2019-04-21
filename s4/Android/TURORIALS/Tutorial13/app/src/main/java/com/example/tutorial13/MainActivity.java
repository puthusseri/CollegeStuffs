package com.example.tutorial13;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    Button add,sub,div;
    EditText num1,num2;
    TextView result;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        add = (Button)findViewById(R.id.button);
        sub = (Button)findViewById(R.id.button2);
        div = (Button)findViewById(R.id.button3);
        num1 = (EditText)findViewById(R.id.editText);
        num2 = (EditText)findViewById(R.id.editText2);
        result = (TextView)findViewById(R.id.textView2);

        add.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                result.setText("Result : "+(Float.parseFloat(num1.getText().toString()) +
                        Float.parseFloat(num2.getText().toString()))+" ");

            }
        });
        sub.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                result.setText("Result : "+(Float.parseFloat(num1.getText().toString()) -
                        Float.parseFloat(num2.getText().toString()))+" ");

            }
        });
        div.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(Float.parseFloat(num2.getText().toString()) != 0.0)
                    result.setText("Result : "+(Float.parseFloat(num1.getText().toString()) /
                        Float.parseFloat(num2.getText().toString()))+" ");
                else
                    Toast.makeText(MainActivity.this, "Cannot be divided by zero", Toast.LENGTH_SHORT).show();

            }
        });
    }
}
