let enemyX = [100, 200, 300, 400, 500];
let enemyY = [80, 120, 90, 130, 100];

let bulletX = [0, 0, 0, 0, 0];
let bulletY = [0, 0, 0, 0, 0];
let bulletState = [0, 0, 0, 0, 0];

let score = 0;

let mode = 1;

let bulletColor;

let lastShot = 0;

let shotTime = 300;

let angle = 0;

function setup() {

  createCanvas(700, 450);

  bulletColor = color(255, 255, 0);

  for (let i = 0; i < 5; i++) {

    enemyX[i] = random(50, 650);
    enemyY[i] = random(70, 180);
  }
}

function draw() {

  background(20);

  fill(255);
  textSize(14);

  text("점수 : " + score, 15, 22);
  text("MODE : " + mode, 610, 22);

  if (score < 3) {

    text("상태 : 시작", 15, 45);

  }
  else if (score < 7) {

    text("상태 : 진행 중", 15, 45);

  }
  else {

    text("상태 : 잘하고 있음", 15, 45);
  }

  stroke(100);

  line(0, 60, width, 60);

  stroke(255);

  point(100, 100);
  point(250, 160);
  point(400, 110);
  point(550, 180);

  let playerX = constrain(mouseX, 30, width - 30);
  let playerY = constrain(mouseY, 330, height - 30);

  if (mouseIsPressed) {

    fill(255, 100, 100);

  }
  else {

    fill(100, 200, 255);
  }

  drawPlayer(playerX, playerY);

  for (let i = 0; i < 5; i++) {

    let moveX = enemyX[i] + 15 * sin(angle + i);

    fill(255, 0, 0);

    ellipse(
      moveX,
      enemyY[i],
      30,
      30
    );

    fill(150);

    rect(
      moveX - 8,
      enemyY[i] - 5,
      16,
      10
    );

    enemyY[i] = enemyY[i] + 1;

    if (enemyY[i] > height) {

      enemyX[i] = random(50, 650);
      enemyY[i] = random(70, 120);
    }
  }

  angle = angle + 0.05;

  for (let i = 0; i < 5; i++) {

    if (bulletState[i] == 1) {

      fill(bulletColor);

      ellipse(
        bulletX[i],
        bulletY[i],
        8,
        14
      );

      bulletY[i] = bulletY[i] - 6;

      if (bulletY[i] < 60) {

        bulletState[i] = 0;
      }

      for (let j = 0; j < 5; j++) {

        let moveX = enemyX[j] + 15 * sin(angle + j);

        if (checkHit(
          bulletX[i],
          bulletY[i],
          moveX,
          enemyY[j]
        )) {

          score = score + 1;

          bulletState[i] = 0;

          enemyX[j] = random(50, 650);
          enemyY[j] = random(70, 120);
        }
      }
    }
  }
}

function drawPlayer(x, y) {

  rect(
    x - 15,
    y - 10,
    30,
    25
  );

  arc(
    x,
    y - 10,
    20,
    20,
    PI,
    TWO_PI
  );

  line(
    x - 15,
    y + 5,
    x - 30,
    y + 20
  );

  line(
    x + 15,
    y + 5,
    x + 30,
    y + 20
  );
}

function checkHit(bx, by, ex, ey) {

  let d = dist(
    bx,
    by,
    ex,
    ey
  );

  if (d < 20) {

    return true;

  }
  else {

    return false;
  }
}

function mousePressed() {

  if (millis() - lastShot >= shotTime) {

    for (let i = 0; i < 5; i++) {

      if (bulletState[i] == 0) {

        bulletX[i] = constrain(
          mouseX,
          30,
          width - 30
        );

        bulletY[i] = constrain(
          mouseY,
          330,
          height - 30
        );

        bulletState[i] = 1;

        lastShot = millis();

        break;
      }
    }
  }
}

function keyPressed() {

  switch (key) {

    case "1":

      mode = 1;

      bulletColor = color(
        255,
        255,
        0
      );

      shotTime = 300;

      break;

    case "2":

      mode = 2;

      bulletColor = color(
        0,
        255,
        0
      );

      shotTime = 200;

      break;

    case "3":

      mode = 3;

      bulletColor = color(
        0,
        150,
        255
      );

      shotTime = 100;

      break;
  }
}
