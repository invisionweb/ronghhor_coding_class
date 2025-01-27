console.log("Testing myscript.js")

//let myName = prompt("What is your name?")
//alert("Hello " + myName + " Length of your name is " + myName.length)

let randomNumber = Math.random()
console.log(randomNumber)

// generate random number between 1 and 6
let diceRoll = Math.floor(Math.random() * 6) + 1
console.log("diceRoll " + diceRoll)

let getNumber = parseInt(prompt("Enter a number"))

if(diceRoll === getNumber){
    console.log("You guessed the right number")
    document.write("You guessed the right number")
}
else{
    console.log("You guessed the wrong number")
    document.write("You guessed the wrong number")
}

/* if(diceRoll === 1 || diceRoll === 2){
    //console.log("You rolled a 1 or 2")
}
else{

} */