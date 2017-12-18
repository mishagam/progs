#include <EEPROM.h>
// Exemple of using: Type write 10 5 and the Value 5 will be saved in address 10. Then Type read 10 to recover the value of address 10
byte value;
void setup()
{
  Serial.begin(9600);
}
String leStringSerial(){
String conteudo = "";
char caractere;
while(Serial.available() > 0) {
caractere = Serial.read();
if (caractere != '\n'){
conteudo.concat(caractere);
}
delay(10);
}
return conteudo;
}
void loop()
{
while (Serial.available() > 0) {
String recebido = leStringSerial();
if (recebido.startsWith("write") ) {
String Address = recebido.substring(6);
String Val = recebido.substring(9);
EEPROM.write(Address.toInt(), Val.toInt());
Serial.println("OK");}
else if (recebido.startsWith("read")){
String Val = recebido.substring(5);
value = EEPROM.read(Val.toInt());
Serial.println(value, DEC);}
else {Serial.println("Error");
}
delay(500);
}
}

