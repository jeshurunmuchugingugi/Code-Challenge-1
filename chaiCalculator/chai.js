let ingredientsACup = {
    water:200,
    milk:50,
    teaLeaves:1,
    sugarTeaSpoon:2
  }
  function calculateChaiIngredients(numberOfChaiCups){
    if(numberOfChaiCups >= 1){
    console.log(`To make ${numberOfChaiCups} cups of Kenyan Chai, you will need:\n
               Water: ${ingredientsACup.water * numberOfChaiCups}
               Milk:  ${ingredientsACup.milk * numberOfChaiCups}
               Tea Leaves (Majani): ${ingredientsACup.teaLeaves * numberOfChaiCups} tablespoons
               Sugar (Sukari): ${ingredientsACup.sugarTeaSpoon * numberOfChaiCups} teaspoons \n
               Enjoy your Chai Bora!`)
    } else {
        console.log("Please enter a valid number of cups.");
    }
  }
  let numberOfChaiCups = parseInt(prompt("How many chai cups do you want?"));
  calculateChaiIngredients(numberOfChaiCups);