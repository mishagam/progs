/*
 * Running my 8x8 LED matrix from tixer using 2 164 IC.
 */

int pinDataC = 10;
int pinDataR = 9;
int pinClock = 8;
bool SHOW_HEART=false;
 
void setup() {
  pinMode(13, OUTPUT);
  pinMode(pinDataC, OUTPUT);
  pinMode(pinDataR, OUTPUT);
  pinMode(pinClock, OUTPUT);
  digitalWrite(pinDataC, LOW);
  digitalWrite(pinDataR, LOW);
  digitalWrite(pinClock, LOW);
}
void shortWait() {
  volatile int i;
  i=0;
}

void sendBytes(byte br, byte bc) {
  byte val;
  //digitalWrite(13, HIGH);
  for (int i=0; i<8; i++) {
    val = (br>>i) & 1;
    digitalWrite(pinDataR, val);
    val = (bc>>i) & 1;
    digitalWrite(pinDataC, val);
    //shortWait();
    digitalWrite(pinClock, HIGH);
    shortWait();
    digitalWrite(pinClock, LOW);
    //shortWait();    
  }
  //digitalWrite(13, LOW);
}

byte heart[] = {
    0b01100110,
    0b10011001,
    0b10000001,
    0b10000001,
    0b01000010,
    0b00100100,
    0b00011000,
    0b00000000
};

byte hrow[] = {
  0b01110000,  // bits top to bottom
  0b10001000,
  0b10000100,
  0b01000010
};
byte hcol[] = {
  0b10000001,  // bits left to right
  0b01000010,
  0b00100100,
  0b00011000
};

//some digits from a 8x8 font (numeric 1-8)
// stolen from http://blog.vettore.org/building-a-large-led-sign-with-inexpensive-standard-modules-and-arduino/
byte digits[][8]={ 
 {0x0E,0x11,0x11,0x11,0x11,0x11,0x0E,0x00}, //0
 {0x04,0x0C,0x04,0x04,0x04,0x04,0x0E,0x00},  //1 
 {0x0E,0x11,0x01,0x02,0x04,0x08,0x1F,0x00}, //2 
 {0x1F,0x02,0x04,0x02,0x01,0x11,0x0E,0x00}, //3
 {0x02,0x06,0x0A,0x12,0x1F,0x02,0x02,0x00}, //4
 {0x1F,0x10,0x1E,0x01,0x01,0x11,0x0E,0x00}, //5
 {0x06,0x08,0x10,0x1E,0x11,0x11,0x0E,0x00}, //6
 {0x1F,0x01,0x02,0x04,0x04,0x04,0x04,0x00}, //7
 {0x0E,0x11,0x11,0x0E,0x11,0x11,0x0E,0x00}, //8
 {0x0E,0x11,0x11,0x0F,0x01,0x01,0x0E,0x00} //9
};

int dig=0;
int cnt=0;

void loop() {
  // send rows 100 times a second
  if (SHOW_HEART) {
    for (int i=0; i<4; i++) {
      byte r = hrow[i];
      byte c = ~hcol[i];
      sendBytes(r,c);
      delay(3);
    }
  } else {
    // show digits one by one, first 2
    for (int i=0; i<8; i++) {
      byte r = 1<<i;
      byte c = ~(digits[dig][i]<<1);
      sendBytes(r,c);
      delay(2);
    }
    cnt++;
    if (cnt>900) {
      dig++;
      cnt=0;
    }
    if (dig>9) {
      dig = 0;
    }
  }
}
