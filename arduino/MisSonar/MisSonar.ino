/*
  working with HC-SR04, docs from
  http://robocraft.ru/blog/electronics/772.html
  HC-SR04 User's_Manual on google docs
  https://docs.google.com/document/d/1Y-yZnNhMYy7rwhAgyL_pfa39RsB-x2qR4vP8saG73rE/edit
 */

int tripPin = 5;
int echoPin = 4;
int ledPin = 6;

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
  // Serial.print("t , pulse= ");
  // high on trip pin for 10 microseconds
  digitalWrite(tripPin, HIGH);
  delayMicroseconds(12);
  digitalWrite(tripPin, LOW);
  digitalWrite(ledPin, HIGH);
  int pulse = pulseIn(echoPin, HIGH, 80000);
  Serial.println(pulse);
  digitalWrite(ledPin, LOW);
  delay(20);
}
