// This is required for the test to function properly

module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

// function1 
 function calculateTax(amount) {
    return amount * 0.10;
 }

//function2
 function convertToUpperCase(text) {
    return text.toUpperCase();
 }

//function3
function isPalindrome(word) {
   return word.toLowerCase() === word.toLowerCase().split('').reverse().join('');
}

//function 4
function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

//function 5
function calculateDiscountedPrice(originalPrice , discountPercentage) {
    return originalPrice - (originalPrice * discountPercentage / 100);
}