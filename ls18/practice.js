//найти все простые число от 1 - 100 

const max = 10;
let list_of_prime_number = [];

for(let number = 1; number <= max; number++){
    //цикл первого уровня генерирует число 
    if(number == 1 || number == 2 || number == 3){
        list_of_prime_number.push(number);
        continue;
    }

    for(let i = 2; i < number; i++){
        //цикл который генерирует число для проверки
        if(number % i == 0){
            break;
        }else if(number == i + 1){
            list_of_prime_number.push(number);
        }
    }
}
console.log('asd')
console.log(list_of_prime_number);

let sum = 0;
let multy = 1;
const min_value = 1;
const max_value = 5;

for(let i = min_value; i <= max_value; i++){
    sum += i; //i++ i+= 2
    multy *= i;   
}
console.log(sum, multy);

let first_string = "Великолепный век";
let second_string = "";

/*for( перебор в обратном порядке ){
    second_string.push(letter);
}
*/