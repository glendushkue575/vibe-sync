/* Filename: ComplexCodeExample.js */

// This code calculates the Fibonacci sequence up to a given number using memoization.
// It demonstrates advanced concepts like recursion, memoization, and dynamic programming.

// Function to calculate the Fibonacci sequence using memoization
function fibonacciMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}

// Example usage of the fibonacciMemo function
const result = fibonacciMemo(10);

console.log(`Fibonacci sequence up to 10: ${result}`);

// Output:
// Fibonacci sequence up to 10: 55

// Additional functions

// Function to check if a number is prime
function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;

  if (number % 2 === 0 || number % 3 === 0) return false;

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

// Example usage of the isPrime function
console.log(`Is 17 a prime number? ${isPrime(17)}`);

// Output:
// Is 17 a prime number? true

// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Example usage of the factorial function
console.log(`Factorial of 5: ${factorial(5)}`);

// Output:
// Factorial of 5: 120

// This code also demonstrates proper code organization with functions and comments.