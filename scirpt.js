// code debugging fix 
let myGrades = [100, 100, 90, 73, 78, 94, 86];
let myAverage = 0;

for (let i = 0; i < myGrades.length; i++) {    // i=1  and i <= myGrades.length fixed
    myAverage += myGrades[i];
}
myAverage = myAverage / myGrades.length;
console.log("My grade average is " + myAverage);

// Exception Class
class WRONG extends Error {
    constructor(message) {
        super(message);
        this.name = "WRONG";
    }
}

// Function For Grade Input
function validateGrade(grade) {
    if (typeof grade !== "number") {
        throw new WRONG("Input must be a number.");
    }
    if (grade < 0 || grade > 100) {
        throw new WRONG("Grade must be between 0 and 100.");
    }
    console.log("Grade is valid: " + grade);
}

// Test  function
try {
    validateGrade(105);  
} catch (error) {
    if (error instanceof WRONG) {
        console.log("Invalid grade input: " + error.message);
    } else {
        console.error("Unexpected error:", error);
    }
}
