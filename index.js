// dvmejorada@up.edu.ph
// 2023-04708
// CMSC 100 C3L
// February 20, 2025
// Exer 03: JavaScript Basics Part 1
// Simulate a password validation program in JavaScript

function validatePassword(string1, string2) {
    if ((string1 === string2) && (string.length >= 8)) {
        let hasNumber = false;
        let hasUpperCase = false;
        let hasLowerCase = false;

        for (let i = 0; i < string1.length; i++){
            if (string1[i] >= 0 && string1[i] <= 9) {
                hasNumber = true;
            }
            if (string1[i] >= "A" && string1[i] <= "Z") {
                hasUpperCase = true;
            }
            if (string1[i] >= "a" && string1[i] <= "z") {
                hasLowerCase = true;
            }
        }

        if (hasNumber && hasUpperCase && hasLowerCase){
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}// End of function validatePassword(string1, string2)