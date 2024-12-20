function foo(a) {
  if (a === null || a === undefined) {
    return 0;
  } 
  if (typeof a.length !== 'number') {
    return 0; // Or throw an error: throw new Error('Invalid input: a.length must be a number');
  }
  return a.length;
}