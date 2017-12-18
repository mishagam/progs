const int ledPin =  13;
void setup() {
  /* initialize serial communication at 9600 bits per second: */
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  int c =  Serial.read();
  if (c=='1') {
    digitalWrite(ledPin, HIGH);
  } else if (c=='0') {
    digitalWrite(ledPin, LOW);    
  }
  delay(1);        
}



