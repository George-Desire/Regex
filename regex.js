function validateCreditCard(cardNumber) {
    const cardPatterns = {
        "Visa": /^4[0-9]{12}(?:[0-9]{3})?$/,
        "Mastercard": /^5[1-5][0-9]{14}$/,
        "American Express": /^3[47][0-9]{13}$/,
        "Discover": /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        "JCB": /^(?:2131|1800|35\d{3})\d{11}$/,
        "Diners Club": /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/
    };

    for (const [cardType, pattern] of Object.entries(cardPatterns)) {
        if (pattern.test(cardNumber)) {
            return `${cardType} card`;
        }
    }
    
    return "Unknown card type";
}

const cardNumber = "4532863090367756"; 
const cardType = validateCreditCard(cardNumber);
console.log(`The credit card type is ${cardType}`);

/*
Explanation of the regex patterns used:

Visa: Starts with a "4" followed by 12 or 15 digits. (^(?=4)[0-9]{12}(?:[0-9]{3})?$)
Mastercard: Starts with a "5" followed by 15 digits. (^(?=5)[0-9]{15}$)
American Express: Starts with "34" or "37" followed by 13 digits. (^(?=3)(?=3[47])[0-9]{13}$)
Discover: Starts with "6011" or "65" followed by 16 digits. (^(?=6)(?=65|6011)[0-9]{16}$)
JCB: Starts with "2131", "1800", or "35" followed by 16 digits. (^(?=3)(?=3[47])[0-9]{13}$)
Diners Club: Starts with "36", "38", or "30" followed by 14 digits. (^(?=3)[0-9]{14}$)
*/