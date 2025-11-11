const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation goes here
  let success = false; // Simulate success or failure

  if (success) {
    resolve("Operation successful!"); // Resolve the promise with a value
  } else {
    reject("Operation failed!"); // Reject the promise with an error
  }
});

myPromise.then((res)=>{
    console.log('result',res)
}).catch((err)=>{
    console.log('error',err)
})