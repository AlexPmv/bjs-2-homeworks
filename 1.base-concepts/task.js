"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let diskr = Math.pow(b, 2) - (4*a*c);
  if (diskr === 0) {
    if (a === 0) {
      arr.push(0);
    } else {
      arr.push((-b/(2*a)));
    };
  } else if (diskr > 0) {
    if (a === 0) {
      arr.push(0, 0);
    } else {  
      arr.push(((-b + Math.sqrt(diskr))/(2*a)), ((-b - Math.sqrt(diskr))/(2*a)));
    };
  };

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount = '';
  let mortgageParam = {
    percent: percent,
    contribution: contribution,
    amount: amount,
    creditBody: amount - contribution,
    monthCount: Math.trunc((date.getTime() - Date.now())/2592000000)
  };  
  let mortgageParamRuName = {
    percent: 'Процентная ставка',
    contribution: 'Начальный взнос',
    amount: 'Общая стоимость',
    creditBody: 'Тело кредита',
    monthCount: 'Количество месяцев'
  };

  if (mortgageParam.percent < 1) {
    mortgageParam.percent = 0.01;
    alert(`При расчете процент был изменен на минимальное значение: 1%`);
  } else if (mortgageParam.percent > 100) {
    mortgageParam.percent = 1;
    alert(`При расчете процент был изменен на максимальное значение: 100%`);
  } else  if (mortgageParam.percent >= 1) { 
    mortgageParam.percent = (mortgageParam.percent/100).toFixed(2);
  };
  
  let mortgageParamKeys = Object.keys(mortgageParam);
  for (let i = 0; i < mortgageParamKeys.length; i++) {
    let KeyName = mortgageParamKeys[i];
    let paramValue = mortgageParam[KeyName];
    mortgageParam[KeyName] = +mortgageParam[KeyName];
    if (isNaN(mortgageParam[KeyName])) {
      totalAmount = `Параметр "${mortgageParamRuName[KeyName]}" содержит неправильное значение "${paramValue}"`;
      return totalAmount;
    };
  };

  if (mortgageParam.creditBody < 0) {
    totalAmount = `Сумма кредита меньше первоначального взноса`;
    return totalAmount;
  };

  if (mortgageParam.monthCount <= 0) {
    totalAmount = `Указан срок меньше 1 месяца`;
    return totalAmount;
  };

  let percentInMonth = mortgageParam.percent/12;
  let monthPayment = mortgageParam.creditBody * (percentInMonth + (percentInMonth / ((Math.pow((1 + percentInMonth), mortgageParam.monthCount) - 1))));
  totalAmount = +((monthPayment * mortgageParam.monthCount).toFixed(2));
  return totalAmount;
};
