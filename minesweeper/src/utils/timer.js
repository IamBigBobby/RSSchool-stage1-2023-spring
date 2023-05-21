export let seconds;

export function timer(){
  seconds = 0;
  setInterval(tickTime, 1000) 
}

function tickTime(){
  seconds++
  console.log(seconds)
}