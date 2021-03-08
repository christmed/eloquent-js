let gridSize = 8;
let pattern = "";

for (let i = 1; i <= gridSize; i++) {
    for (let c = 1; c <= gridSize; c++) {
        if (i % 2 != 0) {
            if (c % 2 != 0) {
                pattern += " ";
            }
            else {
                pattern += "#";
            }
        }
        else {
            if (c % 2 != 0) {
                pattern += "#";
            }
            else {
                pattern += " ";
            }
        }
        if (pattern.length == gridSize) {
            console.log(pattern);
        }
    }
    pattern = "";
}