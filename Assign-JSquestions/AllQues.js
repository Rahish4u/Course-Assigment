//1. Password Validator
/*Write a JavaScript program that checks if the entered password matches the confirmed password. If the
passwords match, the program should log "Password Matched. Password validation Successful." to the console.
Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the console*/

/*const password = "Hari4251";
const confirmPassword = "Hari4251";

function validatePassword(password, comfirmPassword){
    if (password == confirmPassword){
        console.log("Password matched. Password validation successful.");
    }
    else{
        console.log("Password didn't matched. Password validation unsuccessful.");
    }
}
validatePassword(password, confirmPassword)*/

//---------------------------------------------------//

//2. Calculator
/*Create a javascript program that takes in two numbers and a string operator. Make use of a switch statement
to perform the operation on the two numbersQ

1. Take in two numbers, num1 and num2, and a string representing a mathematical operator, operator.
2. Use a switch statement to determine which operation to perform based on the value of the operator.
3. If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical operation and store the result in a variable called result.
4. If the operator is not one of the valid operators, log "Invalid operator" to the console.*/
/*const num1 = 200;
const num2 = 10;
const operator = "/";

function calculator(num1, num2, operator){
    let result;

    switch(operator){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0){
                result = num1 / num2;
            } else {
                result = "Cannot provided by zero"
            }
            break;
            default:
                result = "Invalid operator"
            
    } 
    return result;
}

const result = calculator(num1, num2, operator);
console.log(`Result: ${result}`); */

//---------------------------------------------------//

/* 3.Color Mixer
Write a JavaScript program that takes in two strings representing colors and uses a switch statement to
determine the resulting color when the two colors are mixed. The program should print the resulting color
Based on the following criteria"
*If color1 is "red" and color2 is "blue" or vice versa, print "purple".
*If color1 is "red" and color2 is "yellow" or vice versa, print "orange".
*If color1 is "blue" and `color2" is "yellow" or vice versa, print "green".
*If any other combination of colors is input, the program should print "Invalid color combination".*/

/*function mixColors(color1, color2){
    let result;

    switch (color1) {
        case 'red':
            switch(color2){
                case 'blue':
                    result = 'purple';
                    break;

                case 'yellow':
                    result = 'orange';
                    break;
                    default:
                        result = 'Invalid color combination';         
            }

            break;
            case 'blue':
                switch(color2) {
                    case 'red':
                        result = 'purple';
                        break;
                    case 'yelow':
                        result = 'green';
                        break;
                    default:
                    result = 'Invalid color combination';
                }
            break;
            case 'yellow':
                switch(color2){
                        case 'red':
                            result = 'orange';
                            break;
                        case 'blue':
                        result = 'green';
                        break;
                        default:
                            result = 'Invalid color combination';
                }

                break;
                default:
                    result = 'Invalid color combination';

    }
        return result; 
}

const color1 = 'red';
const color2 = 'yellow';

const result = mixColors(color1, color2);
console.log(`Resulting color: ${result}`);*/

//---------------------------------------------------//

/*4.Highest Marks
A teacher wants to find out the highest marks scored by a student in a class of five students. The teacher enters the marks of all five students in an array called "marks". Write a program that iterates through the array and finds the highest marks scored by any student in the class. The highest marks must then be displayed to the
teacher using the console. Make sure you use the ternary operator to find the student with the highest marks.*/

/*function findHighestMarks(marks) {
  let highestMarks = marks[0]; //Initialize with the first student's marks

  // Iterate through the array to find the highest marks

  marks.forEach(mark => {
    highestMarks = mark > highestMarks ? mark : highestMarks;
  });
  return highestMarks;
}

const marks = [100, 92, 78, 90, 88];
const highestMarks = findHighestMarks(marks);
console.log(`The highest marks scored in the class: ${highestMarks}`); */

//---------------------------------------------------//

/*5.Capitalize

You are building a form where users can enter their names. You want to make sure that the first letter of the 
name is always capitalized, even if the user forgets to do so. Write a program that takes in the user's name as a 
string and uses the ternary operator to check if the first letter is lowercase. If it is, the program capitalizes it and 
returns the modified string. Otherwise, it returns the original string without any changes. */

