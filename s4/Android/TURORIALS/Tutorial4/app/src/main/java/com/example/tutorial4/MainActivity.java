package com.example.tutorial4;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;
import android.widget.ToggleButton;

public class MainActivity extends AppCompatActivity {

    Button b;
    ToggleButton one,two;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        b = (Button)findViewById(R.id.button);
        one = (ToggleButton)findViewById(R.id.toggleButton);
        two = (ToggleButton)findViewById(R.id.toggleButton2);
        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(getApplicationContext(),"Toggle 1 : "+one.getText()+"\nToggle 2 : "+two.getText(),Toast.LENGTH_LONG).show();


            }
        });
    }
}
