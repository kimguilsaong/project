#define BUTTON 2
#define MOTOR_BUTTON 4

#define LED1 6
#define LED2 7
#define LED3 8
#define LED4 12

#define MOTOR 10
#define BUZZER 13

#define GREEN 5

int startvalue1 = 0;
int motorvalue2 = 0;

void setup() {

  pinMode(BUTTON, INPUT);
  pinMode(MOTOR_BUTTON, INPUT);

  pinMode(LED1, OUTPUT);
  pinMode(LED2, OUTPUT);
  pinMode(LED3, OUTPUT);
  pinMode(LED4, OUTPUT);

  pinMode(MOTOR, OUTPUT);
  pinMode(BUZZER, OUTPUT);

  pinMode(GREEN, OUTPUT);
}

void loop() {

  startvalue1 = digitalRead(BUTTON);
  motorvalue2 = digitalRead(MOTOR_BUTTON);

  digitalWrite(LED1, 1 - startvalue1);

  digitalWrite(GREEN, 1 - startvalue1);

  analogWrite(MOTOR, (1 - motorvalue2) * 255);
}