/*
function capitalizeName(name) {
    return name && name.charAt(0).toUppercase() + name.slice(1);
}
let userName = prompt("Enter your name:");
let capitalizedName = capitalizeName(userName);

console.log("Capitalized name:", capitalizedName); */

//---------------------------------------------------//

/*6. Vowel Counter
We want to count the number of vowels in a person's name. Given a name as input, the program should iterate  through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should be counted.*/
/*
function countVowels(name) {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;

    for (let i = 0; i < name.length; i++) {
        if (vowels.includes(name[i])){
            vowelCount++;
        }
    }
    return vowelCount;
}
//test the function
let userName = prompt("Enter your name:");
let numVowels = countVowels(userName);
console.log("Number of vowels in the name:", numVowels); */

//---------------------------------------------------//

/*
7. Remove Duplicates

In an online shopping application, customers can add multiple items to their cart. However, sometimes customers accidentally add the same item more than once, resulting in duplicate items in their cart. The duplicate items not only make it difficult for the customer to track the items they want to purchase but also affect the accuracy of the purchase order.

To solve this problem, the application needs to remove duplicatd items from the customer's cart. The program should take the customer's cart with duplicates as input, and return a new cart without duplicates.
*/

/* function removeDuplicates(cart) {
    // Create a Set from the cart to automatically remove duplicates
    let uniqueItems = new Set(cart);
    
    // Convert the Set back to an array
    let uniqueCart = Array.from(uniqueItems);
    
    return uniqueCart;
}

// Test the function
let customerCart = ["item1", "item2", "item1", "item3", "item2", "item4"];
let newCart = removeDuplicates(customerCart);
console.log("Cart without duplicates:", newCart); */

//------------------------------------------------------------//
/*8. Inverted right-angled triangle pattern with asterisks
Writd a program that takds an integer input i and prints an inverted right-angled triangle pattern of asterisks  with i rows.
Inverted right-angled pattern:
If i=6*/
/*
function invertedRightAngleTriangle(i) {
    for (let row = i; row >= 1; row--) {
        let pattern = '';
        for (let j = 1; j <= row; j++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}

// Test the function
let i = 6;
invertedRightAngleTriangle(i);
*/

//------------------------------------------------------------//

/* 
9. Check for divisibility.

Write a program that takes an array of numbers and prints all the numbers that are divisible by 3, but not by 2. 
Use a for loop and continue statement 
*/
/*
function checkDivisibility(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0 && arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
}

// Test the function
let numbers = [3, 6, 9, 12, 15, 18, 21 , 22, 27, 30];
checkDivisibility(numbers);
*/

//------------------------------------------------------------//

/*10. Correct a bug

You are working on an e-commerce website where customer can add items to their cart. The cart stores the quantity of each item that the customer wants to purchase in an array of numbers. However, the websitde is  currently experiancing a bug where the quantity of each item is being recorded incorrectly by reducing it to  half. As a result, you need to write a JavaScript function that can double the quantity of each item in the cart  array to correct the bug. */

/*
function correctQuantityBug(cart) {
    // Iterate through each item in the cart array
    for (let i = 0; i < cart.length; i++) {
        // Double the quantity of the current item
        cart[i] *= 2;
    }
    
    // Return the corrected cart array
    return cart;
}

// Test the function
let cart = [1, 2, 3, 4];
let correctedCart = correctQuantityBug(cart);
console.log("Corrected Cart:", correctedCart);
*/

//------------------------------------------------------------//

/*
11. Unit converter
A local weather station needs to convert temperature data collected in Celsius to Fahrenheit beforde displaying  it on its website. They want a function that can convert Celsius to Fahrenheit accurately and efficiently. The function should take input in Celsius and return output in Fahrenheit. This function will help the weather station  to providd tdmperature readings that are easily understandable to a wider audidnce.
*/

/*
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Test the function
let celsiusTemperature = 30;
let fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
console.log(celsiusTemperature + "°C is equal to " + fahrenheitTemperature + "°F");
*/

//----------------------------------------------------------------//

