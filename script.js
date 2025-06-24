// JavaScript_Assignment_05
// MATH EXPRESSIONS

// 1. Write a program that takes two numbers & adds them in a new variable. Show the result in your browser.
let num1 = 3;
let num2 = 5;
let sum = num1 + num2;
document.writeln("Sum of " + num1 + " and " + num2 + " is " + sum + "<br>");

// 2. Repeat task 1 for subtraction, multiplication, division & modulus.
// Subtraction
let sub = num1 - num2;
document.writeln("Subtraction of " + num1 + " and " + num2 + " is " + sub + "<br>");

// Multiplication
let mul = num1 * num2;
document.writeln("Multiplication of " + num1 + " and " + num2 + " is " + mul + "<br>");

// Division 
let div = num1 / num2;
document.writeln("Division of " + num1 + " and " + num2 + " is " + div + "<br>");

// Modulus
let mod = num1 % num2;
document.writeln("Modulus of " + num1 + " and " + num2 + " is " + mod + "<br> <br> <br>");





// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

let num;
document.writeln("Value after variable declaration is: " + num + "<br>");
num = 5;
document.writeln("Initial value: " + num + "<br>");
num++;
document.writeln("Value after increment is: " + num + "<br>");
num += 7;
document.writeln("Value after addition is: " + (num ) + "<br>");
num-- ;
document.writeln("Value after decrement is: " + num + "<br>");
let ermainder = num % 3;
document.writeln("The remainder is: " + ermainder + "<br> <br> <br>");



// 4. Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

let ticketPrice = 600;
let numberOfTickets = 5;
let totalCost = ticketPrice * numberOfTickets;
document.writeln("Total cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR <br> <br> <br>");



// 5. Write a script to display multiplication table of any number in your browser. E.g
// Table of 4
let tableNumber = 4;
document.writeln("Table of " + tableNumber + ": <br>");
for (let i = 1; i <= 10; i++){
    document.writeln(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
}





document.writeln("<br><br><br>");
// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
let celsius = 30;
let fahrenheit = (celsius * 9/5 ) + 32;
document.writeln(celsius + "°C is " + fahrenheit + "°F <br>");
let fahrenheitTemp = 86;
let celsiumFromF = (fahrenheitTemp - 32) * 5/9;
document.writeln(fahrenheitTemp + "°F is " + celsiumFromF + "°C <br> <br> <br>");


// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

let priceItem1 = 650;
let priceItem2 = 100;
let quantityItem1 = 3;
let quantityItem2 = 7;
let ShippingCharges = 100;
let total = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + ShippingCharges;
document.writeln("<h1>Shopping Cart</h1>");
document.writeln("Price of item 1 is " + priceItem1 + "<br>");
document.writeln("Quantity of item 1 is " + quantityItem1 + "<br>");
document.writeln("Price of item 2 is " + priceItem2 + "<br>");
document.writeln("Quantity of item 2 is " + quantityItem2 + "<br>");
document.writeln("Shipping Charges " + ShippingCharges + "<br> <br>");
document.writeln("Total cost of your order is " + total + "<br> <br> <br>");



// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
let totalMarks = 980;
let marksObtained = 804;
let percentage = (marksObtained / totalMarks) * 100;
document.writeln("<h1>Marks Sheet</h1>");
document.writeln("Total Marks: " + totalMarks + "<br>");
document.writeln("Marks Obtained: " + marksObtained + "<br>");
document.writeln("Percentage: " + percentage + "% <br> <br> <br>");



// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)
let usdDollars = 10;
let saudiRiyals = 25;
let totalInPKR = (usdDollars *104.80) + (saudiRiyals * 28);
document.writeln("<h1>Currency in PKR</h1>");
document.writeln("Total Currency in PKR: " + totalInPKR + "<br> <br> <br>");



// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
let initialNumber = 10;
let result = ((initialNumber + 5) * 10) / 2;
document.writeln("<h1>Arithmetic Operations</h1>");
document.writeln("Result after arithmetic operations: " + result + "<br> <br> <br>");



// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.

let currentYear = 2025;
let birthYear = 1999;
let age = currentYear - birthYear;
document.writeln("<h1>Age Calculator</h1>");
document.writeln("Current Year: " + currentYear + "<br>");
document.writeln("Birth Year: " + birthYear + "<br>");
document.writeln("Your age is " + age + "<br>");
document.writeln("They are either " + age + " or " + (age - 1) + " years old <br> <br> <br>");



// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

let radius = 20;
let pi = 3.142;
let circumference = 2 * pi * radius;
let area = pi * radius * radius;
document.writeln("<h1>The Geometrizer</h1>");
document.writeln("Radius: " + radius + "<br>");
document.writeln("Circumference of the circle is: " + circumference + "<br>");
document.writeln("Area of the circle is: " + area + "<br> <br> <br>")




// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.
let favouriteSnack = "chocolate chip";
let currentAge = 15;
let estimatedMaximumAge = 65;
let amountOfSnacksPerDay = 3;
let totalSnacks = (estimatedMaximumAge - currentAge) * 365 * amountOfSnacksPerDay;
    document.write("<h1>The Lifetime Supply Calculator</h1>");
    document.write("Favourite Snack: " + favouriteSnack + "<br>");
    document.write("Current age: " + currentAge + "<br>");
    document.write("Estimated Maximum Age: " + estimatedMaximumAge + "<br>");
    document.write("Amount of snacks per day: " + amountOfSnacksPerDay + "<br>");
    document.write("You will need " + totalSnacks + " " + favouriteSnack + " to last you until the ripe old age of " + estimatedMaximumAge);