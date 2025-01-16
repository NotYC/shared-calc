import {addition} from '../add.js' ;
import {subtraction} from '../subtract.js' ;
import {multiplication} from "../multiply.js";
import {division} from "../division.js";

const num1 = parseFloat(prompt("Enter first number:\n",0));
const num2 = parseFloat(prompt("Enter second number:\n",0));


const choice = parseFloat(prompt("Enter number of choice:\n1 for addition\n2 for subtraction\n3 for multiplication\n4 for division\n>>>",0));
if (choice === 0){
    console.log(`Input your choice again.`);
}
else if (choice === 1){
    const ans = addition(num1, num2);
    console.log(`The addition of ${num1} and ${num2} result into:${ans}`);
    alert(`The addition of ${num1} and ${num2} result into:${ans}`)
}
else if (choice === 2){
    const ans = subtraction(num1, num2);
    console.log(`The subtraction of ${num2} from ${num2} result into:${ans}`);
}
else if (choice === 3){
    const ans = multiplication(num1, num2);
    console.log(`The multiplication of ${num1} and ${num2} result into:${ans}`);
}
else if (choice === 4){
    const ans = division(num1, num2);
    console.log(`The division of ${num1} by ${num2} result into:${ans}`);
}





