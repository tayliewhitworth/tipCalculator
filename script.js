const billInput = document.getElementById("bill");

const percentBtns = document.querySelectorAll(".btn-selector");

const tipAmount = document.getElementById("tip-amount");

const numOfPeps = document.getElementById("numPeople");

const totalAmount = document.getElementById("total");

const resetBtn = document.querySelector(".resetBtn");

const customTip = document.getElementById("custom");

percentBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let bill = billInput.value;
    let tipPercent = parseFloat(btn.innerHTML) / 100;
    let numberOfPeople = numOfPeps.value;
    let total = bill * tipPercent;
    let tipPerPerson = total / numberOfPeople;
    let totalPerPerson = bill / numberOfPeople + tipPerPerson;
    if (bill && numberOfPeople) {
      tipAmount.innerText = `$${tipPerPerson.toFixed(2)}`;
      totalAmount.innerText = `$${totalPerPerson.toFixed(2)}`;
      resetBtn.disabled = false;
    } else {
      tipAmount.innerText = "$0.00";
      totalAmount.innerText = "$0.00";
    }
    if (customTip.value !== "") {
      let customTotal = bill * (parseFloat(customTip.value) / 100);
      let customTipPerPerson = customTotal / numberOfPeople;
      let customTotalPerPerson = bill / numberOfPeople + customTipPerPerson;
      tipAmount.innerText = `$${customTipPerPerson.toFixed(2)}`;
      totalAmount.innerText = `$${customTotalPerPerson.toFixed(2)}`;
      customTip.value = "";
    }
  });
});

resetBtn.addEventListener("click", () => {
  tipAmount.innerText = "$0.00";
  totalAmount.innerText = "$0.00";
  customTip.value = "";
  billInput.value = "";
  numOfPeps.value = "";
  resetBtn.disabled = true;
});
