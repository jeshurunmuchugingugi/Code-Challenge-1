  // Challenge 1: Chai Bora Ingredient Calculator ☕

// Object that stores the amount of each ingredient needed for one cup of chai
let ingredientsACup = {
  water:200,           // 200 ml of water per cup
  milk:50,            // 50 ml of milk per cup
  teaLeaves:1,       // 1 tablespoon of tea leaves per cup
  sugarTeaSpoon:2   // 2 teaspoons of sugar per cup
}

// Prompt the user to enter how many cups of chai they want
let numberOfChaiCups = parseInt(prompt("How many chai cups do you want?"));

// Hoisting the function to calculate and display required ingredients using numberOfChaiCups as argument
calculateChaiIngredients(numberOfChaiCups);


// Function that calculates and displays the total ingredients needed
function calculateChaiIngredients(numberOfChaiCups){
  if(numberOfChaiCups >= 1){ // conditional statement to check if numberOfChaiCups is >= to one
    // Calculate total ingredients and display the result using console.log()
  console.log(`To make ${numberOfChaiCups} cups of Kenyan Chai, you will need:\n
             Water: ${ingredientsACup.water * numberOfChaiCups} ml
             Milk:  ${ingredientsACup.milk * numberOfChaiCups} ml
             Tea Leaves (Majani): ${ingredientsACup.teaLeaves * numberOfChaiCups} tablespoons
             Sugar (Sukari): ${ingredientsACup.sugarTeaSpoon * numberOfChaiCups} teaspoons \n
             Enjoy your Chai Bora!`)
  } else {
    // Handle invalid input
      console.log("Please enter a valid number of cups.");
  }
}



