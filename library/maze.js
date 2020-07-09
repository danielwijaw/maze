module.exports = {
    generateMaze: function(options) { 
        const {
            width,
            height,
            empty: EMPTY = " ",
            wall: WALL = "@",
        } = options

        if(!width || !height){
            throw new Error('Width & Height not Defined !');
            return false;
        }

        // Generate Create Wall
        const mazeReturn = new Array(height)
        for (var y = 0; y < mazeReturn.length; y++) {
            mazeReturn[y] = new Array(width).fill(WALL);
        }

        function viewWall(field, x, y, defaultValue = EMPTY) {
            if (x < 0 || y < 0 || x >= width || y >= height) {
                return defaultValue;
            }
            return field[y][x];
        }

        const walls = [];
        const visited = [];
        function walkingWall(x, y) {
            mazeReturn[y][x] = EMPTY;
            visited.push({x, y})
            
            const pickOneCandidates = [];
            const candidates = [
                { x: x - 1, y }, //Left
                { x: x + 1, y }, //Right
                { x, y: y - 1 }, //Top
                { x, y: y + 1 }, //Down
            ];
            for (const wall of candidates) {
                if (viewWall(mazeReturn, wall.x, wall.y) == WALL) {
                    if(wall.x > 0 && wall.y > 0 && wall.x < width && wall.y < height){
                        if(wall.x%2){
                            pickOneCandidates.push(wall);  
                        }else{
                            if(wall.y%2){
                                pickOneCandidates.push(wall);
                            }
                        }
                    }
                }
            }

            var filteredArray = pickOneCandidates.filter( function( val ) {
                for (var i = 0; i < visited.length; i++){
                    if (visited[i].x == val.x && visited[i].y == val.y ){
                        
                    }else{
                        return visited
                    }
                }
            });
            const randomNumber = Math.floor(Math.random() * (filteredArray.length)) + 0;
            if(filteredArray[randomNumber]){
                walls.push(filteredArray[randomNumber]);
            }
        }

        walkingWall(width-width+1, height-height);

        for(var wl = 0; wl < walls.length; wl++){
            var x = walls[wl].x;
            var y = walls[wl].y;
            const next = walkingWall(x, y);
        }

        return mazeReturn;
    },
    stringify: function(mazeJson){
        return mazeJson.map((row) => `${row.join('')}`).join('\n');
    }
}