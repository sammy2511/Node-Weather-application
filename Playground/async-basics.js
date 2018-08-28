console.log('starting');

setTimeout(() =>{
  console.log('Inside 1st timeout');
},2000);

setTimeout(() =>{
  console.log('inside 2nd timeout');
},0);

console.log('finishing up');
