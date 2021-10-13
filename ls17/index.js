let i = 0;
//внешнее условие 
while(i < 3){
    console.log(i++);
}

/*
example 

let status = null;
status = 'pending'; 
while(status == 'pending'){
    loader.show();
}

isGame = true;

while(isGame){
    //
}
let x = 517;
while(true){
    console.log(x*=x**x)
}
*/ 
/*
for(let j = 0; j < 10; j++){
    console.log('j = ' + j); 
}

*/
console.log('----')
for(let j = 1; j < 10; j+=2){
    
    if(j == 3){
        console.log("it's 3");
        continue;
    }
    if(j == 5){
        console.log("it's 5");
        break;
    }
    console.log(j)
}
