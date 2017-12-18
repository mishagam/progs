// Adafruit Motor shield library
// copyright Adafruit Industries LLC, 2009
// this code is public domain, enjoy!

#include <AFMotor.h>
#include <Wire.h>

struct CmdStruct {
  char cmd;
  int speedL;
  int speedR;
};

struct CmdStruct cmds[] = {
  {'f', 220, 220},
  {'l', 100, 220},
  {'L',  20, 220},
  {'r', 220, 100},
  {'R', 220,  20},
  {'b',-150,-150},
  {'s',   0,   0},
  {0,0,0}  
};

int motorWireId = 11;
char cmd = 's';
int motorSignL = 1;
int motorSignR = -1;

AF_DCMotor motorR(1);
AF_DCMotor motorL(2);

void setup() {
  // turn on motor
  motorL.run(RELEASE);
  motorR.run(RELEASE);
  // start I2C as slave
  Wire.begin(motorWireId);
  Wire.onReceive(receiveEvent); // register event
}

// sets motor mot to speed
void applyMotor(AF_DCMotor &mot, int speed) {
  if (speed==0) {
    mot.run(RELEASE);
  } else if (speed > 0) {
    mot.run(FORWARD);
  } else {
    mot.run(BACKWARD);
    speed = -speed;
  }
  mot.setSpeed(speed);
}

void loop() {
  CmdStruct *p;

  // select command
  for (p=cmds; p->cmd != 0; p++) {
    if (cmd == p->cmd) {
      break;
    }    
  }
  if (p->cmd == 0) {
    return;
  }
  applyMotor(motorL, p->speedL*motorSignL);
  applyMotor(motorR, p->speedR*motorSignR);
  delay(100);
}

// function that executes whenever data is received from master
// this function is registered as an event, see setup()
void receiveEvent(int howMany) {
  cmd = Wire.read();
}
