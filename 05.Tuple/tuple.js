// A good practice is to make your tuple readonly.
// Tuples only have strongly defined types for the initial values:
var data;
data = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
data.push('New');
console.log(data);
