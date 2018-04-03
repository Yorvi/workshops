// 1 - Reverse a String
// Write a JavaScript function that takes in a string and reverses it. A for loop would be handy for this!

function test(input){
    let output = ""
    for(var i=input.length-1;i>=0;i--){
        output += input[i]
    }
    return output
    }
    
    test("")
    // Omar helped me.
    // REVIEW THIS AND MAKE SURE YOU UNDERSTAND IT!


// 2 - FizzBuzz 
// Write a program that console.logs the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five console.log “Buzz”. For numbers which are multiples of both three and five console.log “FizzBuzz”.




// 3 - Pig Latin
// Pig Latin is a game of alterations played on the English language. To create the Pig Latin form of an English word the initial consonant sound is transposed to the end of the word and an ay is affixed (Ex.: "banana" would yield "anana-bay"). Check out Wikipedia for more information on rules - try to get as close as possible. 
// Compose a javascript function that takes in a regular sentence or paragraph and returns the Pig Latin equivalent. 
