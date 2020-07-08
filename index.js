const readline = require("readline");
const generateMaze = require('./library/maze');
const dependency = require('./library/dependency');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Hello this is application generate Maze. Please fill the input")
console.log("# Noted: Height size same with width size")

rl.question("Field maze ? ", function(width) {
    console.log('Width: ' + width);
    const maze = generateMaze({ width: parseInt(width), height: parseInt(width), empty: ' ', wall: '@' });
    console.log(dependency.stringify(maze));
    rl.close();
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});