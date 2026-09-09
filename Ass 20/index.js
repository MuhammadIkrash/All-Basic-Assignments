/* Math Method
Ass 26 - 30 (JavaScript) */

// Question 1 , 2 
// let number = Number(prompt('Enter Your Number'))
// document.writeln(`Number : ${number}`) 
// document.writeln(`Round Off Value : ${Math.round(number)}`)
// document.writeln(`Floor Value : ${Math.floor(number)}`)
// document.writeln(`ceil ${Math.ceil(number)}`)

// Question 3 ,

// let usValue = Number(prompt('Enter Your Number'))
// document.writeln(`The absolute Value of ${usValue} is ${Math.abs(usValue)}`) 

// Question 4 ,

// document.writeln(`Random Dices Value is : ${Math.floor(Math.random()*6 +1 )}`) 

// Question 5 ,

// let Dices  = Math.floor(Math.random()*2 +1 ) 
// document.writeln(`Random Dices Value is : ${Dices}`) 
// if (Dices == 1) {
//     document.writeln(`random Coin Value Is : Head`)
// } else  {
//     document.writeln(`random Coin Value Is : Tail`)
// }

// Question 6 ,
// document.writeln(`Random Number Between 1 and 100 : ${Math.floor(Math.random()*100 +1 )}`) 

// Question 7 ,

// let weight = prompt('Enter Your Weight')
// let res = parseFloat(weight);
// document.writeln(`The Weight Of User Is ${res} Kilogram `)

// Question 7 ,

// let num = 5 ;
// let usVal = prompt('Enter Your Number 1 to 10')
// if (usVal == num) {
//     alert('you win The Game')
// } else {
//     alert('Try Again')
// }

/* Date And Time
Ass 31 - 35 (JavaScript) */

// Question 1 ,

// let Dat =  Date ()
// console.log(Dat);

// Question 2 ,

// let Dat = new Date();
// let months = [
//   "January", "February", "March", "April",
//   "May", "June", "July", "August",
//   "September", "October", "November", "December"
// ];
// let monthNumber = Dat.getMonth(); 
// let monthName = months[monthNumber];
// alert("Current month: " + monthName);

// Question 4 ,

// let Dat = new Date();
// let months = [
//   "Monday", "Tuesday", "Wednesday", "Thursday",
//   "Friday", "Saturday", "Sunday",
// ];
// let monthNumber = Dat.getDay(); 
// let monthName = months[monthNumber].slice(0 , 3);
// alert("Current Day : " + monthName);

// Question 5 ,

// let da = new Date()
// let day = da.getDay()
// if (day >= 5 ) {
//     alert('its Fun Day')
// } else {
//     alert('its Working Day')
// }

// Question 5 ,

// let da = new Date()
// let day = da.getDate()
// if (day <= 15  ) {
//     alert('First Fifteen Day of Month')
// } else {
//     alert('Last Day of Month')
// }

// Question 6 ,

// let now = new Date();

// let milliseconds = now.getTime();
// let minutes = milliseconds / 60000;

// document.writeln("Current Date: " + now + "<br>");
// document.writeln("Elapsed milliseconds since January 1, 1970: " + milliseconds + "<br>");
// document.writeln("Elapsed minutes since January 1, 1970: " + minutes);

// Question 7 ,

// let date = new Date() ;
// let hours = date.getHours()
// if (hours >= 0 && hours <= 11) {
//     document.writeln('its PM ')
// } else {
//     document.writeln('its AM ')
// }

// Question 8 ,

// let laterDate = new Date(2020, 11, 31);

// document.writeln("Later date: " + laterDate);

// let ramadanDate = new Date(2015, 6, 18);
// let currentDate = new Date();

// let difference = currentDate - ramadanDate;
// let daysPassed = Math.floor(difference / (1000 * 60 * 60 * 24));
// document.writeln("Later date: " + daysPassed);

// Question 8 ,

// let ramadanDate = new Date(2015, 11, 5);
// let currentDate = new Date();
// let difference = currentDate - ramadanDate;
// let daysPassed = Math.floor(difference / (1000 * 60 ));
// document.writeln("Later date: " + daysPassed);

// let currentDate = new Date();

// document.writeln("Current date: " + currentDate + "<br>");

// let currentHours = currentDate.getHours();

// currentDate.setHours(currentHours + 1); 

// document.writeln("1 hour ahead, it will be: " + currentDate);

// let currentDate = new Date();

// document.writeln("Current date: " + currentDate + "<br>");

// let currentHours = currentDate.getFullYear();

// currentDate.setFullYear(currentHours - 100); 

// document.writeln("100 year back it was a : " + currentDate);

// let age = Number(prompt('Enter Your Age'))
// let currentDate = new Date();
// let  getYear = currentDate.getFullYear()
// currentDate.setFullYear(getYear - age)
// document.writeln(`your age : ${age} <br>`)
// document.writeln(`your Birth year : ${currentDate}`)

// let  userName = 'Muhammad Ali'
// let currentDate = new Date()
// let months = [
//   "January", "February", "March", "April",
//   "May", "June", "July", "August",
//   "September", "October", "November", "December"
// ];
// let monthNumber = currentDate.getMonth(); 
// let monthName = months[monthNumber];
// let unit = Number(prompt('Number of unit'))
// let unitPrice = 16 
// let amount = unit * unitPrice 
// let due = 350 
// let dueCharge = amount + due 
// document.writeln(`Customer Name : ${userName} <br>`)
// document.writeln(`Month : ${monthName} <br>`)
// document.writeln(`Number of Unit : ${unit} <br>`)
// document.writeln(`Charges per Unit : ${unitPrice} <br>`)
// document.writeln(`Net Amount Payable (With in Due Date) : ${amount} <br>`)
// document.writeln(`Let Payment Surcharge : ${due} <br>`)
// document.writeln(`Cross Amount Payable (After Due Date) : ${dueCharge} <br>`)


// ================Function========================//

// function dateAndTime(da) {
//    console.log(da);
// }
// dateAndTime(new Date())

// function fullName(First , Last) {
//     console.log(First + Last);
// }
// fullName('Muhammad' , 'Ali')

// function sum(sum1 ,sum2) {
//     return sum1 + sum2
// }
// console.log(sum(2,4));

// function addNum(sim1 , sim2 ,operator) {
//     if (operator === '+') {
//         return sim1 + sim2
//     }else if (operator === '-'){
//         return sim1 - sim2
//     }else if (operator === '*'){
//         return sim1 * sim2
//     }else if (operator === '/'){
//         return sim1 / sim2
//     }
// }
// console.log(addNum(2 ,4, '*'));

// function square(num) {
//     return Math.pow(num, 2);
// }

// console.log(square(4)); 

// function fac() {
//     let num = Number(prompt("Enter Number"));
//     let result = 1;

//     for (let i = num; i >= 1; i--) {
//         result = result * i;
//     }

//     console.log(result);
// }

// fac();

// function count() {
//     let fNum = Number(prompt('Enter Start Number'))
//     let LNum = Number(prompt('Enter Start End'))
//     for (let i = fNum; i <= LNum ; i++) {
//      console.log(i);
//     }
// }
// count()

function area(width, height) {
    return width * height;
}

console.log(area(5, 10));