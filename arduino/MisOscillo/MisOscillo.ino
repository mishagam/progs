/*
  Oscillograph for observing wire protocol.
  Goal 1 bit, 2 channels, about 1 Mbit,
*/

int lineA = 8;  // sda  PORTB bit 0
int lineB = 9;  // scl  PORTB bit 1
int ledAB = 6;   // indicate line A or B low

const int N = 800;
const int BEFORE_CNT = 20;
char obuf[N];
int idx = 0;
int threeCnt = 0;
char *pbuf0 =  obuf + BEFORE_CNT;
const int bufCnt = N - BEFORE_CNT - 2;

// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin 13 as an output.
  Serial.begin(57600);
  pinMode(lineA, INPUT_PULLUP);
  pinMode(lineB, INPUT_PULLUP);
  // DDRB=0xFF;
  //Serial.print("DDRB "); Serial.println(DDRB);
  // PORTB=0xFF;
  //Serial.print("PORTB "); Serial.println(PORTB);
  //Serial.print("PINB "); Serial.println(PINB);
  pinMode(ledAB, OUTPUT);
}

// initializing buffer by beforeCnt 1-s
void recordSignal() {
  byte lab;
  char *pbuf = pbuf0;
  for (int i = 0; i < bufCnt; i++) {
    lab = PINB & 3;
    *pbuf = lab + '0';
    pbuf++;
  }
  *pbuf = 0;
  obuf[0] = 'S';
  for (int i = 1; i < BEFORE_CNT - 1; i++) {
    obuf[i] = '3';
  }
  obuf[BEFORE_CNT - 1] = '1';
}

void endRec() {
  obuf[N - 1] = 0;
  Serial.print(obuf);
  Serial.println('E');
  idx = 0;
  threeCnt = 0;
  delay(100);
}

bool startingCondition(int b) {
  bool bret = false;
  if (b == 3) {
    threeCnt++;
  } else if (threeCnt > 100)  {
    if (b == 1) {
      bret = true;
    }
    threeCnt = 0;
  } else {
    threeCnt = 0;
  }
  return bret;
}

// the loop function runs over and over again forever
void loop() {
  byte pi = PINB;
  int lab = pi & 3;
  if (startingCondition(lab)) {
    recordSignal();
    digitalWrite(ledAB, !(lab == 3));
    endRec();
    digitalWrite(ledAB, LOW);
  }
}
