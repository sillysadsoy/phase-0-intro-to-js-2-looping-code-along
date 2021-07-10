//BIRTHDAY----------------------------------------------------------
for (let age = 30; age < 40; age ++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
}
//GIFTS----------------------------------------------------------
const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gifts) {

    for(let i =0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        //debugger;
    }

    return gifts;
}

wrapGifts(gifts);
//THANKYOUS----------------------------------------------------------
/*const names = ["Ada", "Brendan", "Ali"];
const events = ["birthday", "house party", "wake"];
const newArray = [];

function writeCards(names, events) {

    for(let i = 0; i < names.length; i++) {
        newArray.push(`Thank you ${names[i]} for coming to my ${events[i]}! I appreciated your presence.`);
        debugger;
    }

    return newArray;

}

console.log(writeCards(names, events));*/
//-----------------------------------------------------------
const names = [];
const newArray = [];

function writeCards(names) {

    for(let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        debugger;
    }

    return newArray;

}

//console.log(writeCards(names, events));
//COUNTING!----------------------------------------------------------

function countDown(number) {

    while(number >= 0) {
        console.log(number);
        number--;
    }

}

//countDown(0);
