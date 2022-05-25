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