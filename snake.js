function Snake(_position){
  this.position = _position;
  this.speed = createVector(0, 0);
  this.colour = color(0);
  this.body = [];
  this.length = 0;
  this.factor = 1;
}
/*EL POP ELIMINA LA ULTIMA POSICIO DEL BODY DEL ARRAY, UNSHIFT AFEGIM AL PRINCIPI DEL ARRAY */
Snake.prototype.update = function () {
  this.body.unshift(this.position.copy());
  if (this.body.length > this.length) {
    this.body.pop();
  }
  this.position.add(this.speed);
};

Snake.prototype.draw = function () {
  /*4 IMATGES PER CADA POSICIO DE CAP, SEGONS TAMANY DEL QUADRAT DE LA GREAELLA*/

  if (keyCode === LEFT_ARROW && snake.speed.x != GRID_SIZE) {
    image(cap,this.position.x, this.position.y, GRID_SIZE , GRID_SIZE);
    snake.speed.x = -GRID_SIZE ;
    snake.speed.y = 0;}
  else if (keyCode === UP_ARROW && snake.speed.y != GRID_SIZE) {
      image(cap4,this.position.x, this.position.y, GRID_SIZE, GRID_SIZE);
      snake.speed.x = 0;
      snake.speed.y = -GRID_SIZE ;}
  else if (keyCode === RIGHT_ARROW && snake.speed.x != -GRID_SIZE) {
      image(cap3,this.position.x, this.position.y, GRID_SIZE, GRID_SIZE);
      snake.speed.x = GRID_SIZE ;
      snake.speed.y = 0;}
  else if (keyCode === DOWN_ARROW && snake.speed.y != -GRID_SIZE) {
      image(cap2,this.position.x, this.position.y, GRID_SIZE, GRID_SIZE);
      snake.speed.x = 0;
      snake.speed.y = GRID_SIZE}
  
  this.body.forEach(function (segment) {
    image(cos,segment.x ,segment.y, GRID_SIZE , GRID_SIZE);
  });
  
};

/*AUGMENTEM VELOCITAT DEL SNAKE A MEDIDA DE QUE ENS FEIM MES LLARGS */

Snake.prototype.addBodySegment = function () {
  if((this.length % 3) == 0){
    this.factor += 0.5;
    frameRate(FRAME_RATE*this.factor);
  }
  this.length += 1;
};
