
import { mineField } from "./createFiled.js";
import { twoDimensionalArr } from "./createMatrix.js";

export function сheckField(x, y){

  // console.log(twoDimensionalArr.length)
  x = this.x;
  y = this.y;

  if (twoDimensionalArr[y][x] === 1){
    console.log('game over');
  }
  else{
    checkAroundCells(x, y);
  }
}

function checkAroundCells(x, y){
  if (x > 9 || y > 9 || x < 0 || y < 0){
    return;
  }
  if (mineField.rows[y].cells[x].classList.contains('empty') || mineField.rows[y].cells[x].classList.contains('near-bomb')){
    return;
  }
  let numberOfBombs = 0;
  if(twoDimensionalArr[y][x - 1] === 1){
    numberOfBombs++;
  }
  if(twoDimensionalArr[y][x + 1] === 1){
    numberOfBombs++;
  }

  if (y - 1 >= 0){
    if (twoDimensionalArr[y - 1][x] === 1){
      numberOfBombs++;
    }
    if (twoDimensionalArr[y - 1][x - 1] === 1){
      numberOfBombs++;
    }
    if (twoDimensionalArr[y - 1][x + 1] === 1){
      numberOfBombs++;
    }
  }

  if (y + 1 <= 9){
    if (twoDimensionalArr[y + 1][x] === 1){
      numberOfBombs++;
    }
    if (twoDimensionalArr[y + 1][x - 1] === 1){
      numberOfBombs++;
    }
    if (twoDimensionalArr[y + 1][x + 1] === 1){
      numberOfBombs++;
    }
  }

  if (numberOfBombs > 0){
    mineField.rows[y].cells[x].classList.add('near-bomb');
    mineField.rows[y].cells[x].innerHTML = numberOfBombs;
    return;
  }
  else{
    console.log(x);
    console.log(y);
    mineField.rows[y].cells[x].classList.add('empty');
    if (y >= 0 && y <= 9 && x >=0 && x <= 9){
      checkAroundCells(x + 1, y);
      checkAroundCells(x - 1, y);
      checkAroundCells(x, y + 1);
      checkAroundCells(x, y - 1);
      checkAroundCells(x + 1, y - 1);
      checkAroundCells(x + 1, y + 1);
      checkAroundCells(x - 1, y - 1);
      checkAroundCells(x - 1, y + 1);
    }
  }
}





























// function checkCells(x, y){

//   let checkLeft;
//   let checkRight;
//   console.log(x)
//   if(x > 0 && x <= 9){

//     if (mineField.rows[y].cells[x - 1].classList.contains('clear')){
//       mineField.rows[y].cells[x - 1].classList.add('empty');
//       checkLeft = x - 1;
//       // checkAroundCells(checkLeft, y);
//     }
//     else if (mineField.rows[y].cells[x - 1].classList.contains('bomb')){
//       mineField.rows[y].cells[x - 1].classList.add('near-bomb');
//       return;
//     }

//     if (mineField.rows[y].cells[x + 1].classList.contains('clear')){
//       mineField.rows[y].cells[x + 1].classList.add('empty');
//       checkRight = x + 1;
//       // checkAroundCells(checkRight, y);
//     }
//     else if (mineField.rows[y].cells[x + 1].classList.contains('bomb')){
//       mineField.rows[y].cells[x + 1].classList.add('near-bomb');
//       return;
//     }
//   }
//   console.log(checkLeft, checkRight);
// }




// function checkField(x, y){
//   console.log(x, y)

//   if(y === 0){
//     console.log("yes")
//     console.log(mineField.rows[y].cells[x + 1]);
//     console.log(mineField.rows[y].cells[x - 1]);
//     console.log(mineField.rows[y + 1].cells[x]);
//     console.log(mineField.rows[y + 1].cells[x + 1]);
//     console.log(mineField.rows[y + 1].cells[x - 1]);
//   }
//   else if (y === 9){
//     console.log(mineField.rows[y].cells[x + 1]);
//     console.log(mineField.rows[y].cells[x - 1]); 
//     console.log(mineField.rows[y - 1].cells[x]);
//     console.log(mineField.rows[y - 1].cells[x - 1]);
//     console.log(mineField.rows[y - 1].cells[x + 1]);    
//   }
//   else{
//     console.log(mineField.rows[y].cells[x + 1]);
//     console.log(mineField.rows[y].cells[x - 1]);
//     console.log(mineField.rows[y + 1].cells[x]);
//     console.log(mineField.rows[y + 1].cells[x + 1]);
//     console.log(mineField.rows[y + 1].cells[x - 1]);
//     console.log(mineField.rows[y - 1].cells[x]);
//     console.log(mineField.rows[y - 1].cells[x - 1]);
//     console.log(mineField.rows[y - 1].cells[x + 1]);    
//   }
// }


// function checkRightField(x, y){
//   if (x + 1 <= 9 && x - 1 <= 0){
//     if (mineField.rows[y].cells[x + 1].classList.contains('clear')){
//       mineField.rows[y].cells[x + 1].classList.add('empty');
//       checkAroundCells(x + 1, y);
//     }
//     else if (mineField.rows[y].cells[x + 1].classList.contains('bomb')){
//       mineField.rows[y].cells[x + 1].classList.add('near-bomb');
//       return;
//     }
//   }
// }

// function checkLeftField(x, y){
//   if (x - 1 >= 0 && x + 1 <= 9){
//     if (mineField.rows[y].cells[x - 1].classList.contains('clear')){
//       mineField.rows[y].cells[x - 1].classList.add('empty');
//       checkAroundCells(x - 1, y);
//     }
//     else if (mineField.rows[y].cells[x - 1].classList.contains('bomb')){
//       mineField.rows[y].cells[x - 1].classList.add('near-bomb');
//       return;
//     }
//   }
// }