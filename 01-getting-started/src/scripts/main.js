import functions from './functions.js';
// **********
//
// Add the event listeners
// 

// idNumber.addEventListener('change', (() => {
//     idNumberSize.textContent = functions.size(idNumber.value);
// }));

// addbutton.addEventListener('click', (() => {
// div2.textContent = functions.add(document.getElementById("num1").value,document.getElementById("num2").value);
// }));


// idNumber.addEventListener('change', (() => {
// idNumberSize.textContent = functions.size(idNumber.value);
// }));

// 100D Competencies - working with Arrays
let arr = [];

idArrAdd.addEventListener("click", e =>  {
    arrText.textContent = functions.arrAdd(arr, inputArrayBox.value);
  });
  idArrShow.addEventListener("click", e =>  {
    arrText.textContent = functions.arrShow(arr, inputArrayBox.value);
  });
  idArrTotal.addEventListener("click", e =>   {
    arrText.textContent = functions.arrTotal(arr, inputArrayBox.value);
  });
  idArrClear.addEventListener("click", e =>   {
    arrText.textContent = functions.arrClear(arr, inputArrayBox.value);
  });

// 100D Competencies - working with dictionaries
idDictLookup.addEventListener("click", e => {
  dictText.textContent = functions.getCapital(inputDictBox.value);
});


