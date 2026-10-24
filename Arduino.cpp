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

unsigned long time = 0;

void setup() {

  pinMode(BUTTON, INPUT);
  pinMode(MOTOR_BUTTON, INPUT);

  for (int i = 6; i <= 8; i++) {
    pinMode(i, OUTPUT);
  }

  pinMode(LED4, OUTPUT);

  pinMode(MOTOR, OUTPUT);
  pinMode(BUZZER, OUTPUT);

  pinMode(GREEN, OUTPUT);
}

void loop() {

  startvalue1 = digitalRead(BUTTON);
  motorvalue2 = digitalRead(MOTOR_BUTTON);

  switch (motorvalue2) {

    case 0:

      analogWrite(MOTOR, 255);

      break;

    case 1:

      analogWrite(MOTOR, 0);

      break;
  }

  if (startvalue1 == 0) {

    digitalWrite(LED1, HIGH);

    tone(BUZZER, 700);
    delay(150);
    noTone(BUZZER);

    delay(350);

    digitalWrite(LED2, HIGH);

    delay(500);

    digitalWrite(LED3, HIGH);

    tone(BUZZER, 700);
    delay(150);
    noTone(BUZZER);

    delay(350);

    digitalWrite(LED4, HIGH);

    delay(500);

    tone(BUZZER, 700);
    delay(150);
    noTone(BUZZER);

    delay(850);

    for (int i = 6; i <= 8; i++) {
      digitalWrite(i, LOW);
    }

    digitalWrite(LED4, LOW);

    digitalWrite(GREEN, HIGH);

    tone(BUZZER, 1400);
    delay(500);
    noTone(BUZZER);

    time = millis();

    while (millis() - time < 2000) {
    }

    digitalWrite(GREEN, LOW);

    while (digitalRead(BUTTON) == 0) {
    }
  }
}
