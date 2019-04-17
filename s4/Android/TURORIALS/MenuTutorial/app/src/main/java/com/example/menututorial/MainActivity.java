package com.example.menututorial;

import android.graphics.Color;
import android.support.constraint.ConstraintLayout;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {


    ConstraintLayout constraintLayout;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        constraintLayout = (ConstraintLayout)findViewById(R.id.bck);
    }
    @Override
    public boolean onCreateOptionsMenu(Menu menu){
        getMenuInflater().inflate(R.menu.main,menu);
        return true;

    }
    @Override
    public  boolean onOptionsItemSelected(MenuItem menuItem){
        int id = menuItem.getItemId();
        if(id == R.id.red_color){
            constraintLayout.setBackgroundColor(Color.RED);
            return true;
        }
        if(id == R.id.green_color){
            constraintLayout.setBackgroundColor(Color.GREEN);
            return true;
        }
        if(id == R.id.blue_color){
            constraintLayout.setBackgroundColor(Color.BLUE);
            return true;
        }
        return  true;
    }
}
