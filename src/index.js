import numeral from 'numeral';

const value = numeral(1000000).format("$0,0.00");
console.log(`I would love to have ${value} in my bank acount`);
