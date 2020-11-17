function printShoppingList(){

var shoppingList = [
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 19.50 }
];
  console.log('Shopping list:');
for(var i=0;i<shoppingList.length;i++){
    var listItem = shoppingList[i];
    console.log("*" + " " + listItem.itemName + " " + "@" + " " + "R" + listItem.price.toFixed(2));
  }
}
