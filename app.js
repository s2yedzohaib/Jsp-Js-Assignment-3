

// chp(USER INPUT & CONDITIONAL STATEMENT)
// // Q1
// var city = prompt("Enter the city name:");

// if (city === "karachi") {
//     console.log("Welcome to the city of lights!");
// } else {
//     console.log("Welcome to " + city + "!");
// }
// // Q1

// // Q2
// var gender = prompt("Enter your gender:");

// if (gender === "male") {
//     console.log("Good Morning Sir!");
// } else if (gender === "female") {
//     console.log("Good Morning Ma'am!");
// } else {
//     console.log("Invalid gender input.");
// }
// // Q2

// // Q3
// var signalColor = prompt("Enter the traffic signal color:");

// if (signalColor === "red") {
//     console.log("Must Stop");
// } else if (signalColor === "yellow") {
//     console.log("Ready to move");
// } else if (signalColor === "green") {
//     console.log("Move now");
// } else {
//     console.log("Invalid signal color input.");
// }
// // Q3

// // Q4
// var remainingFuel = Number(prompt("Enter the remaining fuel in your car (in liters):"));

// if (remainingFuel < 0.25) {
//     console.log("Please refill the fuel in your car.");
// } else {
//     console.log("You have sufficient fuel.");
// }
// // Q4

// // Q5
// // a
// var a = 4;
// if (++a == 5) {
//     alert("given condition for variable a is true");
// }
// // a
// // b
// var b = 82;
// if (b++ == 83) {
//     alert("given condition for variable b is true");
// }
// // b
// // c
// var c = 12;
// if (++c == 13) {
//     alert("condition 1 is true");
// }
// if (c == 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c == 14) {
//     alert("condition 4 is true");
// }
// // c
// // d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost == laborCost + materialCost) {
//     alert("The cost equals");
// }
// // d
// // e
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
// // e
// // f
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }
// // f
// // Q5

// // Q6
// var totalMarks = 300;

// var subject1Marks = Number(prompt("Enter marks obtained in Subject 1:"));
// var subject2Marks = Number(prompt("Enter marks obtained in Subject 2:"));
// var subject3Marks = Number(prompt("Enter marks obtained in Subject 3:"));

// var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;

// var percentage = (totalObtainedMarks / totalMarks) * 100;

// var grade;
// var remarks;

// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// } else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// } else {
//     grade = "Fail";
//     remarks = "Sorry";
// }

// console.log("Marks Sheet");
// console.log("Total marks: " + totalMarks);
// console.log("Marks obtained: " + totalObtainedMarks);
// console.log("Percentage: " + percentage + "%");
// console.log("Grade: " + grade);
// console.log("Remarks: " + remarks);
// // Q6

// // Q7
// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userGuess = Number(prompt("Guess a number between 1 and 10:"));

// if (userGuess === secretNumber) {
//     console.log("Bingo! Correct answer.");
// } else if (userGuess + 1 === secretNumber) {
//     console.log("Close enough to the correct answer.");
// } else {
//     console.log("Sorry, the correct answer was " + secretNumber + ".");
// }
// // Q7

// // Q8

// // Q9
// var number = Number(prompt("Enter a number:"));
// if (number % 3 === 0) {
//     console.log("The number " + number + " is divisible by 3.");
// } else {
//     console.log("The number " + number + " is not divisible by 3.");
// }

// // 9. Even or Odd
// if (number % 2 === 0) {
//     console.log("The number " + number + " is even.");
// } else {
//     console.log("The number " + number + " is odd.");
// }
// // Q9

// // Q10
// var temperature = Number(prompt("Enter the temperature:"));
// if (temperature > 40) {
//     console.log("It is too hot outside.");
// } else if (temperature > 30) {
//     console.log("The weather today is normal.");
// } else if (temperature > 20) {
//     console.log("Today's weather is cool.");
// } else if (temperature > 10) {
//     console.log("OMG! Today's weather is so cool!");
// } else {
//     console.log("It is very cold outside.");
// }
// // Q10

// // Q11
// var num1 = Number(prompt("Enter the first number:"));
// var num2 = Number(prompt("Enter the second number:"));
// var operation = prompt("Enter the operation (+, -, *, /, %):");

// var result;
// if (operation === "+") {
//     result = num1 + num2;
// } else if (operation === "-") {
//     result = num1 - num2;
// } else if (operation === "*") {
//     result = num1 * num2;
// } else if (operation === "/") {
//     result = num1 / num2;
// } else if (operation === "%") {
//     result = num1 % num2;
// } else {
//     console.log("Invalid operation.");
// }

// console.log("The result is: " + result);
// // Q11


// chp (IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS)
// Q1
// var character = "A";

// if (character >= "0" && character <= "9") {
//   console.log("The character is a number.");
// } else if (character >= "A" && character <= "Z") {
//   console.log("The character is an uppercase varter.");
// } else if (character >= "a" && character <= "z") {
//   console.log("The character is a lowercase varter.");
// } else {
//   console.log("Invalid character.");
// }

// // Q2
// var num1 = 10;
// var num2 = 20;

