const add = (a, b) => {
    return a + b;
}
const mult = (a, b) => {
    return a * b;
}

const name = "node data"

// module.exports.name = name;
// module.exports.add = add;
// module.exports.mult = mult;

module.exports = {name, add, mult}