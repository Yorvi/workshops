// Number 1 - A running total. 
// Using a for loop, compute the sum of the numbers in the array named prices; storing the result in the sum variable.

var prices = [33, 26, 99, 120, 12, 45];
var sum = 0

for(var i in prices) {
  sum += prices[i];
}

console.log("The sum is: ", sum);

//=====================================================================================================================================================================================================================================================
//=====================================================================================================================================================================================================================================================

// Number 2 - 99 Crows on the Wall
//Write a program in a new Repl.it that outputs all 100 lines of the classic song: 99 Crows on the Wall. You shouldn’t have to write 300 lines of JavaScript for this program at all - this is the perfect chance to use a for loop or while loop!


//originally inspired by stack overflow
for(var i=99; i>1; i= i-1){ 
    // ^ set the conditions to var i to start at 99, then stop at 1, then set the reduction factor at i will now = i-1.
      
    if(i<100){
    // ^ if i is less than 100 then it show follow these conditions below.
    
      console.log(i + " number of crows on the wall.")
      console.log(i + " crows.")
      console.log("1 fell down and became a wight.")
    // ^ this will print out the sentences stated with the current i
      
      console.log(i-1 + " crows on the wall." );
    //PROBLEM: last i variable doesnt reduce itself from the other variables in the sentence 4:35pm. <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    //FIXED: @ 5:14pm. >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    
    // ^ this will decrease the original i variable by 1 so the next cycle will start at 1 less than the previous printing. 
    
      console.log("");
    // ^ acts as a <br>, to clean up my code.
      }
      
    }
    if(i=1){
    // ^ if i finally = 1 then the print will now follow different conditions below.
    
      console.log(i + " crow on the wall.")
      console.log(i + " single crow.")
      console.log("It fell down and became a wight.")
      console.log("There's no one left to defend Westeros now.");
    // ^ this will print out the final conditions that was set to end this loop.
    
    }

//=====================================================================================================================================================================================================================================================
//=====================================================================================================================================================================================================================================================
