export let mineFiledArr = [];
export let twoDimensionalArr;
export let countBomb = 10;
export let sideSize = 10;

export function createMatrix (){

  for (let i = 0; i < sideSize ** 2; i++){
    mineFiledArr[i] = 0;
  }

  let numberGenerateBombs = 0;
  let randomNumberArr = [];

  while(numberGenerateBombs < countBomb){
    let randomNumber = Math.floor(Math.random() * mineFiledArr.length);

    if (randomNumberArr.includes(randomNumber)){
      randomNumberArr.splice(randomNumberArr.indexOf(randomNumber), 1);
      --numberGenerateBombs;
    }

    randomNumberArr.push(randomNumber);
    numberGenerateBombs++;

    mineFiledArr.splice(randomNumber, 1, 1);
  }
  console.log(randomNumberArr)


  // for (let i = 0; i < countBomb; i++){
  //   let randomNumberArr = Math.floor(Math.random() * mineFiledArr.length);
  //   // console.log(randomNumberArr)
  //   mineFiledArr.splice(randomNumberArr, 1, 1);
  // }

  let chunkArr = (arr, cnt) => arr.reduce((prev, cur, i, a) => !(i % cnt) ? prev.concat([a.slice(i, i + cnt)]) : prev, []);

  twoDimensionalArr = chunkArr(mineFiledArr, sideSize);

  // console.log(twoDimensionalArr);
 
  // console.log(twoDimensionalArr.length);
}