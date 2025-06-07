// Challenge 2: Boda Boda Ride Fare Estimator 🛵

// Object representing fare structure
let fareTable = {
    baseFare:50,  // Flat starting fare for every ride in KES
    chargePerKm:15 // Additional charge for every kilometer traveled.
  }

// Prompt the user to enter the distance of their ride in kilometers
let distanceInKm = parseInt(prompt("Unafika wapi Mkubwa? Kilometer ngapi?:"));

// Call the function to calculate and display the fare
calculateBodaFare(distanceInKm);

// Function that calculates and displays the Boda Boda fare
function calculateBodaFare(distanceInKm){
  // Check if the user provided a valid numeric input
    if(distanceInKm !== parseInt('')){ // Ensures input is not empty or NaN and if present is an integer
            // Calculate total fare: base fare + (distance × charge per km)
        let totalFare = fareTable.baseFare + (distanceInKm * fareTable.chargePerKm);
        // Calculate fare for distance only (excluding base fare)

        let farePerKm = distanceInKm * fareTable.chargePerKm;
        // Calculate fare for distance only (excluding base fare)

        // Display the detailed fare breakdown using console.log()
        console.log(`Uko kwote? Io ni ${distanceInKm} km:
                    Ukikalia Pikipiki: KES ${fareTable.baseFare}
                    Mpaka Uko: KES ${farePerKm}
                    Total: KES ${totalFare}

                    Panda Pikipiki!`);
    } 
    // No else statement block to handle invalid input — can be improved
}






