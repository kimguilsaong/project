let enemyX = 300;
let enemyY = 100;

let score = 0;

let enemyColor;

let angle = 0;

let startTime = 0;

let mode = 1;

function setup() {
  createCanvas(700, 450);

  enemyColor = color(255, 0, 0);

  startTime = millis();
}

function draw() {
  background(20);

  fill(255);
  textSize(18);

  text("점수 : " + score, 20, 25);
  text("MODE : " + mode, 600, 25);

  if (score < 3) {

    text("상태 : 시작", 20, 50);

  }
  else if (score < 7) {

    text("상태 : 진행 중", 20, 50);

  }
  else {

    text("상태 : 잘하고 있음", 20, 50);
  }

  stroke(255);

  line(0, 60, width, 60);

  point(100, 100);
  point(200, 150);
  point(500, 120);

  let playerX = constrain(mouseX, 30, width - 30);
  let playerY = constrain(mouseY, 330, height - 30);

  if (mouseIsPressed) {

    fill(255, 100, 100);

  }
  else {

    fill(0, 150, 255);
  }

  rect(playerX - 15, playerY - 10, 30, 25);

  arc(playerX, playerY - 10, 20, 20, PI, TWO_PI);

  line(playerX - 15, playerY + 5, playerX - 30, playerY + 20);
  line(playerX + 15, playerY + 5, playerX + 30, playerY + 20);

  fill(enemyColor);

  ellipse(enemyX, enemyY, 30, 30);

  enemyX = 350 + 100 * sin(angle);

  enemyY = enemyY + 1;

  angle = angle + 0.03;

  if (enemyY > height) {

    enemyX = random(50, 650);
    enemyY = 70;
  }

  let d = dist(
    mouseX,
    mouseY,
    enemyX,
    enemyY
  );

  if (d < 30) {

    enemyColor = color(255, 255, 0);

  }
  else {

    enemyColor = color(255, 0, 0);
  }

  if (millis() - startTime >= 1000) {

    startTime = millis();
  }

  if (keyIsDown(49)) {

    mode = 1;

  }
  else if (keyIsDown(50)) {

    mode = 2;

  }
  else if (keyIsDown(51)) {

    mode = 3;
  }

  switch (mode) {

    case 1:

      enemyColor = color(255, 0, 0);

      break;

    case 2:

      enemyColor = color(0, 255, 0);

      break;

    case 3:

      enemyColor = color(0, 150, 255);

      break;
  }

  for (let i = 0; i < 5; i++) {

    point(100 + i * 100, 200);
  }
}
