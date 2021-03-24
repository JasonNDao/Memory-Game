# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Jason Dao**

Time spent: **4** hours spent in total

Link to project:  [Project](https://glitch.com/edit/#!/abalone-inquisitive-sloth)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
### Required Instructions
##### Win Part 1
![](https://i.imgur.com/X4oE7K7.gif)
##### Win Part 2
![](https://i.imgur.com/Tlv4BcP.gif)
##### Loss
![](https://i.imgur.com/tKOmBGw.gif)

### Optional Features
##### Part 1 of Win
![](https://i.imgur.com/n0aq7kP.gif)
##### Part 2 of Win 
![](https://i.imgur.com/dZcBUcc.gif)
##### Loss with Strikes 
![](https://i.imgur.com/Db8IVVy.gif)



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

- [Apple image](https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.clker.com%2F%2Fcliparts%2F3%2Fm%2Fv%2FY%2FE%2FV%2Fsmall-red-apple-hi.png&imgrefurl=https%3A%2F%2Fwww.clker.com%2Fclipart-small-red-apple.html&tbnid=inojCfBkcFIoRM&vet=12ahUKEwiSi5Dz7sfvAhVjl-AKHWBLCRoQMygDegUIARDXAQ..i&docid=tjFg4UpzIWu8yM&w=576&h=595&q=small%20image&ved=2ahUKEwiSi5Dz7sfvAhVjl-AKHWBLCRoQMygDegUIARDXAQ)
- [For text-align](https://www.w3schools.com/cssref/pr_text_text-align.ASP)
- [Web audio](https://modernweb.com/creating-sound-with-the-web-audio-api-and-oscillators/)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
- A challenge I had was understanding what the audio was doing. Although the code and the explanation were given, I did not understand what every method was doing, and had trouble following what was going on. I had never made coded audio noises in my web applications. For example, the method o.createOscillator confused me because I did not know what that is. I thought the feature was cool, but I had no idea what to do with it. To overcome my problem, I looked up a basic guide to how they worked. After looking at articles explaining what it did, I got a hint but I still did not fully understand what it was doing to the program. So I tested out the feature by testing out what the frequencies were doing and what the setTargetAtTime method was doing because I was curious. I learned that it makes audio noises with different frequencies and then I applied what I learned to the optional features version of the program and tested out the noises the different numbers made. I learned that the lower numbers tended to have a lower frequency while a higher number had higher frequency and I learned it using trial and error and later applied what I learned.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
- After my submission, I am curious about if there are ways to add gifs to the buttons after clicking them and if it uses the img tag as well. In addition, I am curious about if there are easier ways to make the 8 buttons because it took time to go through each button trying to edit the features. I am wondering if there is like a method or framework that can go through CSS and edit out what each of the different color buttons will have instead of individually going through and typing it. In addition, I am curious about what types of applications will be coded at Codepath. I am also curious about how CSS templates are designed because for website development, choosing the colors and design is my weakness and I was wondering how this is implemented.
4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
- If I had more time to work on the project, I would organize the buttons into grids and use the CSS grid function. In addition, I would make a pop up to alert the wins or strikes instead of using the alert feature because the alert feature was long since it popped up the entire name of the Glitch URL. In addition, I would try to add more features to the game like adding different levels. Level 1 would be like 3 buttons with a slower speed (1 second for each button to light up), while the final levels would be very fast with 20 buttons (.5 seconds for each button to light up). I would also try to edit the background so it looks better instead of just a solid color. In addition, I would also like to add an unlimited mode to see what a person's best score would be. There would be 10 buttons with each round having 1 more button to choose. For example, round 1, the pattern would have only 1 number. In round 2, another one is added. The final score would be the number of rounds people can get to. For example, if the player can memorize 40 patterns using the 10 buttons, their final score would be 40, etc.



## License

    Copyright [Jason Dao]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.