/*
  Using 74HC595 shift register to show 7 segment digits display.
  Author mostly Misha. Started Jan 31 2016. Worked. 
  (with 7 segment display from LearningLab)
*/
const int LATCH_PIN = 6;
const int CLOCK_PIN = 5;
const int DATA_PIN = 7;
byte bitMap[] = {
  0x7E,  // 0
  0x30,
  0x6D,
  0x79,
  0x33,
  0x5B,  // 5
  0b1011111, // 6
  0x70,  // 7
  0x7F,
  0x73
};

void setup() {
  pinMode(LATCH_PIN, OUTPUT);
  pinMode(CLOCK_PIN, OUTPUT);
  pinMode(DATA_PIN, OUTPUT);  
  Serial.begin(9600);
  Serial.println("reset");
  digitalWrite(LATCH_PIN, HIGH);
}

void loop() {
  if (Serial.available() > 0) {
    char b = Serial.read();
    if ('0'<=b && b<='9') {
      int ib = (int)(b-'0');
      byte bb = bitMap[ib];
      // bb = (bb<<1) ^ 0xFF;
      // bb = (bb<<1);  // we have common cathode, light on 1
      writeByteBits(bb);  
      Serial.print("used b,bb= ");
      Serial.print(b);
      Serial.print(" ");
      Serial.println(bb,BIN);
      delay(500);
    }
  }
}

// This method sends bits to the shift register
void writeByteBits(byte b) {
  digitalWrite(LATCH_PIN, LOW);
  shiftOut(DATA_PIN, CLOCK_PIN, LSBFIRST, b);
  digitalWrite(LATCH_PIN, HIGH);
}

