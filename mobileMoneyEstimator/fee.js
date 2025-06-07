// Challenge 3: Simplified Mobile Money Transaction Fee Estimator 📱

// Define an object called transactionFeeChart to store the minimum and maximum transaction fees
let transactionFeeChart = {
    minimumFee : 10,  // Minimum transaction fee in KES
    maximumFee : 70   // Maximum transaction fee in KES
}


// Prompt the user to enter the amount they want to send and convert it to an integer with the parseInt()
let amountToSend = parseInt(prompt("Unatuma Ngapi? (KES):"));

// Hoisting the function to estimate the transaction fee based on the entered amount
estimateTransactionFee(amountToSend);

function estimateTransactionFee(amountToSend) {

    // Calculate the transaction fee at 1.5% of the amount to be sent
    let transactionFee = amountToSend * 1.5/100

    if(transactionFee < 10){   // If the calculated fee is less than the minimum fee, use the minimum fee
     let totalAmountSent = amountToSend + transactionFeeChart.minimumFee;
     console.log(`Sending KES ${amountToSend}:
                  Calculated Transaction Fee: KES ${transactionFeeChart.minimumFee}
                  Total amount to be debited: KES ${totalAmountSent}\n
                  Send Money Securely!`)
    
     // If the calculated fee is greater than the maximum fee, use the maximum fee              
    } else if (transactionFee > 70){
        let totalAmountSent = amountToSend + transactionFeeChart.maximumFee;
        console.log(`Sending KES ${amountToSend}: 
                    Calculated Transaction Fee: KES ${transactionFeeChart.maximumFee}
                    Total amount to be debited: KES ${totalAmountSent}\n
                    Send Money Securely!`)

    } else { //Otherwise, use the calculated fee as it is
        let totalAmountSent = amountToSend + transactionFee;
        console.log(`Sending KES ${amountToSend}:
            Calculated Transaction Fee: KES ${transactionFee}
            Total amount to be debited: KES ${totalAmountSent}\n
            Send Money Securely!`)
    }
}
