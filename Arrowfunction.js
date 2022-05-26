/*function magic (x,y){
    console.log(x);
         let div= function(){ return x+y;};
       console.log(div());
       return(x*y/div());
    }

     
console.log (magic(2,3));
let hello = function() {
    return 100;
  }
  console.log (hello());
*/


  //Now rewrite above one using => function
  function magic (x,y){
    console.log(x);
         let div= ()=>{  x+y;};
       console.log(div());
       return(x*y/div());
    }

    console.log (magic(2,3));
  //*********************************************************** */
  /*The callback itself takes in four arguments:

  totalResult: This is the final total of returned values of all callbacks
  currValue: The value of the current element
  currIndex: The index of the currValue
  array: The array on which the reduce method is being applied*/


  console.log('*****reduce********')
/*

  const numbers = [10,20,5];
 console.log (numbers.reduce(myFunc));
 
  function myFunc(total, num) {
    return total - num;
  }
*/

  const numbers = [10,20,5];
 let x=numbers.reduce((total,num)=>total-num);
  console.log (x);
  