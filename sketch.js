var fixedRect,movingRect;
var object1,object2,object3,object4;  

function setup() { 
  createCanvas(800,400); 
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true; 
  movingRect = createSprite(400,200,30,50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object1 = createSprite(100,100,50,50);
  object1.shapeColor = "green";
  
  object2 = createSprite(200,100,50,50);
  object2.shapeColor = "green";
   
  object3 = createSprite(300,100,50,50);
  object3.shapeColor = "green";

  object4 = createSprite(400,100,50,50);
  object4.shapeColor = "green";
    
                                            
  } 
  
  function draw() {
     background("black");
     
     movingRect.x = mouseX;
     movingRect.y = mouseY;
      
    if(isTouching(movingRect,object4)){
      movingRect.shapeColor = "blue"; 
      object4.shapeColor = "blue";
    }
    else{
      movingRect.shapeColor = "green"; 
      object4.shapeColor = "green";
    }
    drawSprites(); 
  }

 
