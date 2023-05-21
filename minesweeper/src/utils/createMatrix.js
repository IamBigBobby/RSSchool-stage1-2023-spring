
export let mineFiledArr = [];
export let twoDimensionalArr;
export let countBomb = 10;
export let sideSize = 10;

export function createMatrix (){

  for (let i = 0; i < sideSize ** 2; i++){
    mineFiledArr[i] = 0;
  }

  let numberArr = [];
  
  for (let i = 0; i < mineFiledArr.length; i++){
    numberArr.push(i);
  }

  let randomNumberArr = [];

  for (let i = 0; i < countBomb; i++){
    let randomNumber = Math.floor(Math.random() * (numberArr.length));

    console.log(randomNumber, numberArr.length)
    randomNumberArr.push(numberArr[randomNumber])
    numberArr.splice(randomNumber, 1);
  }
  console.log(randomNumberArr)


  for (let i = 0; i < countBomb; i++){
    // console.log(randomNumberArr[i]);
    mineFiledArr.splice(randomNumberArr[i], 1, 1);
  }

  let chunkArr = (arr, cnt) => arr.reduce((prev, cur, i, a) => !(i % cnt) ? prev.concat([a.slice(i, i + cnt)]) : prev, []);

  twoDimensionalArr = chunkArr(mineFiledArr, sideSize);

  // console.log(twoDimensionalArr);
 
  // console.log(twoDimensionalArr.length);
}