// if (num1 > num2) {
//   console.log(num1 + " is larger than " + num2);
// } else if (num2 > num1) {
//   console.log(num2 + " is larger than " + num1);
// } else {
//   console.log("The two numbers are equal.");
// }

// // Q3
// var number = 0;

// if (number > 0) {
//   console.log("The number is positive.");
// } else if (number < 0) {
//   console.log("The number is negative.");
// } else {
//   console.log("The number is zero.");
// }

// // Q4
// var char = "a";

// if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//   console.log("The character is a vowel.");
// } else {
//   console.log("The character is not a vowel.");
// }

// // Q5
// var correctPassword = "secret";
// var enteredPassword = prompt("Enter your password:");

// if (enteredPassword === "") {
//   console.log("Please enter your password.");
// } else if (enteredPassword === correctPassword) {
//   console.log("Correct! The password you entered matches the originle password.");
// } else {
//   console.log("incorrect password.");
// }


// Q6
// var greeting;
// var hour = 13;

// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// console.log(greeting);

// // Q7
// var time = prompt("Enter the time");

// if (time >= 0 && time < 1200) {
//   console.log("Good morning");
// } else if (time >= 1200 && time < 1700) {
//   console.log("Good afternoon");
// } else if (time >= 1700 && time < 2100) {
//   console.log("Good evening");
// } else if (time >= 2100 && time <= 2359) {
//   console.log("Good night");
// } else {
//   console.log("Invalid time format");
// }


// chp 10 (If Statement)
// // Q1
// var city = "Karachi";
// if (city === "Karachi") {
//   console.log("The City Of Lights");
// }

// // Q2
// if (x === y) {
//   var z = prompt("Enter the value of z:");
// }

// // Q3
// var ZipCode = "10010";
// if (ZipCode === "10010") {
//   alert("Karachi");
// } else {
//   alert("Please write correct city");
// }

// // Q4
// var x = 1;
// if (x === 1) {
//   x = 2;
// }




// Chp 11 (Comparison Operators)

// // Q1
// if (variable1 !== variable2) {
//   }
  
//   // Q2
//   if (variable1 >= variable2) {
//   }
  
//   // Q3
//   if (variable !== 5) {
//     variable = 10;
//   }
  
// // Q4
//   if (number1 !== number2) {
//     alert("Congratulations!");
//   }
  
// // Q5
//   var firstName = prompt("Enter your first name:");
//   if (firstName !== "John") {
//     alert("No match");
//   }








// chp 12 (if…else and else ifstatements   )
// //Q1
// if (variable1 >= variable2) {
//     alert("Variable 1 is greater than or equal to Variable 2.");
//   } else {
//     alert("Variable 1 is less than Variable 2.");
//   }
  
//   //Q2
//   var marks = prompt("Enter your marks:");
//   var totalMarks = 100;
//   var percentage = (marks / totalMarks) * 100;
  
//   if (percentage >= 80) {
//     alert("Your grade is A.");
//   } else if (percentage >= 60) {
//     alert("Your grade is B.");
//   } else if (percentage >= 40) {
//     alert("Your grade is C.");
//   } else {
//     alert("Your grade is Fail.");
//   }
  
//   // Q3
//   if (a === 10) {
//     alert("a is 10");
//   } else {
//     alert("The correct value of a is 10.");
//   }
  
//   // Q4
//   var city = prompt("Enter a city:");
  
//   if (city === "Karachi") {
//     alert("You are in Karachi.");
//   } else if (city === "Lahore") {
//     alert("You are in Lahore.");
//   } else {
//     alert("You are not in Karachi or Lahore.");
//   }





// Chp 13 (Testing sets of conditions)



// // Q1
// if (a === b && c === d) {
//   }
  
//   // Q2
//   if (a === b || c !== d) {
//   }
  
//   //Q3
//   if ((name === "Hamza" || name === "Arsalan") && age < 60) {
//   }
  
//   // Q4
//   var num1 = 10;
//   var num2 = 20;
  
//   if (num1 < num2 || num1 > num2) {
//     alert("The first variable is either less than or greater than the second variable.");
//   }
  
//   //Q5
//   var firstName = "John";
//   var lastName = "Doe";
  
//   var userFirstName = prompt("Enter your first name:");
//   var userLastName = prompt("Enter your last name:");
  
//   if (userFirstName === firstName && userLastName === lastName) {
//     alert("Your answers match the stored variables.");
//   } else {
//     alert("Your answers do not match the stored variables.");
//   }


// Chp 14 (If statements nested)


// Q1
// var password = prompt("Enter your password:");

// if (password !== "") {
//   if (password.length <= 5) {
//     alert("pass must be greater than 5 character.");
//   } else {
//     alert("OK");
//   }
// }

// Q2
// if (a === 1) {
//   if (c === "Max") {
//     alert("OK");
//   }
// }


// Q3
// if (a === 1 && c === "Max") {
//   alert("OK");
// }

// Q4
// var num1 = 10;
// var num2 = 10;

// if (num1 === num2) {
//   if (num1 <= num2) {
//     alert("Both conditions are true.");
//   }
// }