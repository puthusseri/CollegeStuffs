package com.example.dbeg;


import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

public class Main2Activity extends AppCompatActivity {

    TextView textView;
    Button button;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        textView = (TextView)findViewById(R.id.textView2);
        button = (Button)findViewById(R.id.button7);

        Toast.makeText(getApplicationContext(),"This is the second activity",Toast.LENGTH_SHORT).show();
        Intent intent = getIntent();
        textView.setText(intent.getStringExtra("Message"));
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent1 = new Intent(Intent.ACTION_DIAL);

                startActivity(intent1);
            }
        });

    }
}
