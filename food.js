function Food(){
  this.add();

}

Food.prototype.add = function () {
  var tempFoodX = floor(random(SCREEN_SIZE.x / GRID_SIZE)) * GRID_SIZE;
  var tempFoodY = floor(random(SCREEN_SIZE.y / GRID_SIZE)) * GRID_SIZE;
  this.position = createVector(tempFoodX, tempFoodY);
  
};

Food.prototype.draw = function () { 
  animation(bacteri,this.position.x + GRID_SIZE/2, this.position.y + GRID_SIZE/2);

};
