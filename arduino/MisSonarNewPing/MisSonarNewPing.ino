#include <NewPing.h>

/*
  working with HC-SR04, docs from
  http://robocraft.ru/blog/electronics/772.html
  HC-SR04 User's_Manual on google docs
  https://docs.google.com/document/d/1Y-yZnNhMYy7rwhAgyL_pfa39RsB-x2qR4vP8saG73rE/edit
  Works very bad.
 */

int tripPin = 5;
int echoPin = 4;
int ledPin = 6;

NewPing sonar(tripPin, echoPin, 100); // NewPing setup of pins and maximum distance.

// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin 13 as an output.
  pinMode(tripPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
  digitalWrite(tripPin, LOW);
}

// One dist measurment
void loop() {
  delay(50);
  double dist = sonar.ping_cm();
  if (dist<0.1) {
    dist = 100;
  }
  Serial.println(dist);
  pinMode(echoPin, OUTPUT);
  digitalWrite(echoPin, LOW);
  delay(1);
  pinMode(echoPin, INPUT);
}
