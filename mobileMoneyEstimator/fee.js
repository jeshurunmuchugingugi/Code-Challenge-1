//Challenge 2: Boda Boda Ride Fare Estimator 🛵
let fareTable = {
    baseFare:50,
    chargePerKm:15 //for every kilometer traveled.
  }

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