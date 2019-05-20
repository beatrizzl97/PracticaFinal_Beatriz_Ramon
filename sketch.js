var GRID_SIZE = 20;
var FRAME_RATE = 6;
var SCREEN_SIZE;
var gameOver = false;

let poma;
let cap;
let cos;
let cos2;
let cos3;
let cos4;
var bacteri;


var backsong;
var song;
var endsong;
var snake;
var food;
var info;


function preload(){
  song = loadSound("apple.mp3");
  endsong = loadSound("gameover.mp3")
  backsong = loadSound("fondo.mp3")
  info = loadJSON("info.json");

  bacteri=loadAnimation("1.png","bacteria_3.png")
 

}
function setup() {
  SCREEN_SIZE = createVector(800, 480);
  createCanvas(SCREEN_SIZE.x, SCREEN_SIZE.y);
  frameRate(FRAME_RATE);
  backsong.play();

  
  poma = loadImage("pom.png");
  cap = loadImage("cap.png");
  cos = loadImage("cos.png");
  cap2 = loadImage("cap2.png");
  cap3 = loadImage("cap3.png");
  cap4 = loadImage("cap4.png");

  snake = new Snake(createVector(SCREEN_SIZE.x / 2, SCREEN_SIZE.y / 2));
  food = new Food();
}

function draw() {
  background(255);
  if (!gameOver) {
    snake.update();
    gameUpdate();
    textUpdate();
    snake.draw();
    food.draw();
  }else{
    gameOverUpdate();
  }
}

function gameUpdate() {
  if (snake.position.x < 0) {
    backsong.pause();
    endsong.play();
    gameOver=true;
  } else if (snake.position.y < 0) {
    backsong.pause();
    endsong.play();
    gameOver=true;
  } else if (snake.position.x >= SCREEN_SIZE.x) {
    backsong.pause();
    endsong.play();
    gameOver=true;
  } else if (snake.position.y >= SCREEN_SIZE.y) {
    backsong.pause();
    endsong.play();
    gameOver=true;
  }

  snake.body.slice(1).forEach(function (segment) {
    if (segment.equals(snake.body[0])) {
      gameOver = true;
      backsong.pause();
      endsong.play();
    }
  });

  if (snake.position.equals(food.position)){
    food.add();
    song.play();
    snake.addBodySegment();
  }

  
}

function textUpdate() {
  //JSON POINTS
  textSize(150);
  fill(255, 100, 100, 100);
  textAlign(CENTER, CENTER);
  textLeading(0);
  text(info.points + snake.length.toString(), SCREEN_SIZE.x / 2, SCREEN_SIZE.y / 2);
}

function gameOverUpdate() {
  //JSON INFO
  frameRate(FRAME_RATE);
  background(234,136,93,100);
  textSize(120);
  fill(255, 100, 100, 100);
  textAlign(CENTER, TOP);
  text(info.gameover, SCREEN_SIZE.x / 2, 0);
  textSize(80);
  text(info.puntuacio + snake.length.toString(), SCREEN_SIZE.x / 2, 150);
  textAlign(CENTER, BOTTOM);
  textSize(40);
  text(info.cred, SCREEN_SIZE.x / 2, SCREEN_SIZE.y);
  
}

function mouseClicked() {
  if (gameOver) {
    backsong.play();
    snake = new Snake(createVector(SCREEN_SIZE.x / 2, SCREEN_SIZE.y / 2));
    food = new Food();
    gameOver = false;
  }
}
