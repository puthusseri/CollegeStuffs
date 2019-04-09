package com.example.assignment_1_2;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    EditText password;
    EditText username;
    Button button;
    String str,str2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        password = (EditText)findViewById(R.id.password);
        username = (EditText)findViewById(R.id.username);
        button = (Button)findViewById(R.id.button);
        str = username.getText().toString();
        str2 = password.getText().toString();
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(str.equals("admin") && str2.equals("admin")) {
                    Intent i = new Intent(getApplicationContext(),Main2Activity.class);
                    i.putExtra("username",str);
                    startActivity(i);
                }
                else
                {
                    Toast.makeText(getApplicationContext(),"The username or password is invalid",Toast.LENGTH_LONG).show();
                }

            }
        });
    }
}
