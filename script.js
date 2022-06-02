isGenerated = false

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*\?/" 

let passwordLength = 0  //default password length

const passwordChars = Array.from(chars)     //Used to split the chars String into a characters Array

console.log(passwordChars.length)   

let firstPassword = document.getElementById("first-Password")     
let secondPassword = document.getElementById("second-Password")
let thirdPassword = document.getElementById("third-Password")
let fourthPassword = document.getElementById("fourth-Password")

function generatePass () {
    passwordLength = document.getElementById("userInput").value   //set password length to user input
    
    if (passwordLength > 1) {
        console.log(passwordLength)
    } else {
        passwordLength = 12     //default password length
    }
    
    if (isGenerated === false) {
        firstPassword.textContent = ""
        secondPassword.textContent = ""
        thirdPassword.textContent = ""
        fourthPassword.textContent = ""
        for (let i = 0; i < passwordLength; i++) {
        firstPassword.textContent += passwordChars[ Math.floor( Math.random() * 71 ) ]
        secondPassword.textContent += passwordChars[ Math.floor( Math.random() * 71 ) ]
        thirdPassword.textContent += passwordChars[ Math.floor( Math.random() * 71 ) ]
        fourthPassword.textContent += passwordChars[ Math.floor( Math.random() * 71 ) ]
        }
        startGenerate()
    } else {
        firstPassword.textContent = ""
        secondPassword.textContent = ""
        thirdPassword.textContent = ""
        fourthPassword.textContent = ""
        for (let i = 0; i < passwordLength; i++) {
        firstPassword.textContent += passwordChars[ Math.floor( Math.random() * 71 ) ]
        secondPassword.textContent += passwordChars[ Math.floor( Math.random() * 71 ) ]
        thirdPassword.textContent += passwordChars[ Math.floor( Math.random() * 71 ) ]
        fourthPassword.textContent += passwordChars[ Math.floor( Math.random() * 71 ) ]
        } 
    } 
}

function startGenerate () {
    isGenerated = true
}