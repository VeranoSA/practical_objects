function mostProfitableDay(profitDay){
  const dayMap = {};
  for (var i in profitDay){   
    const addDay = profitDay[i];
    dayMap[addDay.day] = 0;
  }
  
 for(var i in  profitDay){
    const addDay = profitDay[i];   
    var currentDeptTotal = dayMap[addDay.day];
    currentDeptTotal += addDay.sales;
    dayMap[addDay.day] = currentDeptTotal; 
  }
  var currentMaxDays = 0;
  var currentPro = "";
 
  for (const mostProfit in dayMap){
    const currentProDay = dayMap[mostProfit];
    if( currentProDay > currentMaxDays){
      currentMaxDays = currentProDay;
      currentPro = mostProfit;
    }
  }
  return  currentPro;
}
