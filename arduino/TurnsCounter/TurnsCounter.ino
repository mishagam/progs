int pinA = 2;
int pinB = 3;

int ledPin = 8;
int ledPinB = 9;
volatile int showLed = 0;
volatile int showLedB = 0;

void setup() {
  pinMode(pinA, INPUT);
  pinMode(pinB, INPUT);
  pinMode(ledPin, OUTPUT);
  pinMode(ledPinB, OUTPUT);
  // should be interrupt 0 for pin 2
  int intA = digitalPinToInterrupt(pinA);
  int intB = digitalPinToInterrupt(pinB);
  attachInterrupt(intA, myInterrupt, FALLING);
  attachInterrupt(intB, myInterruptB, FALLING);
  Serial.begin(9600);
  Serial.print("int A B = ");
  Serial.print(intA);
  Serial.print(" ");
  Serial.print(intB);
  Serial.println();
}

void loop() {
  int bA = digitalRead(pinA);
  // digitalWrite(ledPin, bA);
  digitalWrite(ledPin, showLed);
  digitalWrite(ledPinB, showLedB);
  //Serial.print("showLed = "); Serial.println(showLed);
  //Serial.println(bA);
  //Serial.print("showLedB = "); Serial.println(showLedB);
  delay(50);
}

void myInterrupt() {
  showLed = (showLed==HIGH ? LOW : HIGH);
}

void myInterruptB() {
  showLedB = (showLedB==HIGH ? LOW : HIGH);
}

