console.log('starting app')

setTimeout(() => {
  console.log('Inside of callback')
}, 2000)

setTimeout(() => {
  console.log('Second Inside of callback')
}, 0)

console.log('Finishing up')


/*
Call stack registers synchronous code

NodeAPIs takes in async functions and sends callbacks to 

Callback queue

Event Loop checks if call stack empty before moving return results from 
callback queue to call stack

Callback function is defined as a function that gets passed as an argument to another function
and is executed after some event happens
