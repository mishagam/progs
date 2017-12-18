// Fibonacci Sequence Calculator// This code will print out the sequence in the Serial Monitor of the Arduino IDE// Please make sure you open the serial monitor before running the code on your Arduino
// Variables
int first_number = 0;int second_number = 1;int next_number;int counter = 0;
void setup() {  
  // Initialize serial communication  Serial.begin(9600);  
  // Print the first 2 numbers on the Serial Monitor  
  Serial.println("Fibonacci Sequence:");  
  Serial.println(first_number);  
  Serial.println(second_number);  
  // Calculate and print the next 4 numbers  
  for( counter = 0; counter < 4; counter++ ) {     
    next_number = first_number + second_number;     
    first_number = second_number;     
    second_number = next_number;     
    Serial.println(next_number);  
    }
}
void loop() {}

