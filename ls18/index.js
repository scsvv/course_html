let array = [10, 0, 1, 2, 3, 4, true, 'hello'];
console.log(array);

//как вывести определёный елемент? Вывод 1
console.log(array[1]);

//как узнать длинну массива 
console.log(array.length)

//как вывести все елементы
for(let i = 0; i < array.length; i++){
    //console.log(i, array[i]);
}

console.log('----------------')

//как вывести все елементы
for(let i in array){
    //console.log(i, array[i]);
}

let random_list = [];
const size_of_list = 10; 

for(let i = 0; i < size_of_list; i++){
    //push - добавить элемент в массив. 
    random_list.push(Math.floor((Math.random())*10));
}
console.log(random_list);

//pop - удалить последний елемент в массиве.
random_list.pop();
console.log(random_list);

