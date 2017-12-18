/*
  for 74HC595 shift register.
  Should light pins for every bit of characters of text.
  Text received from Serial.
  Author mostly Misha. Done
 */

const int latchPin = 6;
const int clockPin = 5;
const int dataPin = 7;

void setup() {
  //set pins to output because they are addressed in the main loop
  pinMode(latchPin, OUTPUT);
  pinMode(dataPin, OUTPUT);  
  pinMode(clockPin, OUTPUT);
  Serial.begin(9600);
  Serial.println("reset");
}

void toBinary(char b) {
  for (int i=0; i<8; i++) {
    char c = ((b >> (7-i)) & 1) ? '1' : '0';
    Serial.print(c);
  }  
  Serial.print(" ");
  Serial.println(b);
}

void loop() {
  if (Serial.available() > 0) {
    char b = Serial.read();
    writeByteBits(b);
    toBinary(b);
    delay(500);
  }
}

// This method sends bits to the shift register
void writeByteBits(byte b) {
  digitalWrite(latchPin, LOW);
  shiftOut(dataPin, clockPin, MSBFIRST, b);
  digitalWrite(latchPin, HIGH);
}

