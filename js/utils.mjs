function formatCurrency(amount, currencySymbol){
    //Which will make out item look more ....
    const formattedAmount = amount.toFixed(2);
    return `${formattedAmount} ${currencySymbol}`;
}

export {formatCurrency}