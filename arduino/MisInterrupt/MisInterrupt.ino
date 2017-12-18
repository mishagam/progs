// my test of interrupts, works on Duemilanove
// look: https://www.arduino.cc/en/Reference/AttachInterrupt

int intPin = 2;
int ledPin = 4;
volatile int showLed = 0;

void setup() {
  pinMode(intPin, INPUT_PULLUP);
  pinMode(ledPin, OUTPUT);
  // should be interrupt 0 for pin 2
  attachInterrupt(digitalPinToInterrupt(intPin), myInterrupt, FALLING);
}

void loop() {
  // int buttonState = digitalRead(intPin);
  digitalWrite(ledPin, showLed);
  delay(10);
}

void myInterrupt() {
  showLed = (showLed==HIGH ? LOW : HIGH);
}

