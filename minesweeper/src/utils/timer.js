
export function timer(){
  let timer = document.querySelector('.timer')
  setInterval(function(){
    timer.value = Number(timer.value) + 1
  }, 1000)
}

