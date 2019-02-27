package com.example.lifecycle;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    String msg = "";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toast.makeText(this,"The app was created",Toast.LENGTH_LONG).show();
    }

    protected void onStart() {
        super.onStart();
        Toast.makeText(this,"The app is starting",Toast.LENGTH_LONG).show();
    }

    protected void onResume() {
        super.onResume();
        Toast.makeText(this,"The app is resuming",Toast.LENGTH_LONG).show();
    }
    protected void  onPause(){
        super.onPause();
        Toast.makeText(this,"Pausing",Toast.LENGTH_LONG).show();
    }
    protected void onStop(){
        super.onStop();
        Toast.makeText(this,"Stopping",Toast.LENGTH_LONG).show();
    }
    protected void onDestroy(){
        super.onDestroy();
        Toast.makeText(this,"The app was killed",Toast.LENGTH_LONG).show();
    }

    protected void onRestart(){
        super.onRestart();
        Toast.makeText(this,"Restarting",Toast.LENGTH_LONG).show();

    }

}
