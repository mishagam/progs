/*
  testing IR sensors. Misha.
 */

int LED = 13;
int IrPin = A0;
int digIrPin = 9;
int THRESHOLD = 10;


void setup() {
  Serial.begin(19200);
  pinMode(LED, OUTPUT);
  pinMode(digIrPin, INPUT);
}
float aveVal;
int cnt=0;
void loop() {
  //int sensorValue = digitalRead(digIrPin);
  int sensorValue = analogRead(IrPin);
  Serial.println(sensorValue);
  delay(50);  
}
