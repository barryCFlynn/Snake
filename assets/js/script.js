const boardBorder = "#9ddb0a";
const boardBackground = "#9ddb0a";
const snakeCol = "#283c01";

let snake = [
  { x: 150, y: 60 },
  { x: 140, y: 60 },
  { x: 130, y: 60 },
  { x: 120, y: 60 },
  { x: 110, y: 60 }
];

//GLOBAL VARIABLES
let score = 0;
// True if changing direction
let changingDirection = false;
// Declaring food coordinate
let foodX;
let foodY;
// Horizontal velocity
let dx = 10;
// Vertical velocity
let dy = 0;
let gameLoopTimeout;
let playerName = "";
// max high score entry limit
const maxHighScores = 5;
// Initialize the game state
let gameStarted = false;
// Get the canvas element
const snakeboard = document.querySelector("#snakeboard");
// Return a two dimensional drawing context
const snakeboardCtx = snakeboard.getContext("2d");
// Get Play button
const play = document.querySelector("#play");
// Get High Score button
const highScores = [
  { name: "BAZ", score: "025" },
  { name: "LOG", score: "013" },
  { name: "EVA", score: "008" },
  { name: "ANNE", score: "005" },
  { name: "FRED", score: "001" }
];
const highScoresTable = document.querySelector("#highScores");

// for managing the modal High Scores
const gameOverModal = document.querySelector("#gameOverModal");
const closeModal = document.querySelector("#closeModal");
const playerNameInput = document.querySelector("#playerName");

// for change direction arrow keys
const leftKey = 37;
const rightKey = 39;
const upKey = 38;
const downKey = 40;

// for change direction arrow buttons
const btnLeft = document.querySelector("#btnLeft");
const btnRight = document.querySelector("#btnRight");
const btnUp = document.querySelector("#btnUp");
const btnDown = document.querySelector("#btnDown");

// EVENT LISTENERS

// to track change direction
document.addEventListener("keydown", changeDirection);

// to reset game
play.addEventListener("click", startGame);

// for change direction button event listeners
btnLeft.addEventListener("click", () => changeDirection({ keyCode: leftKey }));
btnRight.addEventListener("click", () =>
  changeDirection({ keyCode: rightKey })
);
btnUp.addEventListener("click", () => changeDirection({ keyCode: upKey }));
btnDown.addEventListener("click", () => changeDirection({ keyCode: downKey }));

//close modal even listener
closeModal.addEventListener("click", gameOver);

//FUNCTIONS

// initialise game state
initGame();

/**
 * Initial game initalisation on page load
 */
function initGame() {
  changingDirection = false;
  updateHighScoresTable();
  drawSnake();
  genFood();
  console.log("initGame has run");
}

/**
 * Listens to Play button to start game
 */
function startGame() {
  if (!gameStarted) {
    // Reset game state
    resetGame();
    gameStarted = true; // Set the game as started
    //Disable scrolling while game if ongoing
    document.body.style.overflow = "hidden";
    // Start the game loop
    main();
    console.log("startGame has run");
  }
}

/**
 * Main game loop function
 */
function main() {
  changingDirection = false;
  // Clear existing timeout
  clearTimeout(gameLoopTimeout);

  gameLoopTimeout = setTimeout(function onTick() {
    clearBoard();
    drawFood();
    moveSnake();
    drawSnake();
    gameEnd();

    if (!hasGameEnded()) {
      // Continue the game loop if the game hasn't ended
      main();
    } else {
      // Reset gameStarted when the game ends
      gameStarted = false;
    }
    // game loop 100ms or 10 times per second
  }, 100);
}

/**
 * Reset game on play button use
 */
function resetGame() {
  // Reset game variables, e.g., score, snake position
  score = 0;
  snake = [
    { x: 150, y: 60 },
    { x: 140, y: 60 },
    { x: 130, y: 60 },
    { x: 120, y: 60 },
    { x: 110, y: 60 }
  ];
  dx = 10;
  dy = 0;

  document.querySelector("#score").textContent = "000";
  console.log("resetGame has run");
}

/**
 * Constantly draw the board to remove old snake
 */
function clearBoard() {
  //  Select the colour to fill the drawing
  snakeboardCtx.fillStyle = boardBackground;
  //  Select the colour for the border of the canvas
  snakeboardCtx.strokestyle = boardBorder;
  // Draw a "filled" rectangle to cover the entire canvas
  snakeboardCtx.fillRect(0, 0, snakeboard.width, snakeboard.height);
  // Draw a "border" around the entire canvas
  snakeboardCtx.strokeRect(0, 0, snakeboard.width, snakeboard.height);
}

/**
 * Draw the snake on the canvas
 */
function drawSnake() {
  // Draw each part
  snake.forEach(drawSnakePart);
}

/**
 * Draw food on canvas
 */
function drawFood() {
  snakeboardCtx.fillStyle = "#283c01";
  snakeboardCtx.fillRect(foodX, foodY, 10, 10);
}

