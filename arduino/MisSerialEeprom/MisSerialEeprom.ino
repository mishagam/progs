/*
 * assignment interfacing with Arduino module 3
 * Write a sketch that allows a user to access data in EEPROM using the serial monitor. 
 * In the serial monitor the user should be able to type one of two commands: 
 * “read” and “write. 
 * "Read" takes one argument, an EEPROM address. 
 * "Write" takes two arguments, an EEPROM address and a value.
 * 
 * For example, if the user types “read 3” then the contents of EEPROM address 3 
 * should be printed to the serial monitor. 
 * If the user types “write 3 10” then the value 10 
 * should be written into address 3 of the EEPROM.
 */
 
#include <EEPROM.h>

void setup() {  
  Serial.begin(9600);
}

char buf[40];         // buffer for command received from Serial
const int maxLen=14;  // write + 2 spaces + 4 + 3
int bufPos = 0;       // current char position in buffer
int skipped=0;   // loops without data

void loop() {
  // we check end of command by waiting 3 cycles
  if (Serial.available() <= 0) {
    delay(20);
    skipped++;
    if (skipped>3 && bufPos>=6) {
      doCommand();
      bufPos = 0;
    }
  } else {
    skipped = 0;
    while(Serial.available() > 0) {
      char c = Serial.read();
      buf[bufPos++] = c;    
      buf[bufPos] = 0;    
    }
  }
  
  delay(20);
}

// execute read or write command from buf, clear buf
// 0 - failed, 1 - returned OK
void doCommand() {
  int addr=0;
  int val=0;
  char c;      // current character in buf
  int p;       // current parsing position in buf

  buf[maxLen] = 0;
  if (strncmp(buf, "read ", 5) == 0) {
    addr=0;
    // read addr
    p = 5;
    while ((c=buf[p])>='0' && c<='9') {
      addr = 10*addr + (c-'0');
      p++;
    }
    val = EEPROM.read(addr);    
    Serial.print("read ");
    Serial.print(val);
    Serial.print(" from ");
    Serial.println(addr);  
  }  else if (strncmp(buf, "write ", 6) == 0) {
    addr=0;
    p = 6;
    // read addr
    while ((c=buf[p])>='0' && c<='9') {
      addr = 10*addr + (c-'0');
      p++;
    }
    // read value
    p++;
    val = 0;
    while ((c=buf[p])>='0' && c<='9') {
      val = 10*val + (c-'0');
      p++;
    }
    EEPROM.write(addr, val);  
    Serial.print("wrote ");
    Serial.print(val);
    Serial.print(" to ");
    Serial.println(addr);  
  } else {
    Serial.print("*** Unknown command: ");
    Serial.println(buf);
  }
}

