function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => resolve([1, 2, 3, 4]), 1000); // Reduced initial delay to 1 second
  });
}
 
getNumbers()
  .then((numbers) => {
    return new Promise((resolve) => {
      const evens = numbers.filter((num) => num % 2 === 0); // Filter even numbers
      document.getElementById('output').textContent = evens.join(','); // Update the output with even numbers
      setTimeout(() => resolve(evens), 1000); // Wait 1 second
    });
  })
  .then((evens) => {
    const multiplied = evens.map((num) => num * 2); // Multiply even numbers by 2
    document.getElementById('output').textContent = multiplied.join(','); // Update the output with multiplied numbers