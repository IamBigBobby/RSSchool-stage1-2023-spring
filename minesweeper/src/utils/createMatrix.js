export let mineFiledArr = [];
export let twoDimensionalArr;
let countBomb = 50;
export let sideSize = 20;

export function createMatrix (){

  for (let i = 0; i < sideSize ** 2; i++){
    mineFiledArr[i] = 0;
  }

  for (let i = 0; i < countBomb; i++){
    let randomNumberArr = Math.floor(Math.random() * mineFiledArr.length);
    mineFiledArr.splice(randomNumberArr, 1, 1);
  }

  let chunkArr = (arr, cnt) => arr.reduce((prev, cur, i, a) => !(i % cnt) ? prev.concat([a.slice(i, i + cnt)]) : prev, []);

  twoDimensionalArr = chunkArr(mineFiledArr, sideSize);

  console.log(twoDimensionalArr);
 
  console.log(twoDimensionalArr.length);
}