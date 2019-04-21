package com.example.sqlite;

import android.database.Cursor;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    DatabaseHelper myDb;
    EditText editName,editSurname,editMarks,editID,deleteID;
    Button addButton,viewButton,updateButton,deleteButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        myDb = new DatabaseHelper(this);

        editName = (EditText)findViewById(R.id.editText2);
        editID = (EditText)findViewById(R.id.editTextID);
        deleteID = (EditText)findViewById(R.id.deleteID);
        editSurname = (EditText)findViewById(R.id.editText3);
        editMarks = (EditText)findViewById(R.id.editText5);
        addButton = (Button)findViewById(R.id.button);
        viewButton = (Button)findViewById(R.id.button2);
        viewButton = (Button)findViewById(R.id.button2);
        updateButton = (Button)findViewById(R.id.button3);
        deleteButton = (Button)findViewById(R.id.button4);
        AddData();
        ViewAllData();
        UpdateData();
        DeleteData();
    }

    private void DeleteData() {
        deleteButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Integer deletedRows = myDb.deleteData(deleteID.getText().toString());
                if(deletedRows >0)
                    Toast.makeText(MainActivity.this,"Deletion Successfully",Toast.LENGTH_LONG).show();
                else
                    Toast.makeText(MainActivity.this,"Failed to delete",Toast.LENGTH_LONG).show();
            }
        });
    }


    public void UpdateData() {
        updateButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                boolean isUpdated = myDb.updateData(editID.getText().toString(),
                        editName.getText().toString(),
                        editSurname.getText().toString(),
                        editMarks.getText().toString());
                if(isUpdated == true)
                {
                    Toast.makeText(MainActivity.this,"Updated Successfully",Toast.LENGTH_LONG).show();
                }
                else
                {
                    Toast.makeText(MainActivity.this,"Not Updated",Toast.LENGTH_LONG).show();
                }
            }
        });
    }
    public void AddData() {
        addButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                boolean isInserted = myDb.insertData(editName.getText().toString(),
                        editSurname.getText().toString(),
                        editMarks.getText().toString());
                if (isInserted == true)
                    Toast.makeText(MainActivity.this,"Data inserted ",Toast.LENGTH_LONG).show();
                else
                    Toast.makeText(MainActivity.this,"Data Not inserted ",Toast.LENGTH_LONG).show();

            }
        });
    }
    public void ViewAllData(){
        viewButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Cursor res = myDb.getAllData();
                if(res.getCount() == 0) {
                    //No data available
                    showMessage("Error","No data Found");
                    return;
                }
                StringBuffer buffer = new StringBuffer();
                while (res.moveToNext()) {
                     buffer.append("id :"+res.getString(0)+"\n");
                     buffer.append("name :"+res.getString(1)+"\n");
                     buffer.append("surname :"+res.getString(2)+"\n");
                     buffer.append("marks :"+res.getString(3)+"\n\n");
                }
                //Show mesg
                showMessage("Data",buffer.toString());
            }
        });
    }
    public void showMessage(String title, String message) {
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setCancelable(true);
        builder.setTitle(title);
        builder.setMessage(message);
        builder.show();


    }
}
