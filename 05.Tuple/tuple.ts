// A good practice is to make your tuple readonly.
// Tuples only have strongly defined types for the initial values:

let data: [number, boolean, string];
data = [5, false, 'Coding Goes here'];

// We have no type safety in our tuple for indexes 3+
data.push('New');
console.log(data);
