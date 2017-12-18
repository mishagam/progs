// my bit banging of I2C protocol
// initially from https://en.wikipedia.org/wiki/I%C2%B2C#Message_protocols

void I2C_delay( void );  // done
bool read_SCL( void ); // Set SCL as input and return current level of line, 0 or 1
bool read_SDA( void ); // Set SDA as input and return current level of line, 0 or 1
void set_SCL( void ); // Actively drive SCL signal high
void clear_SCL( void ); // Actively drive SCL signal low
void set_SDA( void ); // Actively drive SDA signal high
void clear_SDA( void ); // Actively drive SDA signal low
void arbitration_lost( void );
void up_SCL_SDA();

void begin_transmission(int slave_id) {
  slaveId = slave_id;
  up_SCL_SDA();
}


bool started = false; // global data

void mis_start() {
  up_SCL_SDA();
  for (int i = 0; i < 20; i++) {
    I2C_delay();
  }
  clear_SDA();
  I2C_delay();
  clear_SCL();
}

// waiting for clock stretching from slave
int wait_clock() {
  int cnt = 0;
  while ( read_SCL() == 0 )
  { // Clock stretching
    if (cnt++ > 55) {
      break;
    }
  }
}

void i2c_start_cond( void )
{
  int cnt;
  if ( started )
  {
    // if started, do a restart cond
    // set SDA to 1
    set_SDA();
    I2C_delay();


    // Repeated start setup time, minimum 4.7us
    I2C_delay();
  }

  if ( read_SDA() == 0 )
  {
    arbitration_lost();
  }
  wait_clock();
  // SCL is high, set SDA from 1 to 0.
  clear_SDA();
  I2C_delay();
  clear_SCL();
  started = true;

}

void i2c_stop_cond( void )
{
  // set SDA to 0
  clear_SDA();
  I2C_delay();

  // Clock stretching
  wait_clock();

  // Stop bit setup time, minimum 4us
  I2C_delay();

  // SCL is high, set SDA from 0 to 1
  set_SDA();
  I2C_delay();

  if ( read_SDA() == 0 )
  {
    arbitration_lost();
  }

  I2C_delay();
  started = false;
  up_SCL_SDA();

}

// Write a bit to I2C bus
void i2c_write_bit( bool bit )
{
  if ( bit )
  {
    set_SDA();
  }
  else
  {
    clear_SDA();
  }

  // SDA change propagation delay
  I2C_delay();

  // Set SCL high to indicate a new valid SDA value is available
  set_SCL();

  // Wait for SDA value to be read by slave, minimum of 4us for standard mode
  I2C_delay();

  wait_clock();

  // SCL is high, now data is valid
  // If SDA is high, check that nobody else is driving SDA
  if ( bit && ( read_SDA() == 0 ) )
  {
    arbitration_lost();
  }

  // Clear the SCL to low in preparation for next change
  clear_SCL();
}

// Read a bit from I2C bus
bool i2c_read_bit( void )
{
  bool bit;

  // Let the slave drive data
  set_SDA();

  // Wait for SDA value to be written by slave, minimum of 4us for standard mode
  I2C_delay();

  // Set SCL high to indicate a new valid SDA value is available
  set_SCL();

  wait_clock();

  // Wait for SDA value to be read by slave, minimum of 4us for standard mode
  I2C_delay();

  // SCL is high, read out bit
  bit = read_SDA();

  // Set SCL low in preparation for next operation
  clear_SCL();

  return bit;

}

// Write a byte to I2C bus. Return 0 if ack by the slave.
bool i2c_write_byte( bool          send_start ,
                     bool          send_stop  ,
                     unsigned char bb         )
{
  unsigned bit;
  bool     nack;

  if ( send_start )
  {
    i2c_start_cond();
  }

  for ( bit = 0; bit < 8; bit++ )
  {
    i2c_write_bit( ( bb & 0x80 ) != 0 );
    bb <<= 1;
  }

  nack = i2c_read_bit();

  if (send_stop)
  {
    i2c_stop_cond();
  }
  if (nack != 0) {
    ecode = ERR_NACK;
  }

  return nack;

}

// Read a byte from I2C bus
unsigned char i2c_read_byte( bool nack , bool send_stop )
{
  unsigned char bb = 0;
  unsigned char bit;

  for ( bit = 0; bit < 8; bit++ )
  {
    bb = ( bb << 1 ) | i2c_read_bit();
  }

  i2c_write_bit( nack );

  if ( send_stop )
  {
    i2c_stop_cond();
  }

  return bb;

}