/**
 * Draw one snake part
 */
function drawSnakePart(snakePart) {
  // Set the colour of the snake part
  snakeboardCtx.fillStyle = snakeCol;
  // Draw a "filled" rectangle to represent the snake part at the coordinates
  snakeboardCtx.fillRect(snakePart.x, snakePart.y, 10, 10);
}

/**
 * Checks if snake has hit itself or any wall
 */
function hasGameEnded() {
  for (let i = 4; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true;
  }
  const hitLeftWall = snake[0].x < 0;
  const hitRightWall = snake[0].x > snakeboard.width - 10;
  const hitToptWall = snake[0].y < 0;
  const hitBottomWall = snake[0].y > snakeboard.height - 10;
  return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall;
}

/**
 * Handles Game end to check if score is high enough to trigger Modal
 */
function gameEnd() {
  if (hasGameEnded()) {
    //Enable scrolling when game is over
    document.body.style.overflow = "auto";
    // Check if the game has ended and score is greater than 0
    let lowestHighScore = highScores[highScores.length - 1];

    if (!lowestHighScore || score > lowestHighScore.score) {
      // Show modal
      gameOverModal.showModal();
    }
  }
}

/**
 * Handles the random location of the food
 */
function randomFood(min, max) {
  return Math.round((Math.random() * (max - min) + min) / 10) * 10;
}

/**
 * Handles the generation of food cells
 */
function genFood() {
  // Generate a random number the food x-coordinate
  foodX = randomFood(0, snakeboard.width - 10);
  // Generate a random number for the food y-coordinate
  foodY = randomFood(0, snakeboard.height - 10);
  // if the snake is on the food location pick a new spot
  snake.forEach(function hasSnakeEatenFood(part) {
    const hasEaten = part.x == foodX && part.y == foodY;
    if (hasEaten) genFood();
  });
}

/**
 * Add logic to handle direction changes based on the key code
 */
function changeDirection(event) {
  const keyPressed = event.keyCode;

  // Handle left direction
  if (keyPressed === leftKey) {
    // Handle right direction
  } else if (keyPressed === rightKey) {
    // Handle up direction
  } else if (keyPressed === upKey) {
    // Handle down direction
  } else if (keyPressed === downKey) {
  }

  // Prevent the snake from reversing
  if (changingDirection) return;
  changingDirection = true;

  const goingUp = dy === -10;
  const goingDown = dy === 10;
  const goingRight = dx === 10;
  const goingLeft = dx === -10;

  if (keyPressed === leftKey && !goingRight) {
    dx = -10;
    dy = 0;
  }
  if (keyPressed === upKey && !goingDown) {
    dx = 0;
    dy = -10;
  }
  if (keyPressed === rightKey && !goingLeft) {
    dx = 10;
    dy = 0;
  }
  if (keyPressed === downKey && !goingUp) {
    dx = 0;
    dy = 10;
  }
}

/**
 * Handles the snake movement and Eat Food to grow
 */
function moveSnake() {
  // Create the new Snake's head
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  // Add the new head to the beginning of snake body
  snake.unshift(head);
  const hasEatenFood = snake[0].x === foodX && snake[0].y === foodY;
  if (hasEatenFood) {
    // Increase score
    score += 1;
    // Display score on screen
    document.querySelector("#score").textContent = score
      .toString()
      .padStart(3, "0");
    // Generate new food location
    genFood();
  } else {
    // Remove the last part of snake body
    snake.pop();
  }
}

/**
 * controls the modal closing and passing player and and score to
 */
function gameOver() {
  gameOverModal.close();
  // Trim any leading/trailing whitespace and make Upper case
  playerName = playerNameInput.value.trim().toUpperCase();
  // If the player entered a name (not empty)
  if (playerName !== "") {
    // Display the updated high scores table
    updateHighScoresTable(playerName, score);
    console.log("New player High Score!");
  }
  playerNameInput.value = "";
}

function updateHighScoresTable(name, score) {
  highScores.push({ name, score });
  // Sort high scores
  highScores.sort((a, b) => b.score - a.score);
  // Remove excess entries beyond the defined limit
  if (highScores.length > maxHighScores) {
    highScores.pop();
  }

  // Get the Tbody element to variable
  const tbody = highScoresTable.querySelector("tbody");

  // Clear the table body
  tbody.innerHTML = "";

  // Display only the top maxHighScores entries
  const displayedHighScores = highScores.slice(0, maxHighScores);

  for (let i = 0; i < displayedHighScores.length; i++) {
    const row = tbody.insertRow();
    const rankCell = row.insertCell(0);
    const nameCell = row.insertCell(1);
    const scoreCell = row.insertCell(2);

    rankCell.innerHTML = i + 1;
    nameCell.innerHTML = displayedHighScores[i].name;
    scoreCell.innerHTML = displayedHighScores[i].score
      .toString()
      .padStart(3, "0");
  }
}
