let randomNumber1 = Math.ceil(Math.random() * 6)
// console.log(randomNumber1);

let randomDiceImg = "dice" + randomNumber1 + ".png";
// console.log(randomDiceImg);

let randomImageSource = "images/" + randomDiceImg;
console.log(randomImageSource);

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


// another way of doing the other dice without concatination
// let arrayOfImages = ['images/dice1.png',
//     'images/dice2.png',
//     'images/dice3.png',
//     'images/dice4.png',
//     'images/dice5.png',
//     'images/dice6.png'];

// let random2 = Math.floor(Math.random() * arrayOfImages.length);
// let image2 = document.querySelector('.img2').src = arrayOfImages[random2];


let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 1 wins'
} else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 2 wins'
} else {
    document.querySelector('h1').innerHTML = 'DRAW'
}