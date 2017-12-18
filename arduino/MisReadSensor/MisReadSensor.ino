// reading digital sensor - for now IR sensor
// Works OK white - 0
int led = 6;
int pinSensor = A1;

void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
  pinMode(led, OUTPUT);
  pinMode(pinSensor, INPUT);
}

void loop() {
  // read the input on analog pin 0:
  int sensorValue = digitalRead(pinSensor);
  Serial.println(sensorValue);
  delay(20);        // delay in between reads for stability
}
