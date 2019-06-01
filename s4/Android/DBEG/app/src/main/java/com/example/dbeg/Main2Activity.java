package com.example.dbeg;


import android.Manifest;
import android.app.Notification;
import android.app.NotificationManager;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.speech.tts.TextToSpeech;
import android.support.v4.app.NotificationCompat;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.telephony.SmsManager;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import java.util.Locale;

public class Main2Activity extends AppCompatActivity {

    TextView textView;
    EditText names;
    Button button,browser,texttospeech;
     TextToSpeech t;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        textView = (TextView)findViewById(R.id.textView2);
        button = (Button)findViewById(R.id.button7);
        browser = (Button)findViewById(R.id.button10);
        texttospeech = (Button)findViewById(R.id.button11);
        names = (EditText)findViewById(R.id.editText3);



        t = new TextToSpeech(getApplicationContext(), new TextToSpeech.OnInitListener() {
            @Override
            public void onInit(int status) {
                if(status != TextToSpeech.ERROR) {
                    t.setLanguage(Locale.UK);
                }

            }
        });
        texttospeech.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String toSpeak = "HHHH";
                Toast.makeText(getApplicationContext(), toSpeak,Toast.LENGTH_SHORT).show();
                t.speak(toSpeak, TextToSpeech.QUEUE_FLUSH, null);
                t.speak("dsd",TextToSpeech.QUEUE_ADD,null,"d");
NotificationCompat.Builder builder = (NotificationCompat.Builder) new NotificationCompat.Builder(getApplicationContext())
        .setDefaults(NotificationCompat.DEFAULT_ALL)
        .setContentText("djfgh");

NotificationManager notificationManager = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
notificationManager.notify(1,builder.build());


            }
        });

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
        browser.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent intent1 = new Intent(Intent.ACTION_VIEW, Uri.parse("http://www.google.com"));
                startActivity(intent1);
            }
        });

    }
    public void onPause(){
        if(t !=null){
            t.stop();
            t.shutdown();
        }
        super.onPause();
    }
}
