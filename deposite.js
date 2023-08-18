document.getElementById("deposite").addEventListener("click", function () {
  const newDepositedAmount = getInputValueById("depositeField");

  const priviousDepositeTotal = getElementValueById("depositeMoney");
  //    calculate New deposited Total
  const newDepositeTotal = newDepositedAmount + priviousDepositeTotal;

  setTextElementValueById("depositeMoney", newDepositeTotal);

  // get previous blance by using the function
  const priviousBlanceTotal = getElementValueById("blance-total");
  const newBlanceTotal = priviousBlanceTotal + newDepositeTotal;
  setTextElementValueById("blance-total", newBlanceTotal);
});
