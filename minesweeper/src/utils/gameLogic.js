
import { twoDimensionalArr } from "./createMatrix.js";


export function checkField(event){

  console.log(event.target)

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
    console.log(numberOfBombs);
    if (numberOfBombs > 0){
      event.target.innerHTML = numberOfBombs
    }
  }
}




