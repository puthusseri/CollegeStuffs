package com.example.myapplication;
import java.util.Arrays;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.List;

import android.app.DatePickerDialog;
import android.app.TimePickerDialog;
import android.content.DialogInterface;
import android.os.Bundle;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.TextView;
import android.widget.TimePicker;

public class MainActivity extends AppCompatActivity {

    String[] listItems;
    Button cButton,mButton;
    String[] courseItems;
    Button b;

    Button submit;
    boolean[] Selectedtruefalse = new boolean[]{
            false,
            false,
            false,
            false,
            false
    };


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        listItems = getResources().getStringArray(R.array.Gender);
        courseItems =getResources().getStringArray(R.array.Course);
        mButton = (Button) findViewById(R.id.button1);

        cButton = (Button)findViewById(R.id.button2);

        b = (Button)findViewById(R.id.button3);

        submit = (Button) findViewById(R.id.button4);
        mButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                AlertDialog.Builder mBuilder = new AlertDialog.Builder(MainActivity.this);
                mBuilder.setTitle("Choose an item");
                mBuilder.setSingleChoiceItems(listItems, -1, new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        mButton.setText(listItems[i]);
                        dialogInterface.dismiss();
                    }
                });

                AlertDialog mDialog = mBuilder.create();
                mDialog.show();
            }
        });

        cButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                cButton.setText("");
                AlertDialog.Builder cBuilder = new AlertDialog.Builder(MainActivity.this);

                cBuilder.setMultiChoiceItems(courseItems, Selectedtruefalse, new DialogInterface.OnMultiChoiceClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int i, boolean isChecked) {


                    }
                });
                cBuilder.setCancelable(false);

                cBuilder.setTitle("Select Subjects Here");

                cBuilder.setPositiveButton("OK", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int i) {

                        int a = 0;
                        while(a < Selectedtruefalse.length)
                        {
                            boolean value = Selectedtruefalse[a];

                            if(value){
                                cButton.setText(cButton.getText() + courseItems[a] + "\n");
                            }

                            a++;
                        }

                    }
                });

                cBuilder.setNeutralButton("Cancel", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int i) {
                    }
                });

                AlertDialog dialog = cBuilder.create();

                dialog.show();
            }
        });
        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                final View dialogView = View.inflate(MainActivity.this, R.layout.datetime, null);
                final AlertDialog alertDialog = new AlertDialog.Builder(MainActivity.this).create();

                dialogView.findViewById(R.id.date_time_set).setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View view) {

                        DatePicker datePicker = (DatePicker) dialogView.findViewById(R.id.date_picker);



                        b.setText(datePicker.getDayOfMonth()+"-"+ datePicker.getMonth()+"-"+datePicker.getYear());

                        alertDialog.dismiss();
                    }});
                alertDialog.setView(dialogView);
                alertDialog.show();
            }
        });
        submit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                final View dialogView = View.inflate(MainActivity.this, R.layout.confirm, null);


                final AlertDialog alertDialog = new AlertDialog.Builder(MainActivity.this).create();
                alertDialog.setTitle("Are you Confirm");
                dialogView.findViewById(R.id.confirm).setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View view) {



                        alertDialog.dismiss();
                    }});
                dialogView.findViewById(R.id.cancel).setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View view) {



                        alertDialog.dismiss();
                    }});
                alertDialog.setView(dialogView);
                alertDialog.show();
            }
        });

    }

}
