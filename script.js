//TASK 1

let shoppingList = [];
function addItem(item) {
    if (!shoppingList.includes(item)) {
        shoppingList.push(item);
        console.log(`${item} added to shopping list.`);
    } else {
        console.log(`${item} is already in the shopping list.`);
    }

}


function removeLastItem(item) {
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

function filterItems(searchTerm) {
    return shoppingList.filter(function (item) {
        return item.toLowerCase().includes(searchTerm.toLowerCase());
    });


}
// console.log(filterItems("s"));
// console.log(filterItems("pen"));
// console.log(filterItems("onions"));


//TASK 3    

let myList = [];
function addItem() {
    const itemInput = document.getElementById("itemInput");
    const itemText = itemInput.value.trim();

    if (itemText.length > 0) {
        myList.push(itemText);
        itemInput.value = " ";

        const shoppingList = document.getElementById('shoppingList');
        const listItem = document.createElement('li');
        listItem.textContent = itemText;
        shoppingList.appendChild(listItem);
    }
}
    function removeItem() {
        if (myList.length> 0) {
            myList.pop();
            const shoppingList = document.getElementById('shoppingList');
            shoppingList.removeChild(shoppingList.lastChild);
        }

    }