/*12. Calculate rental cost

A car rental company needs to calculate the cost of a rental based on the number of days rented and the type  of car. They require a function that takes in the number of days rented and car type and returns the rental cost. Thd total cost would be the  rental cost multiplied by the number of days rented.

Thd rental costs are
 Economy = Rs. 4000/- per day.
 Midsizd = Rs. 10,000 /- per day.
 Luxury = Rs. 20,000 /- per day. */

/*
function calculateRentalCost(daysRented, carType) {
    const rentalCostPerDay = {
        "Economy" : 4000,
        "Midsize" : 10000,
        "Luxury" :20000,
    };

    if (!(carType in rentalCostPerDay)){
        return "Invalid car type";
    }

    const rentalCost = rentalCostPerDay[carType] * daysRented;
    return rentalCost;
}

const daysRented = 4;
const carType = "Luxury";
const totalCost = calculateRentalCost(daysRented, carType)
console.log("Total rental cost" , totalCost);
*/

/* 13. Bill splitter

A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of 
people sharing it. They require a function that takes in the cost of each dish and the number of people sharing 
it and returns an object that contains the total bill and the bill to be paid by each person in the group. */

/*
function calculateBill(costPerDish, numberOfPeople) {
    // Calculate total bill
    const totalBill = costPerDish.reduce((acc, curr) => acc + curr, 0);
    
    // Calculate bill per person
    const billPerPerson = totalBill / numberOfPeople;

    // Return an object containing total bill and bill per person
    return {
        totalBill: totalBill,
        billPerPerson: billPerPerson
    };
}

// Example usage:
const costPerDish = [25, 15, 20]; // Cost of each dish
const numberOfPeople = 4; // Number of people sharing the bill
const billDetails = calculateBill(costPerDish, numberOfPeople);
console.log("Total Bill:", billDetails.totalBill);
console.log("Bill per Person:", billDetails.billPerPerson);
*/

//---------------------------------------------------------------//

/* 14. Calculate the final order price

A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on the unit price and quantity of each item. */

/*
const calculateTotalCost = (cart) => {
    // Initialize total cost
    let totalCost = 0;

    // Iterate over each item in the cart
    cart.forEach(item => {
        // Calculate cost of each item by multiplying unit price with quantity
        const itemCost = item.unitPrice * item.quantity;
        // Add item cost to total cost
        totalCost += itemCost;
    });

    // Return the total cost
    return totalCost;
}

// Example usage:
const cart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 20, quantity: 1 },
    { unitPrice: 50, quantity: 4 }
];

const totalCost = calculateTotalCost(cart);
console.log("Total Cost:", totalCost);
*/

//-------------------------------------------------------------//

/*
15. Calculate the percentage of the discount

A retail store is offering a discount on its products and wants to calculate the percentage of the discount to show customers how much they can save. Given the original price and the discounted price of a product, implement an arrow function to calculate the percentage of the discount rounded off to two decimal places. This function could be useful for the store's marketing team to create promotions and offers that attract customers.
*/

/*
const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
  const discountAmount = originalPrice - discountedPrice;
  const discountPercentage = (discountAmount / originalPrice) * 100;
  return Math.round(discountPercentage * 100) / 100; // rounding off to two decimal places
};

// Example usage:
const originalPrice = 5000; // Original price of the product
const discountedPrice = 800; // Discounted price of the product
const discountPercentage = calculateDiscountPercentage(
  originalPrice,
  discountedPrice
);
console.log(`Discount percentage: ${discountPercentage}%`);
*/

//--------------------------------------------------------------//

/*
16. Generate a random number

Create a JavaScript program that generates a random number between 1 and 100 when the program starts. 
Use a self-invoking arrow function to generate the random number. This program can be used as a component 
in various games or applications that require a random number generator
*/

/*
const randomNumber = (() => {
    return Math.floor(Math.random() * 100) + 1;
})();

console.log(randomNumber);
*/

//----------------------------------------------------------------//

/*

17. Build a banking application

A banking application needs to manage customer accounts and transactions. The user detail is stored in an object with a keys name and balance. Write functions using object methods to update a customer's account balance based on a deposit or withdrawal.

*/

