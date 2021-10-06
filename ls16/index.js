/*
var y = 12;
let x = 10;
const z = 11;
/*
let - это конструктор
x - это имя переменной (уникальное имя)
= - операция присвоения. 

console.log(x);
// изменить данные 
x = 'asd';
console.log(x);*/

//null undefined 0 - пустые 
let status = null; 
let r = -3000;
const age = 19;
const gender = 'male';

if(status) // не сработает
{
    console.log('hello');
}
if(r){ // сработатет, так как имеет знаечение 
    console.log(r);
}
if(0) //не срабатывает, тут ответ по значению 
{ 
    console.log(0);
}
if(0 == 0) //операция сравнение, тут ответ по результатц операции
{
    console.log(0 == 0);
}
if(undefined){ // не сравботает 
    console.log(undefined)
}
if(age > 18){  
    console.log(true);
}else{
    console.log(false);
}

if(age < 0){
    console.log('invalid value');
}else if(age < 18){
    console.log('so young');
}else if(age < 38){
    console.log('Where is your many?')
}else{
    console.log('OOO')
}

if(gender == 'male' && age >= 18){
    console.log('aaa')
}

if(gender == 'male' || age >= 18){
    console.log('ooo')
}

