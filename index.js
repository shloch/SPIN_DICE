/*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it wold in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.

event listeners, Math.random()

*/

// Write your code here 👇
let randomBlock = document.querySelector(".random-show")
const randomDisplay = () => {
    let ranNum = Math.floor(Math.random() * 6 + 1);
    randomChild = document.querySelector('.dice-' + ranNum)
    randomBlock.innerHTML = randomChild.innerHTML;
}

randomDisplay()
randomBlock.onclick = () => {
    randomDisplay()
}

