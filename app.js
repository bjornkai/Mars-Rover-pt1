
// ROVER OBJECT

var rover = {
  direction: "N",
  positionX: 0,
  positionY: 0,
  travelLog: []
};

// THE GRID

var marsGrid = [];
for(var i=0; i<10; i++) {
    marsGrid[i] = [];
    for(var j=0; j<10; j++) {
      marsGrid[i][j] = null;
    }
}
console.log(marsGrid);

// LEFT FUNCTION

 function turnLeft(rover){
 switch(rover.direction){

   case 'N':
    rover.direction='W'; 
    break;
   case 'W':
    rover.direction='S'; 
    break;
   case 'S':
    rover.direction='E'; 
    break;
   case 'E': 
    rover.direction='N'; 
    break;
 }
     console.log("turnLeft was called!");
}

// RIGHT FUNCTION 

 function turnRight(rover){
 switch(rover.direction){

   case 'N': 
    rover.direction='E'; 
    break;
   case 'E': 
    rover.direction='S'; 
    break;
   case 'S': 
    rover.direction='W'; 
    break;
   case 'W': 
    rover.direction='N'; 
    break;
 }
   console.log("turnRight was called!");
}


// FORWARD FUNCTION 

 function moveForward(rover){
  switch(rover.direction){
   case 'N': 
       if (rover.positionY <= 0 || rover.positionY > 10){
         console.log("Rover reached limit grid");
       } else{
         rover.positionY-=1;
       }
      break;
   
   case 'E':
      if(rover.positionX < 0 || rover.positionX > 10){
         console.log("Rover reached limit grid");
       } else{   
         rover.positionX+=1;
       }
       break;
   
   case 'S':
      if(rover.positionY < 0 || rover.positionY > 10){
         console.log("Rover reached limit grid");
      } else {
         rover.positionY+=1;
      }
     break;
     
   case 'W':
      if(rover.positionX < 0 || rover.positionX > 10){
         console.log("Rover reached limit grid");
      } else {
           rover.positionX-=1;
      }
     break;
  }
  
  console.log("moveForward was called");
  console.log("Rover is here: " + [rover.positionX, rover.positionY]);
 }

// COMMANDS 

 function commandsRover(rover){
  var route = prompt("Insert the commands to move the Rover: f: forward, r: right, l: left");

  if (route.indexOf('f') >= 0 || route.indexOf('r') >= 0 || route.indexOf('l') >= 0 ){
  var newRoute = route.split("");
  console.log("Rover's route: " + route);

  for (var i = 0;  i < newRoute.length; i++){
    
     switch(route[i]){
     case 'l': 
      turnLeft(rover); 
      break;
     case 'r': 
      turnRight(rover); 
      break;
     case 'f': 
      moveForward(rover); 
      break;
    }
    
     var position = [rover.positionX, rover.positionY];
     rover.travelLog.push(position);
     console.log("Rover's current location: " + position);
 
   }
  
  } else {
    alert("Enter a valid command");
    commandsRover(rover);//prompt poup-up again if input doesnt match.
  }//ifelse
}
commandsRover(rover);
 