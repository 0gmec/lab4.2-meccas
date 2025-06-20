//TASK

let shoppingList = ["soap","pens","tissue"];
function addItem(item) {
    shoppingList.push(item);
}
addItem("soap")
addItem("pens")
addItem("tissue")

//console.log(shoppingList);

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
displayList()
