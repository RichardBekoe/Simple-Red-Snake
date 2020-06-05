function setupGame() {

  const grid = document.querySelector('.grid')
  const width = 20 // increaese the grid size
  const cells = []

  const snakeArrayPositions = [22, 23] //to make an array; make a let
    // let food = 25

  for (let i = 0; i < width ** 2; i++) {

    const div = document.createElement('div')
    div.classList.add('cell')

    grid.appendChild(div)
    cells.push(div)

  }

  console.log(cells)


  // ! Function definition - renderGame
  function renderGame() {

    cells.forEach(cells => {
      cells.classList.remove('snake')
    })

    snakeArrayPositions.forEach(snakePosition => {
      cells[snakePosition].classList.add('snake')
    })
  }




  // ! Function definition - moveRight
  function moveRight() {
    setInterval(() => {

      snakeArrayPositions.forEach((snakePosition, i) => {
        snakeArrayPositions[i] = snakeArrayPositions[i] + 1
      })

      renderGame()
    }, 1000)
  }

  // ! Function definition - moveLeft
  function moveLeft() {
    setInterval(() => {

      snakeArrayPositions.forEach((snakePosition, i) => {
        snakeArrayPositions[i] = snakeArrayPositions[i] - 1
      })

      renderGame()
    }, 1000)
  }






  //!  CODE
  // initial placing the snake onto the gameBoard
  snakeArrayPositions.forEach(snakePosition => {
    cells[snakePosition].classList.add('snake')
  })


  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {

      moveRight()
    } else if (event.key === 'ArrowLeft') {

      moveLeft()
    } // else if {


    // }

  })




}

window.addEventListener('DOMContentLoaded', setupGame)


// // ! Function definition - speed
// function Speed(direction, msecs) {
//   setInterval(() => {
//     direction
//     renderGame()
//   }, msecs)
// }