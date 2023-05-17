export let mineFiledArr = [];
let countBomb = 10;

export function createMatrix (){

  for (let i = 0; i < 100; i++){
    mineFiledArr[i] = 0;
  }

  for (let i = 0; i < countBomb; i++){
    let randomNumberArr = Math.floor(Math.random() * mineFiledArr.length);
    mineFiledArr.splice(randomNumberArr, 1, 1);
  }
}