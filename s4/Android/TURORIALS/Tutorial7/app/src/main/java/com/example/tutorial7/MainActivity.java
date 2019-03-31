package com.example.tutorial7;

import android.provider.ContactsContract;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;


public class MainActivity extends AppCompatActivity {

    Button nextButton;
    ImageView imageView;
    int count = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        nextButton = (Button)findViewById(R.id.button);
        imageView = (ImageView)findViewById(R.id.imageView);
        nextButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                if(count == 0 ) {
                    imageView.setImageDrawable(getDrawable(R.drawable.img1));
                    count = 1;
                } else if(count == 1){
                    imageView.setImageDrawable(getDrawable(R.drawable.img2));
                    count = 2;
                } else if(count == 2){
                    imageView.setImageDrawable(getDrawable(R.drawable.img3));
                    count = 3;
                }else if(count == 3){
                    imageView.setImageDrawable(getDrawable(R.drawable.rose));
                    count = 4;
                }else {
                    imageView.setImageDrawable(getDrawable(R.drawable.dora));
                    count = 0;
                }
            }
        });
    }
}
