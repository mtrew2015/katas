// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. 
//The returned inventory array should be in alphabetical order by item.

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

const updateInventory = (curInv, newInv) => {
    for(let item in newInv) {
        let itemName = newInv[item][1];
        let itemQuantity = newInv[item][0];
        let itemFound = false;
        for(let i in curInv) {
            if(curInv[i][1] === itemName) {
                curInv[i][0] += itemQuantity;
                itemFound = true;
            }
        }
        if(!itemFound) {
            curInv.push(newInv[item]);
        }
    }
    return curInv.sort((a, b) => a[1] > b[1] ? 1 : -1);
}

console.log(updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]))