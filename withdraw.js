document.getElementById("withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputValueById("withdrawField");
  const priviousWithdrawTotal = getElementValueById("withdrawMoney");
  const newWithdrawTotal = newWithdrawAmount + priviousWithdrawTotal;
  setTextElementValueById("withdrawMoney", newWithdrawTotal);

  const priviousWithdrawBlanceTotal = getElementValueById("blance-total");
  const newBlanceWithdrawTotal =
    priviousWithdrawBlanceTotal - newWithdrawAmount;
  setTextElementValueById("blance-total", newBlanceWithdrawTotal);
});
