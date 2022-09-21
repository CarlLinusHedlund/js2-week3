function calculateTax(amount, taxPercentage){
    //Calculate tax
    return amount + amount * (taxPercentage / 100)
}
export {calculateTax};