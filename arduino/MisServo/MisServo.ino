// Moving servo left and right, worked.
// include the servo library
#include <Servo.h>

Servo servA;  // create a servo object
Servo servB;

int angle=0;   // variable to hold the angle for the servo motor
int dir = 3;
int led=4;

void setup() {
  servA.attach(9); // attaches the servo on pin 9 to the servo object
  servB.attach(10); // attaches the servo on pin 9 to the servo object
  Serial.begin(9600); // open a serial connection to your computer
  pinMode(4, OUTPUT);
}

void loop() {
  angle = angle+dir;

  if (angle > 179 || angle<0) {
    dir = -dir;
    angle += dir;
  }
  Serial.print(", angle: ");
  Serial.println(angle);

  // set the servo position
  servA.write(angle);
  servB.write(179 - angle);

  // wait for the servo to get there
  if (dir>0) {
    digitalWrite(4, HIGH);    // turn the LED off by making the voltage LOW
  } else {
    digitalWrite(4, LOW);   // turn the LED on (HIGH is the voltage level)
  }
  delay(20);
}



