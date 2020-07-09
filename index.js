const readline = require("readline");
const generateMaze = require('./library/maze');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Hello this is application for generate Maze. Please fill the input")
console.log("# Noted: Height size same with width size (ratio 1:1)\n")

rl.question("Height & Width maze ? ", function(width) {
    width = parseInt(width)
    console.log('Height & Width maze : ' + width +'\n');
    const maze = generateMaze.generateMaze({ width: width, height: width, empty: ' ', wall: '@' });
    console.log(generateMaze.stringify(maze));
    rl.close();
});

rl.on("close", function() {
    console.log("\nThank's");
    process.exit(0);
});