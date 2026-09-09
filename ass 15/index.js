//         //  -------- Chapter # (12-13)  ------------

// var char = prompt("Enter a character:");         //------  Q:1 ---------

// if (char >= "0" && char <= "9") {
//   alert("Number");
// }
// else if (char >= "A" && char <= "Z") {
//   alert("Uppercase Letter");
//  }
//  else if (char >= "a" && char <= "z") {
//    alert("Lowercase Letter");
//  }
//  else {
//   alert("Other character");
// }


// var num1 = prompt("Enter first integer:");          // ------ Q:2 ----------       
// var num2 = prompt("Enter second integer:");

// if (num1 > num2) {
//   alert(num1 + " is larger");
// }
// else if (num2 > num1) {
//   alert(num2 + " is larger");
// }
// else {
//   alert("Both numbers are equal");
// }


// var number = prompt("Enter a number:");          //-------  Q:3 ----------

// if (number > 0) {
//   alert("Positive");
// }
// else if (number < 0) {
//   alert("Negative");
// }
// else {
//   alert("Zero");
// }


// var ch = prompt("Enter a single character:");        // -------- Q:4 --------

// if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u" ||
//     ch === "A" || ch === "E" || ch === "I" || ch === "O" || ch === "U") {

//   alert("True — It is a vowel");
// }
// else {
//   alert("False — Not a vowel");
// }


// var correctPassword = prompt(`Store your password`)      //------- Q:5 ---------
// var userPassword = prompt("Enter your password:");

// if (!userPassword) {
//   alert("Please enter your password");
// }
// else if (userPassword === correctPassword) {
//   alert("Correct! The password matches");
// }
// else {
//   alert("Incorrect password");
// }


// var greeting;                                         //------ Q:6 --------
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }


// var time = prompt("Enter time in 24-hour format (e.g. 1900 = 7pm):");     //----- Q:7 --------

// if (time >= 0 && time < 1200) {
//   alert(time + " = " + (time/100) + " AM");
// }
// else if (time == 1200) {
//   alert("1200 = 12 PM");
// }
// else if (time > 1200 && time <= 2359) {
//   alert(time + " = " + ((time-1200)/100) + " PM");
// }
// else {
//   alert("Invalid time!");
// }

//         // ---------- Chapter:(14-16) ------------------


// var studentNames = [];                  //----- Q:1 ---------


// var studentNames = [];                //----- Q:2 -----

// var colors = ["Red", "Green", "Blue", "Yellow"];    //----- Q:3 -----
// console.log(colors[3]);

// var numbers = [10, 20, 30, 40, 50];           //-------- Q:4 --------
// console.log(numbers);

// var booleanArray = [true, false, true, false, true];      //------- Q:5 --------
// console.log(booleanArray);

// var mixedArray = [25, "Hello", true, 3.14, "World", false];   //------ Q:6 -------
// console.log(mixedArray[0]);

// let educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];  //---- Q:7 ---
// console.log(educationQualifications);

// var arr = ['this' ,'is' ,'my' ,'cat']
// console.log(arr)