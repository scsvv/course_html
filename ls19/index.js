//сощдание функции

//аргументы - значения, которые принимает функция при её заруске 
/*function sumOfNumber(a, b){
    const pi = 3.14; // переменная для функции и только.  
    console.log(a*b);    
}*/

function SQRT(a, b){
    return a * b
}
// 6 = 720
// 5! = 1*2*3*4*5 = 120 
// 1 * 2 * 3 * 6 * 18 * ... 
function Factorial(num){
    let fact = 1;
    if(num == 1){
        return 1;
    } 
    fact = num * Factorial(num - 1);
    return fact 
}
function sum(a = 10, b = 9){
    console.log(a+b);
}
function sum(a = 10, b = 9){
    console.log(a-b);
}
console.log(Factorial(5));

function AdultCheck(age){
    if(age < 18){
        return false
    }
    return true;
}

const p1 = SQRT(10, 5);
const p2 = SQRT(10, 4);
const p3 = SQRT(10, 3);
const p4 = SQRT(10, 2);
/*
    1. создается переменная 
    2. приваевается значение *
    2.1 вызыв функции 
    а = 10
    b = 5
    10 * 5 и воззращает 
    const p = 50
*/ 
console.log(p1, p2, p3, p4) 

console.log(AdultCheck(17))
console.log(AdultCheck(71))