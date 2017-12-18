#include <Wire.h>

int errLed = 3;
int okLed = 2;
const int LCD_WIRE = 40;  // discovered by scanning I2C ports in test
// in docs port 80 - it looks like you have to divide by 2

void setup() {
  Wire.begin(); // join i2c bus (address optional for master)
  Serial.begin(9600);           // start serial for output
  Serial.println("Mis Master writer started");
  pinMode(errLed, OUTPUT);
  pinMode(okLed, OUTPUT);
}

int sendCharPort(int wirePort, char c) {
  Wire.beginTransmission(wirePort); // transmit to device #8
  Wire.write(c);           // U
  int ecode = Wire.endTransmission();    // stop transmitting
  Serial.print("send ");
  Serial.print(c);
  Serial.print(" tried port ");
  Serial.print(wirePort);
  Serial.print(" ecode = ");
  Serial.println(ecode);
  if (ecode==0) {
    digitalWrite(okLed, HIGH); 
    digitalWrite(errLed, LOW);     
  } else {
    digitalWrite(errLed, HIGH); 
    digitalWrite(okLed, LOW);     
  }
  return ecode;
}

int sendChar(char c) {
  Wire.beginTransmission(LCD_WIRE); // transmit to device #8
  Wire.write(c);           
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

void testChar(char c) {
  for (int port = 2; port<128; port += 2) {
    sendCharPort(port,c);
  }
}
int blink = 0;
void loop() {
  if (Serial.available() > 0) {
    char c = Serial.read();
    Serial.print("read char ");
    Serial.println(c);
    // some my commands
    if (c=='I') {
      // display I2C address
      Serial.println("display I2C address");
      sendChar(0xFE);   
      sendChar(0x72);   
    } else if (c=='O') {
      Serial.println("display ON");
      sendChar(0xFE);   
      sendChar(0x41);   
    } else if (c=='F') {
      Serial.println("display OFF");
      sendChar(0xFE);   
      sendChar(0x42);   
    } else if (c=='C') {
      Serial.println("Clear screen");
      sendChar(0xFE);   
      sendChar(0x51);   
    } else if (c=='B') {
      Serial.println("Blinking change");
      sendChar(0xFE);   
      sendChar(0x4b);   
    } else {
      sendChar(c);   
    }
  }
  delay(50);
}
