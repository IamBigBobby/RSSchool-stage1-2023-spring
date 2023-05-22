
export function countMoves(){
  let moves = document.querySelector('.moves')
  moves.value = Number(moves.value) + 1
  return moves.value
}