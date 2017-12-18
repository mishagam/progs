void setup()
{
    Serial.begin(9600);    
}
 
void loop() {
//  float vin = 5.0 * analogRead(0) / 1024.0;
//  Serial.print(vin);
//  Serial.print("  ");
//  float tempC = (1.8663 - vin) / 0.01169;
//  float tempF = 1.8 * tempC + 32.0;
//  Serial.print(tempC);
//  Serial.print("  ");
//  Serial.println(tempF);
//  delay(100);
    int avet = 0;
    for (int i=0; i<40; i++) {
      int ti = analogRead(A0);
      avet += ti;
      delay(5);
    }
    avet = avet/40;
   
    float vin = 5.0 * avet / 1024.0;
    float tempC = (1.8663 - vin) / 0.01169;
     Serial.print("avet, tempC = ");
     Serial.print(avet);
     Serial.print(" ");
     Serial.println(tempC);
     
    delay(10);
}

