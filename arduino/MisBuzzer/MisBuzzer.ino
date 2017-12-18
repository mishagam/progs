// playing tones on buzzer, worked
int buzPin = 4;
int baseFreq = 440;
float freqMul = 1.059463;
int freq = baseFreq;
int ftab[30];

// initialize frequencies table
void initFtab() {
  float f = baseFreq;
  for (int i=0; i<30; i++) {
    ftab[i] = (int)f;
    f = f*freqMul;
  }
}

void setup()
{                
    pinMode(buzPin, OUTPUT);  // buzzer on pin 3
    Serial.begin(9600);
    initFtab();    
}

void loop() {
  while(Serial.available() > 0) {
    char c = Serial.read();
    int freq = ftab[c-'a'];
    tone(buzPin, freq);
    delay(250);    
  }
}

void loopRaise()
{
    tone(buzPin, freq);
    freq = (int)(freq*freqMul);
    if (freq>10000) {
      freq = baseFreq;
    }
    delay(300);
}
