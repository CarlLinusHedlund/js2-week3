import '/css/style.css'
import {displayAmount} from "./display.mjs"
import {formatCurrency} from "./utils.mjs"
import {calculateTax} from './tax.mjs';

//the tax is 15%
//price is 100
// amount + amount * {tax / 100}

const itemPrice = 50;
const tax = 15;

const itemPriceWithTax = calculateTax(itemPrice, tax);
console.log("itemPriceWithTax: ", itemPriceWithTax);


//To fixed()

let num = 5.16743;

let fixedSum = num.toFixed(2);
console.log(fixedSum);


const formattedPriceWithTax = formatCurrency(itemPriceWithTax, "kr");
console.log("formattedPriceWithTax: ", formattedPriceWithTax);

displayAmount(formattedPriceWithTax);