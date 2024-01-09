//starting operating system process
console.log("first");
//async function
setTimeout(() => {
  console.log("second");
}, 0); //even with timeout of 0 sec its not executed immediately
console.log("third");
//completed and existed operating system process
