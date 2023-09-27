const board_border = "#9ddb0a";
const board_background = "#9ddb0a";
const snake_col = "#283c01";
// const snake_border = 'darkblue';

let snake = [
  { x: 150, y: 60 },
  { x: 140, y: 60 },
  { x: 130, y: 60 },
  { x: 120, y: 60 },
  { x: 110, y: 60 },
];

//GLOBAL VARIABLES
let score = 0;
// True if changing direction
let changing_direction = false;
// Declaring food coordinate
let food_x;
let food_y;
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
const snakeboard_ctx = snakeboard.getContext("2d");
// Get Play button
const play = document.querySelector("#play");
// Get High Score button
const highScores = [
  { name: "BAZ", score: "025" },
  { name: "LOG", score: "013" },
  { name: "EVA", score: "008" },
  { name: "ANNE", score: "005" },
  { name: "FRED", score: "001" },
];
const highScoresTable = document.querySelector("#highScores");

// for managing the modal High Scores
const gameOverModal = document.querySelector("#gameOverModal");
const closeModal = document.querySelector("#closeModal");
const playerNameInput = document.querySelector("#playerName");


// for change direction arrow keys
const LEFT_KEY = 37;
const RIGHT_KEY = 39;
const UP_KEY = 38;
const DOWN_KEY = 40;

// for change direction arrow buttons
const btnLeft = document.querySelector("#btnLeft");
const btnRight = document.querySelector("#btnRight");
const btnUp = document.querySelector("#btnUp");
const btnDown = document.querySelector("#btnDown");


// EVENT LISTENERS

// to track change direction
document.addEventListener("keydown", change_direction);

// to reset game
play.addEventListener("click", startGame);

// for change direction button event listeners
btnLeft.addEventListener("click", () => change_direction({ keyCode: LEFT_KEY }));
btnRight.addEventListener("click", () => change_direction({ keyCode: RIGHT_KEY }));
btnUp.addEventListener("click", () => change_direction({ keyCode: UP_KEY }));
btnDown.addEventListener("click", () => change_direction({ keyCode: DOWN_KEY }));

//close modal even listener
closeModal.addEventListener("click", gameOver)




//FUNCTIONS
// initialise game
initGame();

gen_food();

function startGame() {
  if (!gameStarted) {
    // Reset game state
    resetGame();
    initGame();
    gameStarted = true; // Set the game as started

    // Start the game loop
    main();
    console.log("startGame has run");
  }
}

function initGame() {
  // Initialize game variables and setup game board
  changing_direction = false;
  updateHighScoresTable();
  //drawFood();
  drawSnake();
  //checkGameEnd();
  console.log("initGame has run");
}

// game loop function
function main() {
  changing_direction = false;
  clearTimeout(gameLoopTimeout); // Clear existing timeout

  gameLoopTimeout = setTimeout(function onTick() {
    clear_board();
    drawFood();
    move_snake();
    drawSnake();
    checkGameEnd();

    if (!has_game_ended()) {
      main(); // Continue the game loop if the game hasn't ended
    } else {
      gameStarted = false; // Reset gameStarted when the game ends
    }
  }, 100);
}

//function to reset game on play button
function resetGame() {
  // Reset game variables, e.g., score, snake position
  score = 0;
  snake = [
    { x: 150, y: 60 },
    { x: 140, y: 60 },
    { x: 130, y: 60 },
    { x: 120, y: 60 },
    { x: 110, y: 60 },
  ];
  dx = 10;
  dy = 0;

  // Clear the game board
  //clear_board();
  // Clear Score
  document.querySelector("#score").textContent = "000";
  // Initialize the game (same as in initGame)
  //initGame();
  console.log("resetGame has run");
}

// constantly draw the board to remove old snake 
function clear_board() {
  //  Select the colour to fill the drawing
  snakeboard_ctx.fillStyle = board_background;
  //  Select the colour for the border of the canvas
  snakeboard_ctx.strokestyle = board_border;
  // Draw a "filled" rectangle to cover the entire canvas
  snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
  // Draw a "border" around the entire canvas
  snakeboard_ctx.strokeRect(0, 0, snakeboard.width, snakeboard.height);
}

// Draw the snake on the canvas
function drawSnake() {
  // Draw each part
  snake.forEach(drawSnakePart);
}

function drawFood() {
  snakeboard_ctx.fillStyle = "#283c01";
  //snakeboard_ctx.strokestyle = '#283c01';
  snakeboard_ctx.fillRect(food_x, food_y, 10, 10);
  //snakeboard_ctx.strokeRect(food_x, food_y, 10, 10);
}

