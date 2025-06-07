# Code-Challenge-1
#########################################################################
# ☕ Chai Bora Ingredient Calculator

A simple JavaScript program that calculates the required ingredients to make a specified number of cups of  Kenyan Chai .

# 🧾 Description

This project helps users determine the exact quantity of ingredients needed to prepare their desired number of **Chai Bora** cups — a flavorful and authentic Kenyan tea. The ingredients include water, milk, tea leaves (majani), and sugar (sukari).

# 🧠 How It Works

The program stores the quantity of each ingredient required to make **1 cup** of chai.
It prompts the user to input the number of cups they want to prepare.
It then calculates and displays the total quantities of each ingredient based on the input.
If the input is invalid (e.g., less than 1), it will alert the user accordingly.

# 🧮 Ingredients per 1 Cup

 Water: **200 ml**
 Milk: **50 ml**
 Tea Leaves: **1 tablespoon**
 Sugar: **2 teaspoons**

# 📋 Example Output

If the user wants to make 3 cups of chai:
To make 3 cups of Kenyan Chai, you will need:

Water: 600
Milk:  150
Tea Leaves (Majani): 3 tablespoons
Sugar (Sukari): 6 teaspoons 

Enjoy your Chai Bora!

#  How to Run

1. Copy the code into an HTML file inside a `<script>` tag or a file.
2. Open it in a browser environment that supports `prompt()`.
3. Enter the number of chai cups you'd like to make when prompted.

##  Notes

The script uses `prompt()` which works in browser environments.
Sure! Here's a `README.md` you can use for your Boda Boda Ride Fare Estimator project:
---





############################################################################################

# 2 Boda Boda Ride Fare Estimator

This is a simple JavaScript-based fare estimator for **Boda Boda** (motorbike taxi) rides. It prompts the user for the distance they plan to travel and then calculates the estimated fare based on a predefined pricing structure.

# Features

* Takes user input for distance in kilometers via a prompt.
* Calculates:

  * Base fare
  * Fare per kilometer
  * Total estimated fare
* Outputs a friendly breakdown of the cost to the console .

#  Fare Structure

* **Base Fare:** KES 50
* **Per Kilometer Charge:** KES 15

# Code Overview

```javascript
let fareTable = {
    baseFare: 50,
    chargePerKm: 15 // for every kilometer traveled
};

let distanceInKm = parseInt(prompt("Unafika wapi Mkubwa? Kilometer ngapi?:"));
calculateBodaFare(distanceInKm);

function calculateBodaFare(distanceInKm){
    if(distanceInKm !== parseInt('')){
        let totalFare = fareTable.baseFare + (distanceInKm * fareTable.chargePerKm);
        let farePerKm = distanceInKm * fareTable.chargePerKm;
        console.log(`Uko kwote? Io ni ${distanceInKm} km:
                    Ukikalia Pikipiki: KES ${fareTable.baseFare}
                    Mpaka Uko: KES ${farePerKm}
                    Total: KES ${totalFare}

                    Panda Pikipiki!`);
    } 
}
```

#  How to Use

1. Copy the code into an HTML file within a `<script>` tag or run it directly in the browser console.
2. When prompted, enter the number of kilometers you want to travel.
3. Check the console for your fare estimate.

#  Notes

* The logic checks if the input is a valid number before calculating the fare.
* Currently, the fare table is hardcoded; you can modify `fareTable` to change the rates.


