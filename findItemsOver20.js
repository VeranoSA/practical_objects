function findItemsOver20(fruitList){
  var overTwenty = [];
  
  for(i in fruitList){
  if(fruitList[i].qty > 20){
     	overTwenty.push(fruitList[i]);	
     }
  }
  return overTwenty;
}
var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];
console.log(findItemsOver20(itemList, 20));
