let enemyX = 300;
let enemyY = 100;

let angle = 0;

function setup() {
  createCanvas(700, 450);
}

function draw() {
  background(20);

  fill(255);
  textSize(18);
  text("미니 슈팅게임", 20, 30);

  stroke(255);

  point(100, 100);
  point(200, 150);
  point(500, 120);

  line(0, 60, width, 60);

  let playerX = constrain(mouseX, 30, width - 30);
  let playerY = constrain(mouseY, 330, height - 30);

  fill(0, 150, 255);
  rect(playerX - 15, playerY - 10, 30, 25);

  fill(150, 220, 255);
  arc(playerX, playerY - 10, 20, 20, PI, TWO_PI);

  line(playerX - 15, playerY + 5, playerX - 30, playerY + 20);
  line(playerX + 15, playerY + 5, playerX + 30, playerY + 20);

  fill(255, 0, 0);
  ellipse(enemyX, enemyY, 30, 30);

  enemyX = 350 + 100 * sin(angle);

  angle = angle + 0.03;
}
