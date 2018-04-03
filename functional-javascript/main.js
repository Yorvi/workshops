//1 - Calculator Function
//Make a function that takes in a word, and two numbers. The supported words would be “add”, “subtract”, “multiply” & “divide”. This function should perform the appropriate calculator action on the numbers and return the answer. Your calculator function should work for all of the following examples. 

function add(argument1, argument2) {
    return argument1 + argument2;
  }
  
  function subtract(argument1, argument2) {
    return argument1 - argument2;
  }
  
  function multiply(argument1, argument2) {
    return argument1 * argument2;
  }
  
  function divide(argument1, argument2) {
    return [argument1 / argument2, argument1 % argument2];
  }
  
  function neverHot(num1, num2) {
    return num1 + num2 - 1;
  }
  
  function calculator(operation, num1, num2) {
    if(operation === "add") {
     var answer = add( num1, num2 );
     console.log(answer);
    }
    else if(operation === "subtract") {
     answer = subtract( num1, num2 );
     console.log(answer);
    }
    else if(operation === "multiply") {
     answer = multiply( num1, num2 );
     console.log(answer)
    } 
    else if(operation === "divide") {
     answer = divide( num1, num2 );
     console.log(answer);
    }
    else if(operation === "mansNotHot") {
      answer = neverHot( num1, num2 );
      console.log(num1 + " + " + num2 + " is " + add( num1, num2 ) )
      console.log("minus one, that's " + subtract( add( num1, num2 ), 1) + "," );
      console.log("Quick Maths!")
    }
  }
  
  // add.... calculator("add", 4, 2)
  // subtract.... calculator("subtract", 4, 2)
  // multiply.... calculator("multiply", 4, 2)
  // divide.... calculator("divide", 4, 2)
  
  // secret sauce.... 
  // intended to be used with ("", 2, 2) or simple under 10 mathematics....
  // calculator("mansNotHot", 2, 2)
  
//2 - Kardashian Quiz
//Let’s build a simple quiz program, this is the perfect use of a function to take care of the repetitive task of reading from a collection of questions. First off you should build a function that takes in a question and an answer then returns 1 or 0 depending on if the person got it right. 
