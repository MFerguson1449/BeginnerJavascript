function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
   console.log('Running Calculate Bill!!');
   const total = billAmount + billAmount * taxRate + billAmount * tipRate;
   return total;
} 

const myTotal = calculateBill(100, 0.13);
//console.log(myTotal)

function sayHiTo(firstName) {
   return `Hello ${firstName}`;
}

//const greeting = sayHiTo('butt');

const myTotal3 = calculateBill(20 + 20 + 30 + 20, 0.15);

function doctorize(name) {
   return `Dr. ${name}`;
}

function yell(name = 'Butt') {
   return `HEY ${name.toUpperCase()}`;
}

const myBill4 = calculateBill(100, undefined, 0.20);
console.log(myBill4);