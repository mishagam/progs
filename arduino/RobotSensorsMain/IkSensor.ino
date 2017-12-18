
IkSensor::IkSensor(int mn, int mx, int pina, int leda) {
  this->minv = mn;
  this->maxv = mx;
  this->midv = (mn+mx)/2;
  this->pin = pina;
  this->led = leda;
  pinMode(led, OUTPUT);
}

int IkSensor::getVal() {
  int v = analogRead(pin);
  Serial.print("read pin ");
  Serial.print(v);
  int bret = (v<midv ? 0 : 1);
  Serial.print(" bret ");
  Serial.println(bret);
  digitalWrite(led, bret);
  return bret;
}

