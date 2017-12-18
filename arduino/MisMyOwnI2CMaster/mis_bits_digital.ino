// Hardware-specific support functions that MUST be customized:


bool read_SCLd( void ) {
  pinMode(sclPin, INPUT_PULLUP);
  bool bret = digitalRead(sclPin);
  return bret;
}

bool read_SDAd( void ) {
  pinMode(sdaPin, INPUT_PULLUP);
  bool bret = digitalRead(sdaPin);
  return bret;
}
void set_SCLd( void ) {
  pinMode(sclPin, OUTPUT);
  digitalWrite(sclPin, HIGH);
}
void clear_SCLd( void ) {
  pinMode(sclPin, OUTPUT);
  digitalWrite(sclPin, LOW);
}
void set_SDAd( void ) {
  pinMode(sdaPin, OUTPUT);
  digitalWrite(sdaPin, HIGH);
}
void clear_SDAd( void ) {
  pinMode(sdaPin, OUTPUT);
  digitalWrite(sdaPin, LOW);
}

