package com.example.dbeg;

import android.content.Intent;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.net.Uri;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    Button insert,delete,update,view,viewAll,navigation,sms,button9;
    EditText name,password,id;
    DatabaseHelper mydb = new DatabaseHelper(this);

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        navigation = (Button)findViewById(R.id.button6);
        button9 = (Button)findViewById(R.id.button9);
        name = (EditText)findViewById(R.id.editText);
        password = (EditText)findViewById(R.id.editText2);
        id = (EditText) findViewById(R.id.textView);

        button9.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(getApplicationContext(),"Button Works",Toast.LENGTH_SHORT).show();
                Intent intent = new Intent(getApplicationContext(),Main2Activity.class);
                startActivity(intent);
            }
        });
        navigation.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(getApplicationContext(),"Working",Toast.LENGTH_SHORT).show();
                Intent intent = new Intent(MainActivity.this,Main2Activity.class);
                intent.putExtra("Message","Vyshak");
                startActivity(intent);
            }
        });
        insert = (Button)findViewById(R.id.button);
        update = (Button)findViewById(R.id.button2);
        delete = (Button)findViewById(R.id.button3);
        view = (Button)findViewById(R.id.button4);
        viewAll = (Button)findViewById(R.id.button5);

        sms = (Button)findViewById(R.id.button6);
        sms.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent intent = new Intent(Intent.ACTION_SEND, Uri.parse("smsto:123"));
                startActivity(intent);

            }
        });
        insert.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                boolean result = mydb.insertData(name.getText().toString(),password.getText().toString());
                if (result == true)
                    Toast.makeText(getApplicationContext(),"Insertion ok",Toast.LENGTH_LONG).show();
                else
                    Toast.makeText(getApplicationContext(),"NOT INSERTED",Toast.LENGTH_SHORT).show();
            }
        });
        update.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                mydb.updateData(id.getText().toString(),name.getText().toString(),password.getText().toString());
            }
        });
        viewAll.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Cursor result = mydb.viewAll();
                if(result.getCount() == 0) {
                    showMessage("Error ","No data found");
                }
                else{
                    StringBuffer stringBuffer = new StringBuffer();
                    while(result.moveToNext()){
                        stringBuffer.append("\n\nID : "+result.getString(0));
                        stringBuffer.append("\nUSERNAME : "+result.getString(1));
                        stringBuffer.append("\nPASSWORD : "+result.getString(2));
                    }
                    showMessage("DATA",stringBuffer.toString());

                }
            }
        });

        view.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Cursor result = mydb.viewData(id.getText().toString());
                if(result.getCount() == 0) {
                    showMessage("Error ","No data found");
                }
                else{
                    StringBuffer stringBuffer = new StringBuffer();
                    while(result.moveToNext()){
                        stringBuffer.append("\n\nID : "+result.getString(0));
                        stringBuffer.append("\nUSERNAME : "+result.getString(1));
                        stringBuffer.append("\nPASSWORD : "+result.getString(2));
                    }
                    showMessage("DATA",stringBuffer.toString());

                }
            }
        });
        delete.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int result = mydb.deleteData(id.getText().toString());
                if(result>0)
                    Toast.makeText(getApplicationContext(),"Updated",Toast.LENGTH_SHORT).show();

            }
        });


    }
    public  void showMessage(String title,String message) {
        AlertDialog.Builder builder = new AlertDialog.Builder(this)
                .setTitle(title)
                .setMessage(message)
                .setCancelable(true);
        builder.show();
    }
}
