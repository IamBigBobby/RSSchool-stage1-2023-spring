import { countBomb, sideSize } from "./createMatrix.js"
import { safeCells } from "./gameLogic.js"

export function countMoves(){
  let moves = document.querySelector('.moves')
  if ( safeCells === sideSize ** 2 - countBomb){
    moves.value = Number(moves.value) - 1;
  }
  moves.value = Number(moves.value) + 1
  return moves.value
}