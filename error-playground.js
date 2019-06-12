// W3AI - The Engine / Network / Protocol for Continuous Try / Deal / Resume
// Try ideas/services | Deal with issues/errors | Resume Projects/Life

// run experiments with: npm error-playground.js
// ToDo: Build single code with a loop for 2/multi twin / tangled servers 
// that will continuously check restart multiply each other !!!

const sum = (a, b) => {
    if (a && b) {
        return a + b;
    }
    throw new Error('Invalid arguments');
};

try {
    console.log(sum(1));
} catch (error) {
    console.log('Error occured!')
    // console.log(error);
}

console.log(sum(1));
console.log('This works!');
