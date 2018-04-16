# Memory-game
[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)   [![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)  [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
## Project Title
The Memory Game Project is made from HTML, CSS,and JavaScript. This is a memory game that requires you to have a high memory capacity, in order to flip through the same pairs in the shortest possible time and spend the least amount of turns.


## Description
The game board consists of sixteen cards which are arranged randomly in the board and they are divided into 8 different pairs. The game is very simple, in each round you flip the two cards and find two identical cards until the entire board is overturned.

![Matching Game](https://camo.githubusercontent.com/62bfca8e77f922085615c2304f324f448d691c5c/68747470733a2f2f64313768323774366835313561352e636c6f756466726f6e742e6e65742f746f706865722f323031372f46656272756172792f35383962623937325f73637265656e2d73686f742d323031372d30322d30372d61742d332e30332e31352d706d2f73637265656e2d73686f742d323031372d30322d30372d61742d332e30332e31352d706d2e706e67)

## How to play  


1. When you start to flip the first card, the time and moves begin to count.
2. The player flips the first card by clicking any cards on the table
3. If player flip the same two cards, the card will change to green and keep the picture.
4. If player flip cards not match , both cards are flipped face down (black).

## Picture in game
1. ### Matched cards.
    - ![capture](https://user-images.githubusercontent.com/37636748/38788205-19a982f6-40f8-11e8-8974-5ed9267dd51a.PNG).
2. ### Reset button (yellow highlight).
    - 
3. ### Moves count (yellow highlight).
    - 
4. ### Victory.
    - 
## Issue
1. Player are able to click 3 cards at once . However, the system automatically compares the two cards that are opened first. I also fixed this by using setTimeOut() function and reducing the timeout when opening the card.
2. There is still a problem with my game that players can pick up the overturned items and cause game errors.
## Author
* HO HOAN HAO

