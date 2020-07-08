module.exports = {
    stringify: function(mazeJson){
        return mazeJson.map((row) => `${row.join('')}`).join('\n');
    }
};