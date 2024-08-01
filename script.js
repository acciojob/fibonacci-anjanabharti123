function fibonacci(num) {
// your code here
	if (num === 0) return 0;

  // Initialize the first two Fibonacci numbers
  let a = 0, b = 1, c;

  // Iterate to compute Fibonacci numbers up to num
  for (let i = 2; i <= num; i++) {
    c = a + b; // Compute the next Fibonacci number
    a = b;     // Update a to the previous Fibonacci number
    b = c;     // Update b to the new Fibonacci number
  }

  // Return the nth Fibonacci number
  return b;
}

module.exports = fibonacci;
