


number = prompt('Enter a number between 1 to 6')
c=0
isnotnum= isNaN(number)
while (c!= 1){
    if(number === null){
        alert('Okay Bye')
        c++
    }
    else if(Number(number) > 6 || Number(number)=== 0 || isnotnum === true){
        alert('You did a wrong thing')
        number = prompt('Enter a number between 1 to 6')
        
    }
    else {
        randomNumber1 = Math.floor(number)
        c++
    }
}

var randomDiceImage = 'dice' + randomNumber1 + ".png";

var randomImageSource = 'images/' + randomDiceImage

var image1 = document.querySelectorAll('img')[0]

image1.setAttribute('src', randomImageSource)


var randomNumber2 = Math.floor(Math.random()*6) + 1
console.log(randomNumber2)

var randomDiceImage2 = 'dice' + randomNumber2 + ".png";

var randomImageSource2 = 'images/' + randomDiceImage2

var image2 = document.querySelectorAll('img')[1]

image2.setAttribute('src', randomImageSource2)

var display = document.querySelector('.show')
if(randomNumber1 == randomNumber2){
    display.innerHTML = ' It is a draw.'
}else if(randomNumber1 > randomNumber2){
    display.innerHTML = 'You win'
}else{
    display.innerHTML = 'Player 2 wins'
}