//A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces. Object literals encapsulate data, enclosing it in a tidy package. This minimizes the use of global variables which can cause problems when combining code


const address={
    firstname:'vijesh',
    secondname: 'vijayan',
    House: 'Bluejay',
    Pin:560073
}

//const {firstname,secondname}=address;
//console.log(firstname);
const {firstname:fn,secondname:sn}=address;
console.log(`${fn} ${sn}`);