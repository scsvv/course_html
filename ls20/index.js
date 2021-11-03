/*good = {
    title: 'Nike Jordan Air', 
    price: 123, 
    quantity: 19,      
    social_media: {
        facebook: null, 
        telegram: null
    }, 
    f: {
        f1: {
            f2: {
                f3: {
                    text: 'boom'
                }
            }
        }
    }
}

console.log(good.f.f1.f2.f3.text);




// Massive a[0] = ... 0 is key


*/
const $alert_caller =  document.querySelector('#alert_caller');
console.log($alert_caller);

const $rating = document.querySelectorAll('.rating');
console.log($rating);

const $root = document.querySelector('#root');

let counter = 0;

document.addEventListener("mouseup", function(e){
    console.log(`u clicked ${++counter}`)
    console.log(e);
})