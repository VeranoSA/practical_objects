function shoppingList(list){
  var tPrice = 0;
  for (i in list){
    tPrice = tPrice + list[i].price;
  }
  return tPrice;
}
var shoppingList1 = [
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 19.50 }
];

var shoppingList2 = [
    { itemName : 'Apples', price : 7.50 },
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 23.00 },
    { itemName : 'Bread', price : 9.50 }
];

console.log(shoppingList(shoppingList2));
console.log(shoppingList(shoppingList1));

