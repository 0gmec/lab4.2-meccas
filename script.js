//TASK 1

let shoppingList = [];
function addItem(item) {
    if (!shoppingList.includes(item)) {
        shoppingList.push(item);
        console.log(`${item} added to shopping list.`);
    }else {
        console.log(`${item} is already in the shopping list.`);
    }

    }
    

function removeLastItem (item) {
    shoppingList.pop(item)
}
removeLastItem()

//console.log(shoppingList)


function displayList() {
console.log("Shopping List:");
for (let i = 0; i < shoppingList.length; i++) {
    console.log("- " + shoppingList[i]);
}
}

addItem("soap");
addItem("pens");
addItem("tissue");
addItem("soap");
addItem("pens");

 console.log("Final shopping list:", shoppingList);
displayList();

//TASK 2

function filterItems (searchTerm) {
    return shoppingList.filter(function(item) {
return item.toLowerCase().includes(searchTerm.toLowerCase());
    });


}
console.log(filterItems("s"));
console.log(filterItems("pen"));
console.log(filterItems("onions"));