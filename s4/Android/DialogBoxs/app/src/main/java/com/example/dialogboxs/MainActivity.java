package com.example.dialogboxs;

import android.content.DialogInterface;
import android.graphics.Color;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    Button age;
    EditText input;
    RelativeLayout rl;
    String msg ="";
    final CharSequence myList[] = { "Tea", "Coffee", "Milk" };
    ArrayList<Integer> selList=new ArrayList();
    boolean bl[] = new boolean[myList.length];
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


        ArrayList<Integer> selectedItems = new ArrayList<>();

        alertDialog2.setTitle("Name...");
        alertDialog2.setMessage("Enter the Name");

        alertDialog2.setMultiChoiceItems(myList, bl, new DialogInterface.OnMultiChoiceClickListener() {
            @Override
            public void onClick(DialogInterface arg0, int arg1, boolean arg2) {
                if(arg2)
                {
                    // If user select a item then add it in selected items
                    selList.add(arg1);
                }
                else if (selList.contains(arg1))
                {
                    // if the item is already selected then remove it
                    selList.remove(Integer.valueOf(arg1));
                }
            }

        });
        alertDialog2.setPositiveButton("YES",
                new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int which) {
                        // Write your code here to execute after dialog

                        msg="";
                        for (int i = 0; i < selList.size(); i++) {

                            msg=msg+"\n"+(i+1)+" : "+myList[selList.get(i)];
                        }
                        Toast.makeText(getApplicationContext(),
                                "Total "+ selList.size() +" Items Selected.\n"+ msg , Toast.LENGTH_LONG)
                                .show();


                        Toast.makeText(getApplicationContext(),
                                "You clicked on YES", Toast.LENGTH_SHORT)
                                .show();
                    }
                });

        alertDialog2.setNegativeButton("NO",
                new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int which) {


                        // TODO Auto-generated method stub
                        Toast.makeText(getApplicationContext(),
                                "You Have Cancel the Dialog box", Toast.LENGTH_LONG)
                                .show();
                    


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
