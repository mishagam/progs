// Hardware-specific support functions that MUST be customized:
// using ports to speed up.
// SCL pin Port C bit 5
// SDA pin Port C bit 4

const int I2CSPEED = 5;
const byte SCL_BIT = 0x20;
const byte SDA_BIT = 0x10;

void I2C_delay( void ) {
  volatile int v;
  int i;
  for ( i = 0; i < I2CSPEED; i++ ) {
    v;
  }
}

bool read_SCL( void ) {
  // switch SCL to input pullup
  DDRC &= ~(SCL_BIT);
  PORTC |= SCL_BIT;
  // reading value
  bool bret = PINC & SCL_BIT;
  return bret;
}

bool read_SDA( void ) {
  // switch SDA to input pullup
  DDRC &= ~(SDA_BIT);
  PORTC |= SDA_BIT;
  // reading value
  bool bret = PINC & SDA_BIT;
  return bret;
}

void up_SCL_SDA() {
  byte b = SCL_BIT + SDA_BIT;
  DDRC |= b;
  PORTC |= b;
}

void set_SCL( void ) {
  // switch SCL to input, let it be drived up by resistor
  PORTC |= SCL_BIT;
  DDRC &= ~(SCL_BIT);
  PORTC |= SCL_BIT;
}

void clear_SCL( void ) {
  // output LOW to SCL
  DDRC |= SCL_BIT;
  PORTC &= ~(SCL_BIT);
}

void set_SDA( void ) {
  // switch SDA to input, let it be drived up by resistor
  PORTC |= SDA_BIT;
  DDRC &= ~(SDA_BIT);
  PORTC |= SDA_BIT;
}

void clear_SDA( void ) {
  // output LOW to SDA
  DDRC |= SDA_BIT;
  PORTC &= ~(SDA_BIT);
}

void arbitration_lost( void ) {
  digitalWrite(errLed, HIGH);
  ecode = ERR_ARB_LOST;
}


