package com.example.sqlite;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    DatabaseHelper myDb;
    EditText editName,editSurname,editMarks;
    Button addButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        myDb = new DatabaseHelper(this);

        editName = (EditText)findViewById(R.id.editText2);
        editSurname = (EditText)findViewById(R.id.editText3);
        editMarks = (EditText)findViewById(R.id.editText5);
        addButton = (Button)findViewById(R.id.button);
        AddData();
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
}
