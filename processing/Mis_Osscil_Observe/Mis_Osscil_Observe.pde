
import processing.serial.*;

Serial myPort;  // Create object from Serial class
String portName;
int top = 45;
int H = 16;

void setup() 
{
  size(1700, 600);
  portName = "/dev/ttyUSB0"; // Serial.list()[0];
  myPort = new Serial(this, portName, 57600);
  clear();
}

void drawGraph(byte[]t, int n, color col, int tp) {
  stroke(col);
  int y = top;
  int x = 5;
  int step = 2;
  for (int i=0; i<n; i++) {
    int nx = x + step;
    int ny = tp + (t[i]==1 ? -H : 0);
    if (i>0) {
      line(x,y,nx,ny);
    }
    x = nx;
    y = ny;
  }
}
  
byte []ta = new byte[1000];
byte []tb = new byte[1000];
int idx=0;

void draw()
{
  boolean hasE=false;
  color yellow = #AABB55;
  color orange = #DD8800;
  if ( myPort.available() > 0) {  // If data is available,
     String s = myPort.readString();         // read it and store it in val
     if (s.contains("S")) {
       portName += " S";
       idx = 0;
       hasE = false;
     } 
     hasE = s.contains("E");
     for (char c : s.toCharArray()) {
       if ('0'<=c && c <='9') {
         int iv = (int)(c - '0');
         ta[idx] = (byte)(iv/2);
         tb[idx] = (byte)(iv%2);
         idx++;
       } 
     }
  }  

  textSize(12);
  text("port " + portName, 10, 20);
  if (hasE && idx>400) {
    drawGraph(ta,idx,orange, top);
    drawGraph(tb,idx,yellow, top+18);
    top += 45;
  }
  //text(tC, 10, 110);
}