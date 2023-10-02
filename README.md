# Snake

I chose to build a Snake game for my JavaScript project due to its nostalgic appeal, reminiscent of classic arcade gaming. Additionally, it provided a valuable opportunity to explore complex game mechanics and hone my coding skills while delivering a fun and engaging user experience.

 In 1997, Nokia put Snake on a phone called the Nokia 6110. Yes, the phone your father used for work purposes and you did, for playing Snake. This was the beginning of Snake in your pocket, the game almost went viral, signalling a new era in mobile phone gaming.

What started in 1997, reached viral status in the year 2000, with the launch of the Nokia 3310. One of the best selling mobile phones of all time, the Nokia sold 126 million units of this device in that year. Residing within the device, was Snake, the game that quickly became a household name in India and the world alike.

https://www.digit.in/features/mobile-phones/a-brief-history-of-snake-33913.html

Link to My Site: https://barrycflynn.github.io/Snake/


![Am I Responsive](assets/images/README-images/amIResponsive_Snake.png)

## Features 

- Classic Gameplay: Enjoy the timeless fun of guiding the snake to eat food and grow longer.
- High Scores: Compete with friends and aim for the top spot on the high scores table.
- Responsive Design: Play on various devices, as the game adapts to different screen sizes.

### Existing Features

- Classic Snake Gameplay: Experience the nostalgia of the original Snake game, where you control a snake to collect food and grow longer. Avoid collisions with walls and your own tail to stay in the game.

<img src="assets\images\README-images\snake_board.png" alt="Picture of Snake Play board">

- High Scores: Keep track of your best scores and compete with yourself or others to achieve the highest score possible. The game maintains a high scores table to showcase your achievements.

<img src="assets\images\README-images\high_scores.png" alt="Picture of High Scores table">

Responsive Design: Play the game seamlessly on a variety of devices, including desktops, laptops, tablets, and mobile phones. The responsive design ensures an enjoyable gaming experience regardless of your screen size.

- Modal Dialog: When you achieve a high score, a modal dialog appears, allowing you to enter your name and save your score. This feature adds a personal touch to the game and motivates players to aim for the top of the leaderboard.

<img src="assets\images\README-images\modal.png" alt="Picture of Modal">

Mobile-Friendly Controls: Navigate the snake easily on mobile devices using on-screen buttons for directional control, enhancing the game's accessibility and playability on touchscreens, the buttons will appear at screen resolution below 1024 px.

<img src="assets\images\README-images\onscreen_arrows.png" alt="Picture of on screen arrows">

### Features Left to Implement

- Persistent High Score Table: Implement a feature to store high scores in browser storage or on a server, ensuring that the high score table retains player achievements even after closing the game. This adds a sense of competition and motivation for players to improve their scores over time.

- Mobile Device Vibration: Enhance the mobile gaming experience by adding haptic feedback (vibration) when players press arrow buttons to control the snake's direction. This tactile feedback provides a satisfying and responsive feel to the game, making it more engaging and enjoyable on touch devices.

### Challenges

 - The Snake game was taken from a guide I used while prepping for this course, there was a significant challenge in understanding the mechanincs of how the game ran. And through modifying the code to make it fit in with the project theme I learned a lot
 - Creating the High Score table, and functions make it work in the game loop
 - creating the modal and functions to make it work in the game loop
 - 
 - the on screen arrow keys, making sure the spacing was good enough took a lot of testing
 
 ### Bug Fixes

 - High score table headers not showing, original code was set to overright them. Edited code to target Tbody only leaving headers alone
 - Working out how to disble scrolling on desktop and mobile while the game was running to prevent interference
 - 



## Testing 

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your project’s features and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.


### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-running-2.0%252Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css)

### Unfixed Bugs

You will need to mention unfixed bugs and why they were not fixed. This section should include shortcomings of the frameworks or technologies used. Although time can be a big variable to consider, paucity of time and difficulty understanding implementation is not a valid reason to leave bugs unfixed. 

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://code-institute-org.github.io/love-running-2.0/index.html 


## Credits 

In this section you need to reference where you got your content, media and extra help from. It is common practice to use code from other repositories and tutorials, however, it is important to be very specific about these sources to avoid plagiarism. 

You can break the credits section up into Content and Media, depending on what you have included in your project. 

### Content 

- The text for the Home page was taken from Wikipedia Article A
- Instructions on how to implement form validation on the Sign Up page was taken from [Specific YouTube Tutorial](https://www.youtube.com/)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media

- The photos used on the home and sign up page are from This Open Source site
- The images used for the gallery page were taken from this other open source site


Congratulations on completing your Readme, you have made another big stride in the direction of being a developer! 

## Other General Project Advice

Below you will find a couple of extra tips that may be helpful when completing your project. Remember that each of these projects will become part of your final portfolio so it’s important to allow enough time to showcase your best work! 

- One of the most basic elements of keeping a healthy commit history is with the commit message. When getting started with your project, read through [this article](https://chris.beams.io/posts/git-commit/) by Chris Beams on How to Write  a Git Commit Message 
  - Make sure to keep the messages in the imperative mood 

- When naming the files in your project directory, make sure to consider meaningful naming of files, point to specific names and sections of content.
  - For example, instead of naming an image used ‘image1.png’ consider naming it ‘landing_page_img.png’. This will ensure that there are clear file paths kept. 

- Do some extra research on good and bad coding practices, there are a handful of useful articles to read, consider reviewing the following list when getting started:
  - [Writing Your Best Code](https://learn.shayhowe.com/html-css/writing-your-best-code/)
  - [HTML & CSS Coding Best Practices](https://medium.com/@inceptiondj.info/html-css-coding-best-practice-fadb9870a00f)
  - [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#General)

Getting started with your Portfolio Projects can be daunting, planning your project can make it a lot easier to tackle, take small steps to reach the final outcome and enjoy the process! 