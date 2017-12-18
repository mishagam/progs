// main robot control listening to servers and sending
// commands to motoir shield.
// commands: f - forward, b - backward, l, L - left, r R - right, s stop
#include <Wire.h>

class IkSensor {
  int minv;
  int maxv;
  int midv;
  int led;
  int pin;

public:
  IkSensor(int mn, int mx, int pin, int led);
  int getVal();
};

int ledR = 6;
int ledL = 5;
int errLed = 7;
int pinR = A2;
int pinL = A1;
int motorWireId = 11;

IkSensor sL(618,981,pinL, ledL);
IkSensor sR(400,952,pinR, ledR);

void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
  Wire.begin();
  pinMode(errLed, OUTPUT);
}

void sendCommand(char cmd) {
  Wire.beginTransmission(motorWireId); // transmit to device #8
  Wire.write(cmd);           // U
  int ecode = Wire.endTransmission();    // stop transmitting
  if (ecode != 0) {
    digitalWrite(errLed, HIGH);
    Serial.print("ecode not 0 ");
    Serial.println(ecode);
  }
}

void loop() {
  byte ll = sL.getVal();
  byte rr = sR.getVal();
  Serial.print("ll,rr= ");
  Serial.print(ll); 
  Serial.print(" "); 
  Serial.println(rr); 
  if (ll && rr) {
    // both black, forward
    sendCommand('f');    
  } else if (ll && !rr) {
    // left black,turn left
    sendCommand('l');
  } else if (!ll && rr) {
    // left white,turn right
    sendCommand('r');
  } else if (!ll && !rr) {
    // both white, stop 
    sendCommand('s');
  }
  delay(300);        
}
