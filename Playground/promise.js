var addSync = (a,b) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      }else {
        reject('Unable to add Numbers');
      }
    },1500);
  });
}

addSync(5,7).then((results) => {
  console.log('Results: ',results);
  return addSync(results,33);
}).then((results) => {
  console.log(results);
}).catch((errorMessage) => {
  console.log(errorMessage);
})

// var somePromise = new Promise((resolve,reject) => {
//   resolve('Hey it worked');
//   reject('Unable to fulfill promise');
// });
//
// somePromise.then((message) => {
//   console.log('Success:',message);
// },(errorMessage) => {
//   console.log('Error: ',errorMessage);
// });
