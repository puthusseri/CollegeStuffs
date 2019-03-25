package com.example.notification;

import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.res.Resources;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    Button click;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        click = (Button) findViewById(R.id.button2);
        click.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                NotificationManager obj = (NotificationManager) getApplicationContext().getSystemService(Context.NOTIFICATION_SERVICE);
                Resources resource = getApplicationContext().getResources();
                Notification.Builder noti = new Notification.Builder(getApplicationContext());
                Intent intent=new Intent(getApplicationContext(),MainActivity.class);
                PendingIntent pi=PendingIntent.getActivity(getApplicationContext(), 0, intent,0);

                noti.setContentIntent(pi)
                        .setSmallIcon(R.drawable.ic_launcher_background)
                        .setWhen(System.currentTimeMillis())
                        .setContentTitle("Title of ")
                        .setContentText("BOdy");
                Notification n = noti.build();
                obj.notify(1,n);


            }
        });
    }
}
