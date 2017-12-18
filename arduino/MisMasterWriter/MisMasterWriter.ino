#include <Wire.h>

int errLed = 3;
int okLed = 2;

void setup() {
  Wire.begin(); // join i2c bus (address optional for master)
  Serial.begin(9600);           // start serial for output
  Serial.println("Mis Master writer started");
  pinMode(errLed, OUTPUT);
  pinMode(okLed, OUTPUT);
}

void sendChar(char c) {
  // send U
  Wire.beginTransmission(8); // transmit to device #8
  Wire.write(c);           // U
  int ecode = Wire.endTransmission();    // stop transmitting
  Serial.print("send ");
  Serial.print(c);
  Serial.print(" ecode = ");
  Serial.println(ecode);
  if (ecode==0) {
    digitalWrite(okLed, HIGH); 
    digitalWrite(errLed, LOW);     
  } else {
    digitalWrite(errLed, HIGH); 
    digitalWrite(okLed, LOW);     
  }
}

void loop() {
  Serial.println("Loop function Enter");
  sendChar('U');
  delay(500);
  sendChar('D');
  delay(1500);
  Serial.println("Loop exit");
}
