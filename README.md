# Code-Challenge-1

## Challenge 1: Chai Bora Ingredient Calculator ☕

A simple JavaScript program that calculates the required ingredients to make a specified number of cups of  Kenyan Chai .

# Description

This project helps users determine the exact quantity of ingredients needed to prepare their desired number of **Chai Bora** cups — a flavorful and authentic Kenyan tea. The ingredients include water, milk, tea leaves (majani), and sugar (sukari).

# How It Works

The program stores the quantity of each ingredient required to make **1 cup** of chai.
It prompts the user to input the number of cups they want to prepare.
It then calculates and displays the total quantities of each ingredient based on the input.
If the input is invalid (e.g., less than 1), it will alert the user accordingly.

# Ingredients per 1 Cup

 Water: **200 ml**
 Milk: **50 ml**
 Tea Leaves: **1 tablespoon**
 Sugar: **2 teaspoons**

# Example Output

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

## 👤 Project Author
    Name: [Your Full Name or Preferred Alias]
    Email: [your.email@example.com]
    GitHub: @jeshurunmuchugingugi
    Location: [City, Country]

## 📄 License
    This project is licensed under the Simple Software License.
    You may use, modify, and share it for personal, educational, or commercial purposes.
    The software is provided “as is” with no warranties.



<!-- CHALLENGE 2 -->

## Challenge 2: Boda Boda Ride Fare Estimator 🛵

This is a simple JavaScript-based fare estimator for **Boda Boda** (motorbike taxi) rides. It prompts the user for the distance they plan to travel and then calculates the estimated fare.

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

## 👤 Project Author
    Name: [Your Full Name or Preferred Alias]
    Email: [your.email@example.com]
    GitHub: @jeshurunmuchugingugi
    Location: [City, Country]

## 📄 License

Copyright (c) [2025] [Jeshurun Muchugi]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to use, copy, modify, and distribute the Software for personal, educational, or commercial use, subject to the following conditions:

1. The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

2. The Software is provided "as is", without warranty of any kind, express or implied. In no event shall the authors be liable for any claim, damages, or other liability arising from the use of the Software.

3. You may not use the name of the author or contributor without prior written permission for promotion or endorsement.

---

This license applies to the “Boda Boda Ride Fare Estimator” project and its source code.



<!-- CHALLENGE 3 -->

## Challenge 3: Simplified Mobile Money Transaction Fee Estimator 📱

This is a simple JavaScript program that estimates the transaction fee when sending money using a mobile money service (like M-PESA in Kenya). The script prompts the user for the amount they want to send and calculates the corresponding transaction fee based on defined limits.

## 🚀 Features

* Calculates a transaction fee at **1.5%** of the amount to be sent.
* Ensures the **minimum fee is KES 10** and the **maximum fee is KES 70**.
* Displays the **total amount to be debited** from the sender’s account.
* User-friendly prompt and informative console output.

## 🧠 Logic

The fee structure works as follows:

* If the calculated fee is **less than KES 10**, the minimum fee (KES 10) is applied.
* If the calculated fee is **greater than KES 70**, the maximum fee (KES 70) is applied.
* Otherwise, the **1.5% fee** is applied.

## 💻 How It Works

When you run the program:

1. The user is prompted to input the amount they want to send.
2. The function `estimateTransactionFee()` calculates the fee.
3. The result is displayed in the browser console.

## 🧾 Sample Output

If you send KES 500:

```
Sending KES 500:
    Calculated Transaction Fee: KES 10
    Total amount to be debited: KES 510
    Send Money Securely!
```

## 🛠️ Code

```javascript
let transactionFeeChart = {
    minimumFee: 10,
    maximimFee: 70
};

let amountToSend = parseInt(prompt("Unatuma Ngapi? (KES):"));
estimateTransactionFee(amountToSend);

function estimateTransactionFee(amountToSend) {
    let transactionFee = amountToSend * 1.5 / 100;
    if (transactionFee < 10) {
        let totalAmountSent = amountToSend + transactionFeeChart.minimumFee;
        console.log(`Sending KES ${amountToSend}:
                      Calculated Transaction Fee: KES ${transactionFeeChart.minimumFee}
                      Total amount to be debited: KES ${totalAmountSent}\n
                      Send Money Securely!`);
    } else if (transactionFee > 70) {
        let totalAmountSent = amountToSend + transactionFeeChart.maximimFee;
        console.log(`Sending KES ${amountToSend}:
                      Calculated Transaction Fee: KES ${transactionFeeChart.maximimFee}
                      Total amount to be debited: KES ${totalAmountSent}\n
                      Send Money Securely!`);
    } else {
        let totalAmountSent = amountToSend + transactionFee;
        console.log(`Sending KES ${amountToSend}:
                      Calculated Transaction Fee: KES ${transactionFee}
                      Total amount to be debited: KES ${totalAmountSent}\n
                      Send Money Securely!`);
    }
}
```

# 👤 Project Author
Name: [Jeshurun Muchugi]
Email: [jeshurunmuchugi@gmail.com]
GitHub: @jeshurunmuchugingugi
Location: Nairobi, Kenya

## 📄 License

This project is for educational/demo purposes and does not represent actual mobile money rates.



