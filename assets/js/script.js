
const board_border = '#9ddb0a';
const board_background ='#9ddb0a';
const snake_col = '#283c01';
// const snake_border = 'darkblue';

let snake = [
  {x: 150, y: 60},
  {x: 140, y: 60},
  {x: 130, y: 60},
  {x: 120, y: 60},
  {x: 110, y: 60}
]

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
const maxHighScores = 2;
// Initialize the game state
let gameStarted = false;


// Get the canvas element
const snakeboard = document.getElementById("snakeboard");
// Return a two dimensional drawing context
const snakeboard_ctx = snakeboard.getContext("2d");
// Get Play again button
const playAgain = document.querySelector("#playAgain")
// Get High Score button
const highScores = []
const highScoresTable = document.querySelector("#highScores")

// Event Listeners

// to track change direction
document.addEventListener("keydown", change_direction);
// to reset game
playAgain.addEventListener("click", startGame);
// Start game
// main();
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
  }
}

function initGame() {
  // Initialize game variables and setup game board
  changing_direction = false;
  updateHighScoresTable();
  //drawFood();
  drawSnake();
  //checkGameEnd();
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

//function to reset game on playAgain button
function resetGame() {
  // Reset game variables, e.g., score, snake position
  score = 0;
  snake = [
    {x: 150, y: 60},
    {x: 140, y: 60},
    {x: 130, y: 60},
    {x: 120, y: 60},
    {x: 110, y: 60}
  ];
  dx = 10;
  dy = 0;

  // Clear the game board
  clear_board();

  // Initialize the game (same as in initGame)
  initGame();
}

// draw a border around the canvas
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
  snake.forEach(drawSnakePart)
}

function drawFood() {
  snakeboard_ctx.fillStyle = '#283c01';
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
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true
  }
  const hitLeftWall = snake[0].x < 0;
  const hitRightWall = snake[0].x > snakeboard.width - 10;
  const hitToptWall = snake[0].y < 0;
  const hitBottomWall = snake[0].y > snakeboard.height - 10;
  return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
}

function checkGameEnd() {
  if (has_game_ended() && score > 0) { // Check if the game has ended and score is greater than 0
    let lowestHighScore = highScores[highScores.length - 1];

    if (!lowestHighScore || score > lowestHighScore.score) {
      const playerName = prompt("Enter your name:"); // Prompt for the player's name


      if (playerName !== null && playerName !== "") {
        // If the player entered a name (not canceled or empty)
        addHighScore(playerName, score);
  
        // Display the updated high scores table
        updateHighScoresTable();
      }
    }
    // Restart the game
    //resetGame();
  }
}

function random_food(min, max) {
  return Math.round((Math.random() * (max-min) + min) / 10) * 10;
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
  const LEFT_KEY = 37;
  const RIGHT_KEY = 39;
  const UP_KEY = 38;
  const DOWN_KEY = 40;
  
// Prevent the snake from reversing

  if (changing_direction) return;
  changing_direction = true;
  const keyPressed = event.keyCode;
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
  const head = {x: snake[0].x + dx, y: snake[0].y + dy};
  // Add the new head to the beginning of snake body
  snake.unshift(head);
  const has_eaten_food = snake[0].x === food_x && snake[0].y === food_y;
  if (has_eaten_food) {
    // Increase score
    score += 1;
    // Display score on screen
    document.getElementById('score').innerHTML = score;
    // Generate new food location
    gen_food();
  } else {
    // Remove the last part of snake body
    snake.pop();
  }
}

//function to add high scores in descending order
function addHighScore(name, score) {
  highScores.push({ name, score });

  // Sort high scores
  highScores.sort((a, b) => b.score - a.score);

  // Remove excess entries beyond the defined limit
  if (highScores.length > maxHighScores) {
    highScores.pop();
  }

  updateHighScoresTable();
}

  function updateHighScoresTable() {
    // Sort high scores
    highScores.sort((a, b) => b.score - a.score);
  
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
      scoreCell.innerHTML = displayedHighScores[i].score;
    }
  }