// Draw one snake part
function drawSnakePart(snakePart) {
  // Set the colour of the snake part
  snakeboard_ctx.fillStyle = snake_col;
  // Set the border colour of the snake part
  //   snakeboard_ctx.strokestyle = snake_border;
  // Draw a "filled" rectangle to represent the snake part at the coordinates
  // the part is located
  snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  // Draw a border around the snake part
  //   snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function has_game_ended() {
  for (let i = 4; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true;
  }
  const hitLeftWall = snake[0].x < 0;
  const hitRightWall = snake[0].x > snakeboard.width - 10;
  const hitToptWall = snake[0].y < 0;
  const hitBottomWall = snake[0].y > snakeboard.height - 10;
  return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall;
}


function checkGameEnd() {
  if (has_game_ended() && score > 0) {
    // Check if the game has ended and score is greater than 0
    
    

    let lowestHighScore = highScores[highScores.length - 1];

    if (!lowestHighScore || score > lowestHighScore.score) {
      gameOverModal.showModal(); // Show modal

      
    }
  }
}

function random_food(min, max) {
  return Math.round((Math.random() * (max - min) + min) / 10) * 10;
}

function gen_food() {
  // Generate a random number the food x-coordinate
  food_x = random_food(0, snakeboard.width - 10);
  // Generate a random number for the food y-coordinate
  food_y = random_food(0, snakeboard.height - 10);
  // if the new food location is where the snake currently is, generate a new food location
  snake.forEach(function has_snake_eaten_food(part) {
    const has_eaten = part.x == food_x && part.y == food_y;
    if (has_eaten) gen_food();
  });
}

function change_direction(event) {
  const keyPressed = event.keyCode;

// Prevent default behavior for arrow keys
if ([LEFT_KEY, RIGHT_KEY, UP_KEY, DOWN_KEY].includes(keyPressed)) {
  event.preventDefault();
}
// Add logic to handle direction changes based on the key code
if (keyPressed === LEFT_KEY) {
  // Handle left direction
  // Set dx and dy accordingly
} else if (keyPressed === RIGHT_KEY) {
  // Handle right direction
  // Set dx and dy accordingly
} else if (keyPressed === UP_KEY) {
  // Handle up direction
  // Set dx and dy accordingly
} else if (keyPressed === DOWN_KEY) {
  // Handle down direction
  // Set dx and dy accordingly
}


  // Prevent the snake from reversing

  if (changing_direction) return;
  changing_direction = true;
  //const keyPressed = event.keyCode;
  const goingUp = dy === -10;
  const goingDown = dy === 10;
  const goingRight = dx === 10;
  const goingLeft = dx === -10;
  if (keyPressed === LEFT_KEY && !goingRight) {
    dx = -10;
    dy = 0;
  }
  if (keyPressed === UP_KEY && !goingDown) {
    dx = 0;
    dy = -10;
  }
  if (keyPressed === RIGHT_KEY && !goingLeft) {
    dx = 10;
    dy = 0;
  }
  if (keyPressed === DOWN_KEY && !goingUp) {
    dx = 0;
    dy = 10;
  }
}

function move_snake() {
  // Create the new Snake's head
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  // Add the new head to the beginning of snake body
  snake.unshift(head);
  const has_eaten_food = snake[0].x === food_x && snake[0].y === food_y;
  if (has_eaten_food) {
    // Increase score
    score += 1;
    //increaseScore();
    // Display score on screen
    document.querySelector('#score').textContent = score.toString().padStart(3, '0');
    // Generate new food location
    gen_food();
  } else {
    // Remove the last part of snake body
    snake.pop();
  }
}

/**
 * controls the modal closing and passing player and and score to
 */
function gameOver () {
  gameOverModal.close();
  playerName = playerNameInput.value.trim().toUpperCase(); // Trim any leading/trailing whitespace and make Upper case

  if (playerName !== "") { // If the player entered a name (not empty)
    
    // Display the updated high scores table
    updateHighScoresTable(playerName, score);
    console.log("New player High Score!");
  }
  
  playerNameInput.value = "";
};


function updateHighScoresTable(name, score) {
  highScores.push({ name, score });
  // Sort high scores
  highScores.sort((a, b) => b.score - a.score);

  // Remove excess entries beyond the defined limit
  if (highScores.length > maxHighScores) {
  highScores.pop();
  }

  // Clear the table
  highScoresTable.innerHTML = "";

  // Display only the top 'maxHighScores' entries
  const displayedHighScores = highScores.slice(0, maxHighScores);

  for (let i = 0; i < displayedHighScores.length; i++) {
    const row = highScoresTable.insertRow();
    const rankCell = row.insertCell(0);
    const nameCell = row.insertCell(1);
    const scoreCell = row.insertCell(2);

    rankCell.innerHTML = i + 1;
    nameCell.innerHTML = displayedHighScores[i].name;
    scoreCell.innerHTML = displayedHighScores[i].score.toString().padStart(3,'0');
  }
}


