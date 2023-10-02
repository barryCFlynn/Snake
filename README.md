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

### Challenges Faced
- Understanding Game Mechanics: Adapting the Snake game from a tutorial presented a challenge in grasping its core mechanics. This involved comprehending how movement, growth, and collision detection worked within the game's logic.

- Implementing High Score Table: Creating a functional high score table within the game loop posed a significant challenge. This required integrating the table seamlessly with the game's mechanics and ensuring it updated accurately.

- Designing the Modal: Developing the modal for player input and high score display within the game loop presented challenges. Ensuring its proper functionality and integration into the game was a key aspect of the project.

- Mobile Compatibility: Making the game mobile-friendly required creating on-screen touch controls that worked harmoniously with the keyboard inputs. Adjusting the spacing and responsiveness of on-screen arrow keys was an iterative process.

## Testing 

<details>
<summary>Lighthouse  -  PASS</summary>

* Mobile

    <img src="assets\images\README-images\lighthouse_mobile.png" alt="Description" width="550" height="150">

* Desktop

    <img src="assets\images\README-images\lighthouse_desktop.png" alt="Description" width="550" height="150">
</details>

<details>
<summary>W3C Markup Validtor - PASS</summary>
    <img src="assets\images\README-images\html_validate.png" alt="Description">        
</details>

<details>
<summary>W3C CSS Validator - PASS</summary>
<img src="assets\images\README-images\css_validate.png" alt="Description">        
</details>

<detailS>
<summary>Responsive - PASS</summary>

* Resolutions checked

    - 320x568: Used by small smartphones or devices in portrait mode.
    - 375x667: Used by smartphones like iPhone 6/7/8 in portrait mode.
    - 360x640: Common resolution for many budget and mid-range smartphones.
    - 414x896: Found on various iPhone models like iPhone X, XS, 11 Pro, and 12 Pro.
    - 768x1024: Common resolution for tablets in portrait mode, such as the iPad.
    - 1024x768: Another common resolution for tablets, especially in landscape mode.
    - 1280x800: Common resolution for smaller laptops and tablets.
    - 1366x768: Common for laptops and desktop monitors.
    - 1920x1080: Full HD resolution, used on larger monitors, laptops, and some mobile   devices.
    
</details>

### Manual Testing

- The website was tested on Google Chrome and Microsoft Edge.
- The website was viewed on various monitors and resolutions and on a Pixel 7 mobile phone.
- Vigorous testing was done on links to ensure navigation between pages work correctly.
- Chrome Dev Tools was used to test how the site looks on various screen sizes.

### Bug Fixes and Improvements
- High Score Table Display: Fixed an issue where high score table headers were not displaying. Adjusted the code to target the table body only, preserving the headers.

- Preventing Scrolling: Resolved an issue with unwanted scrolling on both desktop and mobile devices during gameplay. Implemented measures to disable scrolling while the game is running to prevent interference.

- Modal and High Scores: Addressed a bug where the modal was not updating the high scores table correctly. Reordered code and introduced a dedicated function to ensure accurate updating.



### Unfixed Bugs

You will need to mention unfixed bugs and why they were not fixed. This section should include shortcomings of the frameworks or technologies used. Although time can be a big variable to consider, paucity of time and difficulty understanding implementation is not a valid reason to leave bugs unfixed. 

## Deployment and local development

### GitHub Pages

GitHub Pages used to deploy live version of the website.
1. Log in to GitHub and locate [GitHub Repository Luxe TimePieces](https://barrycflynn.github.io/Luxe_TimePieces/)
2. At the top of the Repository(not the main navigation) locate "Settings" button on the menu.
3. Scroll down the Settings page until you locate "GitHub Pages".
4. Under "Source", click the dropdown menu "None" and select "Main" and click "Save".
5. The page will automatically refresh.
6. Scroll back to locate the now-published site [link](https://barrycflynn.github.io/Luxe_TimePieces/) in the "GitHub Pages" section.


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