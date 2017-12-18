#include <Wire.h>

int led=13; // indicator of receiving 

void setup() {
  Wire.begin(8);                // join i2c bus with address #8
  Wire.onReceive(receiveEvent); // register event
  pinMode(led, OUTPUT);
  Serial.begin(9600);           // start serial for output
  Serial.println("Mis Slave receiver started");
}

char cRec = 0; // received char

void loop() {
  if (cRec != 0) {
    Serial.print("received char  = ");
    Serial.println(cRec);
    if (cRec=='U') {
      digitalWrite(led, HIGH);      
    } else {
      digitalWrite(led, LOW);    
    }
    cRec = 0;
  }
  delay(10);
}

// function that executes whenever data is received from master
// this function is registered as an event, see setup()
void receiveEvent(int howMany) {
  cRec = Wire.read();
}
