#define BUTTON 2
#define MOTOR_BUTTON 4

#define LED1 6
#define LED2 7
#define LED3 8
#define LED4 12

#define MOTOR 10
#define BUZZER 13

#define GREEN 5

int led[4] = {LED1, LED2, LED3, LED4};

int startvalue1 = 0;
int motorvalue2 = 0;

void buzzerSound(int frequency, int duration) {

  tone(BUZZER, frequency);

  unsigned long time = millis();

  while (millis() - time < duration) {
  }

  noTone(BUZZER);
}

int checkButton(int pin) {

  int value = digitalRead(pin);

  return value;
}

void setup() {

  pinMode(BUTTON, INPUT);
  pinMode(MOTOR_BUTTON, INPUT);

  for (int i = 0; i < 4; i++) {
    pinMode(led[i], OUTPUT);
  }

  pinMode(MOTOR, OUTPUT);
  pinMode(BUZZER, OUTPUT);

  pinMode(GREEN, OUTPUT);
}

void loop() {

  startvalue1 = checkButton(BUTTON);
  motorvalue2 = checkButton(MOTOR_BUTTON);

  switch (motorvalue2) {

    case 0:

      analogWrite(MOTOR, 255);

      break;

    case 1:

      analogWrite(MOTOR, 0);

      break;
  }

  if (startvalue1 == 0) {

    digitalWrite(led[0], HIGH);

    buzzerSound(700, 150);

    delay(350);

    digitalWrite(led[1], HIGH);

    delay(500);

    digitalWrite(led[2], HIGH);

    buzzerSound(700, 150);

    delay(350);

    digitalWrite(led[3], HIGH);

    delay(500);

    buzzerSound(700, 150);

    delay(850);

    for (int i = 0; i < 4; i++) {
      digitalWrite(led[i], LOW);
    }

    digitalWrite(GREEN, HIGH);

    buzzerSound(1400, 500);

    delay(2000);

    digitalWrite(GREEN, LOW);

    while (digitalRead(BUTTON) == 0) {
    }
  }
}
