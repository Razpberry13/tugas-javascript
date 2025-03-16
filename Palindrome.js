function isPalindrome(str) {
    return str ===str.split(''). reverse().join('');
}

console.log(isPalindrome("ada")); // true 
console.log(isPalindrome("aku")); //false