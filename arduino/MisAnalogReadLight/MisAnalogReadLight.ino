int led = 6;
int pinR = A2;
int pinL = A1;

void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
  pinMode(led, OUTPUT);
}

void loop() {
  // read the input on analog pin 0:
  int sensorValueR = analogRead(pinR);
  int sensorValueL = analogRead(pinL);
  if (sensorValueL < 600) {
    //Serial.print("High ");
    digitalWrite(led, HIGH);
  } else {
    //Serial.print("Low  ");
    digitalWrite(led, LOW);
  }
  // print out the value you read:
  Serial.print(sensorValueL);
  Serial.print(" ");
  Serial.println(sensorValueR);
  delay(20);        // delay in between reads for stability
}
