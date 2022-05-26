let incomes=[100,200,300];
let total=0;
for (const income of incomes){
    console.log(income);
    total=total+income;
}

console.log(total);

let slogan="vande matharam"
for (const char of slogan ){
    console.log(char);
}


/*******spread opeartor******************* */
let x1=[1,2,3,4,5,6,7,8,9];
let x2=[...x1];
console.log(`x1=${x1}`);
console.log(`x2=${x2}`);
x1.push(true);
console.log(`x1=${x1}`);


/***initialization of object */
let example1={
    firstname:'Amit',
    lastname:"jain"
}

 let example2={...example1};
console.log(example2);
example2={...example1}
console.log(example2);

/***Rest opeartor*/
//can use when you are not sure how many values are going to input

function add(...nums){
    let tot=0;
    console.log(nums);
   
    for (n of nums){
        tot=tot+n;
    }
    console.log(tot)
}

add(1,2,3,4,5,6,7);