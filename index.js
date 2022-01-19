const submitBtn = document.querySelector('.submit-btn');
const formInputs = document.querySelectorAll('.my-form input');
const tableBody = document.querySelector('.my-table tbody');
const form = document.querySelector('.my-form');

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();

  const genderRadioValue = document.querySelector("input[name='gender']:checked").value;
  const checkedBoxes = document.querySelectorAll("input[type='checkbox']:checked");

  const checkedValues = [];

  checkedBoxes.forEach(checkedBox => {
    checkedValues.push(checkedBox.value);
  });

  const tr = document.createElement("tr");

  formInputs.forEach(input => {
    const th = document.createElement("th");
    if (input.type === "text" || input.type === "number") {
      th.innerText = input.value;
      tr.appendChild(th);
    }
  });

  const genderTh = document.createElement("th");
  genderTh.innerText = genderRadioValue;

  const foodItemsString = checkedValues.join(' ');
  const foodItemsTh = document.createElement("th");
  foodItemsTh.innerText = foodItemsString;

  tr.appendChild(genderTh);
  tr.appendChild(foodItemsTh);

  tableBody.appendChild(tr);

  form.reset();

})
