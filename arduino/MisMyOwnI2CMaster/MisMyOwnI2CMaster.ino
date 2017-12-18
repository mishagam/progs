// my own implementation of I2C protocol as master
#include <Wire.h>

int errLed = 3;
int okLed = 2;
const int sdaPin = A4;
const int sclPin = A5;
int speed_hz = 100000;  // 100 KHz
int I2C_ADDR = 8;
int slaveId;
int ecode;
const int ERR_ARB_LOST = 2;
const int ERR_NACK = 3;
int ECODE_OK = 0;
bool USE_WIRE = false;

void sendCharBitBang(char c);
void begin_transmission(int slave_id);
void i2c_start_cond( void );
void i2c_stop_cond( void );
bool i2c_write_byte( bool send_start, bool send_stop, unsigned char b);
unsigned char i2c_read_byte( bool nack , bool send_stop );
void mis_start();

void setup() {
  //
  Serial.begin(9600);           // start serial for output
  Serial.print("Mis Master writer started, USE_WIRE = ");
  Serial.println(USE_WIRE);
  pinMode(errLed, OUTPUT);
  pinMode(okLed, OUTPUT);
  if (USE_WIRE) {
    Wire.begin(); // join i2c bus (address optional for master);
  } else {
    begin_transmission(I2C_ADDR);
  }
}

void loop() {
  Serial.println("Loop function Enter");
  sendChar('U');
  delay(500);
  sendChar('D');
  delay(1500);
  Serial.println("Loop exit");
}

void sendCharWire(char c) {
  Wire.beginTransmission(8); // transmit to device #8
  Wire.write(c);           // U
  ecode = Wire.endTransmission();    // stop transmitting
  Serial.print(" end trans passed ");
}

void sendChar(char c) {
  if (USE_WIRE) {
    Serial.print("sending with wire ");
    Serial.print(c);
    sendCharWire(c);
  } else {
    Serial.print("sending bit bang ");
    Serial.print(c);
    sendCharBitBang(c);
  }
  if (ecode == 0) {
    digitalWrite(okLed, HIGH);
    digitalWrite(errLed, LOW);
    Serial.println(" wrote ok");
  } else {
    digitalWrite(errLed, HIGH);
    digitalWrite(okLed, LOW);
    Serial.print(" ecode = ");
    Serial.println(ecode);
  }
}

void sendCharBitBang(char c) {
  ecode = 0;
  //i2c_start_cond();
  mis_start();
  // Serial.print(" start passed ");
  byte addrb = (slaveId << 1) + 0; // writing
  i2c_write_byte(false, false, addrb);
  if (ecode != 0) {
    digitalWrite(errLed, HIGH);
    digitalWrite(okLed, LOW);
    Serial.print(" ecode = ");
    Serial.println(ecode);
    return;
  }
  // Serial.print(" addrb passed ");

  i2c_write_byte(false, false, c);
  if (ecode != 0) {
    digitalWrite(errLed, HIGH);
    digitalWrite(okLed, LOW);
    Serial.print(" ecode = ");
    Serial.println(ecode);
    return;
  }
  i2c_stop_cond();
  Serial.print(" sendCharBitBang done ");
}

