console.log("Hello World!\n==========\n");
// for (int i = 1000; i >= -1000; i--)
//In this exercise, you will be counting from 1 - 100. For each odd number, you will print the number to the console. If the number is even, do nothing.

//1. Create  `for` loop that evaluates numbers from 1 to 100.
//2. Inside the loop body, write an `if/else` selection statement that checks whether a number is odd
//3. If the number is odd, then print the number to the console, otherwise do nothing and continue to the next number

//for (let bottlesOnTheWall = 99; bottlesOnTheWall >= 0; bottlesOnTheWall--) {
 //   if (bottlesOnTheWall) {
//      console.log(`${bottlesOnTheWall} bottles of milk on the wall...`);
   //   } else {
  //      console.log(`No more bottles of milk on the wall!`);

  for (x = 1; x <= 100; x++) {

    if( x % 2 ==! 0)
    {
        console.log(x);
    } else ;
    
  }




// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

//1. Create a `for` loop that evaluates numbers from 1 to 100 like the problem above.
//2. Write a `if/else` selection statement inside the body of the the loop that checks the following:
 //  - If the number is divisible by 3, then console.log `'FIZZ'`
 //  - If the number is divisible by 5, then console.log `'BUZZ'`
 //  - If the number is divisible by both 3 and 5, then console.log `'FIZZBUZZ'`

//Ex: `15` would print `'FIZZBUZZ'`, `33` would print `'FIZZ'`, and `35` would print `'BUZZ'`

for (x = 1; x <= 100; x++) {

    if( x % 3 == 0)
    {
        console.log( 'Fizz');

    } else if (x % 5 == 0)

    {
        console.log("Buzz");
    }
    else if( x % 3 == 0 && x % 5 == 0)
    {
        console.log("FizzBuzz")
    }
    else
    console.log(x);
  }

  console.log("EXERCISE 1: DO WHILE \n==========\n");


let num = 1;
do {
    if (num % 3 == 0 && num % 5 == 0)
    {
        console.log("FIZZBUZZ")
    }
    else if(num % 3 == 0)
    {
        console.log("FIZZ") 
    }
    else if (num % 5 == 0)
    {
        console.log("BUZZ")

    }
    else
    {
        console.log(num);
    }
    num++;
}
 while (num <= 100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

//In this exercise, you will count from iterate from 1 to n. If you iterate over a given value, then break out the loop and print "Found value!". If you do not find the value in the given range, print "Did not find value".

//1. Start with the following code:


let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500


let i = 0;
for(; i < n; i++)
{
    if (i == value) {
    console.log("Found Value")
    break;
    }
}
if (i != value) {
    console.log("Did not find value");
}
//2. Create a `for` loop that iterates from 0 to n
//3. If your current iteration is equal to `value`, then print "Found value!", and `break` out of the loop
//4. If you do not ever find the value and break out of the loop, then after the loop is finished, print "Did not find value"

//We already completed the FIZZBUZZ challenge. Now repeat the logic for the FIZZBUZZ challege with values provided in variables.

////1. Start with the following code:

//```js
//let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
//let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
//let n = Math.round(Math.random() * (1000 - 1) + 1);
//let start = Math.round(Math.random() * (10 - 1) + 1);
//```

//2. Re-implement exercise 2, but use `start` as the initial value for `i`, `n` as the range limit in `i <= n`, and `fizzDivisor` and `buzzDivisor` as the dependent values for determining "FIZZ" and "BUZZ" print messages.



let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= end; i++)
{
    if (i %  fizzDivisor == 0 && i % buzzDivisor == 0)
    {
        console.log(`${i} FIZZBIZZ`)
    }
    else if(i % buzzDivisor == 0)
    { 
        console.log(`${i} BUZZ`)
    }
    else if(i % fizzDivisor == 0)
    { 
        console.log(`${i} BUZZ`)
    }
    else 
    {
        console.log(`${i}`)
    }
} 