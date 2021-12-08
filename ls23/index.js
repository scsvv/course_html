let sum = 0;
let a = null;
let b = null;
let action = null; 

const $screen = document.querySelector('#screen');
const $zero = document.querySelector('.zero');
const $one = document.querySelector('.one');
const $two = document.querySelector('.two');
const $three = document.querySelector('.three');
const $four = document.querySelector('.four');
const $five = document.querySelector('.five');
const $six = document.querySelector('.six');
const $seven = document.querySelector('.seven');
const $eight = document.querySelector('.eight');
const $nine = document.querySelector('.nine');

const $plus = document.querySelector('.plus');
const $minus = document.querySelector('.minus');
const $eq = document.querySelector('.eq');

$screen.innerHTML = sum; 

function updateScreen(num){
    sum = sum * 10 + num; 
    $screen.innerHTML = sum; 
}

function actionMod(){
    if(action && a === null){
        a = sum;
        sum = 0;   
    }else if(a && action === "+"){
        b = sum;
        sum = a+b;
    }else if(a && b == null && action === "-"){
        b = sum;
        sum = a-b;
        b = null;
    }
    $screen.innerHTML = sum;

}   



document.addEventListener("click", function(event){
    switch(event.target){
        case $one: 
            updateScreen(1);
            break;
        case $two: 
            updateScreen(2);
            break;
        case $three: 
            updateScreen(3);
            break;
        case $four: 
            updateScreen(4);
            break;
        case $five: 
            updateScreen(5);
            break;
        case $six: 
            updateScreen(6);
            break;
        case $seven:
            updateScreen(7);
            break;
        case $eight:
            updateScreen(8);
            break;
        case $nine:
            updateScreen(9);
            break;
        case $zero: 
            updateScreen(0);
            break;
        case $plus:
            action = "+";
            actionMod();
            break;
        case $minus:
            action = "-";
            actionMod();
        case $eq: 
            console.log("=");
    }    
})

