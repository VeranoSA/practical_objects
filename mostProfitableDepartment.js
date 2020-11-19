function mostProfitableDepartment(profitDep){
  const deptMap = {};
  for (var i in profitDep){
   const addDept = profitDep[i];
   deptMap[addDept.department] = 0;
  }
 for(var i in profitDep){
   const addDept = profitDep[i];
    
    var currentDeptTotal = deptMap[addDept.department];
    currentDeptTotal += addDept.sales;
    deptMap[addDept.department] = currentDeptTotal; 
  }
  var currentMaxsales = 0;
  var currentPro = "";
 
  for (const mostProfit in deptMap){
    const currentProSales = deptMap[mostProfit];
    if( currentProSales > currentMaxsales){
      currentMaxsales = currentProSales;
      currentPro = mostProfit;
    }
  }
  return currentPro;
}
var salesData = [
    {department: 'hardware', sales: 4500, day: 'Monday'},
    {department: 'outdoor', sales: 1500, day: 'Monday'},
    {department: 'carpentry', sales: 5500, day: 'Monday'},
    {department: 'hardware', sales: 7500, day: 'Tuesday'},
    {department: 'outdoor', sales: 2505, day: 'Tuesday'},
    {department: 'carpentry', sales: 1540, day: 'Tuesday'},
    {department: 'hardware', sales: 1500, day: 'Wednesday'},
    {department: 'outdoor', sales: 8507, day: 'Wednesday'},
    {department: 'carpentry', sales: 8009, day: 'Wednesday'},
    {department: 'hardware', sales: 12000, day: 'Thursday'},
    {department: 'outdoor', sales: 18007, day: 'Thursday'},
    {department: 'carpentry', sales: 6109, day: 'Thursday'},
    {department: 'hardware', sales: 7005, day: 'Friday'},
    {department: 'outdoor', sales: 12006, day: 'Friday'},
    {department: 'carpentry', sales: 16109, day: 'Friday'}
];
console.log(mostProfitableDay(salesData));
