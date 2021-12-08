const $alert_caller =  document.querySelector('#alert_caller');
console.log($alert_caller);

const $buy = document.querySelector('#buy');
console.log($buy);

const $save = document.querySelector('#save');
console.log($save);

document.addEventListener('click', function(event){
    
    switch(event.target){
        case $alert_caller: 
            console.log('allert');
            break;
        case $buy:
            console.log('buy');
            break;
        case $save:
            console.log('save');
            break;        
    }

/*    if(event.target === $alert_caller){
        console.log('allert'); 
    }else if(event.target === $buy){
        console.log('buy');
    }
*/
})
