# Pokédle
This is Pokédle! This is a Wordle-inspired Pokemon guessing game in which you get hints about the cry, shape, type, and ability of the Pokemon you are trying to guess. 

#### Table of Contents
- [How to Play](#how-to-play)
- [Motivation](#motivation)

## How to Play
![image](https://github.com/user-attachments/assets/5c6d6cb0-0839-478a-9e34-41d8ee998eba)
When you first load the page, you get essential information about the pokemon you are trying to guess, such as the height, weight, and base stats of the pokemon. You also get to hear the Pokemon's cry. Each wrong guess will give you more information about the Pokemon. 

![image](https://github.com/user-attachments/assets/6e03e499-1c97-4252-b1ba-36bab665f29f)
After you guess, you will be given a color over your guess. 
* If it's green, you have won!
* If it's yellow, you are in the right generation
* If it's red, you are not in the right generation
  
![image](https://github.com/user-attachments/assets/a6b3ca63-8922-4cda-811a-74a006be2b2b)


## Motivation
This was a side project to get me involved with Svelte and Tailwind. I have a lot of experience with React and Scss, and wanted to try out Svelte to get me a better handle on overall web development. There were a few findings about these technologies:

### Svelte
The structure of svelte gave me a slight learning curve, but I grew to like the organization of the project. After delving into the docs a little bit more, I now want to try server side rendering since it seems to be just as easy as a client side rendering (at least on the frontend side). I know that this app really isn't that large (it really runs on one file that probably should be separated a bit), but this app is fast. My next big feature I want to implement is using Svelte's built in animations and transitions, since everything is just fast on the UI. Everything is also just simple. The $state rune is way less code than the useState in React. 

## Tailwind
When I started using Tailwind, I thought that it was kind of pointless, since I was so used to using scss. It's so easy and more readable to keep classes seperate from your html! Then I started using it more, and I get the appeal. It's very simple, you just add whatever class to your html class prop and that's that. I will say that I believe on bigger projects with more vivid css, I could see where tailwind classes could take up a few lines, and that's what makes it a little less appealing. Even on some of my code, the classes start to get bigger and bigger, and is just less readable.  

There's a lot more to be done with both of these technologies, and I hope to try to play around with it in this app, but if not I might just make another side project. This one is definitely not done though! It has a lot of work left. Thanks for reading if you made it this far. I didn't mean to turn it into a blog but there you go. 
