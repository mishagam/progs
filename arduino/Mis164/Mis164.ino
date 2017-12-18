/*
 * conbtrol of 164 IC to run several LED, works!
 */
const int pinClk = 8;  // yellow
const int pinData = 9;  // orange

void setup() {
  // put your setup code here, to run once:
  pinMode(13, OUTPUT);
  pinMode(pinClk, OUTPUT);
  pinMode(pinData, OUTPUT);
  digitalWrite(pinClk, LOW);
}

void shortWait() {
  delayMicroseconds(5);
}

void sendByte(int b) {
  digitalWrite(13, HIGH);
  for (int i=0; i<8; i++) {
    int val = (b>>i) & 1;
    digitalWrite(pinData, val);
    shortWait();
    digitalWrite(pinClk, HIGH);
    shortWait();
    digitalWrite(pinClk, LOW);
    shortWait();    
  }
  digitalWrite(13, LOW);
}

void loop() {
  // put your main code here, to run repeatedly:
  for (int sh=0; sh<8; sh++) {
    int b;
    if (sh < 4) {
      b = (1<<sh); //  + (0x0080>>sh); 
    } else {
      int ssh = 11-sh;
      b = 1<<ssh;
    }
    // b = 0x80;
    sendByte(b);
    delay(100);
  }

}
