
import { mineFiledArr, twoDimensionalArr } from "./createMatrix.js";


export function checkField(event){

  // console.log(twoDimensionalArr[event.target.y][event.target.x], event.target);

  console.log(twoDimensionalArr[event.target.y][event.target.x])


  if (twoDimensionalArr[event.target.y][event.target.x] === 1){
    console.log('game over');
  }
  else{
    let numberOfBombs = 0;
    if(twoDimensionalArr[event.target.y][event.target.x - 1] === 1){
      numberOfBombs++;
    }
    if(twoDimensionalArr[event.target.y][event.target.x + 1] === 1){
      numberOfBombs++;
    }

    if (event.target.y - 1 >= 0){
      if (twoDimensionalArr[event.target.y - 1][event.target.x] === 1){
        numberOfBombs++;
      }
      if (twoDimensionalArr[event.target.y - 1][event.target.x - 1] === 1){
        numberOfBombs++;
      }
      if (twoDimensionalArr[event.target.y - 1][event.target.x + 1] === 1){
        numberOfBombs++;
      }
    }

    if (event.target.y + 1 <= 9){
      if (twoDimensionalArr[event.target.y + 1][event.target.x] === 1){
        numberOfBombs++;
      }
      if (twoDimensionalArr[event.target.y + 1][event.target.x - 1] === 1){
        numberOfBombs++;
      }
      if (twoDimensionalArr[event.target.y + 1][event.target.x + 1] === 1){
        numberOfBombs++;
      }
    }

    console.log(numberOfBombs)
  }
}

function checkCell(x, y){
  if (x <= 0){
    return false; 
  }
  else if (x >= 9){
    return false;
  }
  else if (y < 0){
    return false;
  }
  else if (y >= 9){
    return false;
  }
}



