package com.example.dialogboxs;

import android.content.DialogInterface;
import android.graphics.Color;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    Button age;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        age = (Button)findViewById(R.id.button);
        age.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
               createAlertBox();


            }
        });
    }
    public void  createAlertBox() {

        AlertDialog.Builder alertDialog2 = new AlertDialog.Builder(MainActivity.this);

        alertDialog2.setTitle("Confirm Delete...");
        alertDialog2.setMessage("Are you sure you want delete this file?");


        alertDialog2.setPositiveButton("YES",
                new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int which) {
                        // Write your code here to execute after dialog
                        Toast.makeText(getApplicationContext(),
                                "You clicked on YES", Toast.LENGTH_SHORT)
                                .show();
                    }
                });

        alertDialog2.setNegativeButton("NO",
                new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int which) {
                        Toast.makeText(getApplicationContext(),
                                "You clicked on NO", Toast.LENGTH_SHORT)
                                .show();
                        dialog.cancel();
                    }
                });
// Showing Alert Dialog
        alertDialog2.show();
    }
}