/*
// Define a customer object with name and balance properties
const customer = {
    name: "John Doe",
    balance: 1000,
    
    // Method to deposit money into the account
    deposit: function(amount) {
        this.balance += amount;
        console.log(`Deposit of ${amount} successful. New balance: ${this.balance}`);
    },
    
    // Method to withdraw money from the account
    withdraw: function(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrawal of ${amount} successful. New balance: ${this.balance}`);
        }
    }
};

// Example usage:
console.log("Initial balance:", customer.balance);
customer.deposit(500); // Deposit $500
customer.withdraw(200); // Withdraw $200
customer.withdraw(1500); // Attempt to withdraw more than available balance

*/

//--------------------------------------------------------------------//

/* 18. Change Text on Button click.

Create a simple HTML page with a heading and a button. The initial text must be “The most affordable learning platform”, use JavaScript to change the heading text to “PW Skills” when the button is clicked. The buttonmust 
toggle the text of a heading between "The most affordable learning platform" and "PW Skills" on each click.

*/

// This assignment question in index.html file.

//--------------------------------------------------------------//

/*
19. Validate Password

You are building a login form for a website and need to validate user input using JavaScript. The form has two input fields: email and password, and a submit button.

Your task is to implement JavaScript code that validates the email and password input fields. The email field should contain the "@" symbol. The password field should have a minimum length of 8 characters. If either of 
these conditions is not met, an error message “Invalid email or password!” should be displayed in red color as a paragraph text below the form. If the password is valid the message “Valid email and password!” must be 
displayed in green color as a paragraph text below the form.

Your code should run when the user clicks the submit button and should prevent the form from submitting if the input is invalid. The input type of email must be text and the input type of password must be password without any minLength attribute specified ChatGPT
Below is the HTML structure for the login form along with the JavaScript code to validate the email and password fields:

*/

// This Assignment code in valPass.html file

//---------------------------------------------------------------//

/*
20. Dynamically Adding List Items to an Ordered List

Visit "PwSlills" page and look for “What you'll learn” section. 
The section consists of a list of information on what you will be learning in the course. You are required to write a JavaScript program that stores a pre-existing array of list items. On each button click, the program should add a new list item in sequential order. The program should verify if any remaining items are available in the list item array and add the next item to the list accordingly. If no items are left, the function should display a message indicating that all items have been added.

*/

// Pre-existing array of list items
/*
const listItemsArray = [
  "HTML Basics",
  "CSS Styling",
  "JavaScript Fundamentals",
  "Backend Development",
  "Database Management",
  "API Integration",
  "Deployment",
];

// Function to add a new list item to the ordered list
function addListItem() {
  const olElement = document.querySelector(".what-youll-learn ol");
  const remainingItems = listItemsArray.slice(olElement.children.length);

  if (remainingItems.length > 0) {
    const newItem = document.createElement("li");
    newItem.textContent = remainingItems[0];
    olElement.appendChild(newItem);
  } else {
    alert("All items have been added.");
  }
}

// Find the button and attach the click event listener
const addButton = document.getElementById("addListItemButton");
addButton.addEventListener("click", addListItem);

*/

//------------------------------------------------------------//

/*
21. TODO App
Create a simple to-do app to add TODO items to the list through an input field and a button.

----- This solution code in toDo.html file----

----------------------------------------------------------------------

22. Progress Bar
Create a progress bar that fills up as the user scrolls down the page.

---- This solution code in ProgressBar.html file----
-----------------------------------------------------------------------


23. Change the color on click
Create a button that utilizes an array of colors and the Math.random method to change the background color 
of the page upon clicking.

---- This solution code in changeClrOnClick file----
----------------------------------------------------------------------

24. Text Highlighting
Using the Document Object Model (DOM), highlight all words in a paragraph element that are greater than 8 
characters. The highlighted words should be with a yellow background color.

---- This solution code in textHighlight.html file----
----------------------------------------------------------------------

25. Move the Image
The objective is to write a JavaScript program that enables an image to move according to the direction specified by the arrow keys. The program must be able to recognize and respond to the input from the arrow keys, and accordingly, update the position of the image on the screen. The program should be able to handle the movement of the image in all directions, including up, down, left, and right, in a smooth and responsive manner. Have a look at the event key codes before starting the project.

---- This solution code in moveImage.html file----
----------------------------------------------------------------------

*/