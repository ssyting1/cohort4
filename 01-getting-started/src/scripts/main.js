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

document.getElementById("arrAdd").addEventListener("click", function() {
    arrText.textContent = functions.arrayAdd(inputArrayBox.value);
  });

  document.getElementById("arrShow").addEventListener("click", function() {
    arrText.textContent = functions.arrayShow(inputArrayBox.value);
  });

//   document.getElementById("arrTotal").addEventListener("click", function() {
//     arrText.textContent = functions.arrayTotal(inputArrayBox.value);
//   });

//   document.getElementById("arrClear").addEventListener("click", function() {
//     arrText.textContent = functions.arrayClear(inputArrayBox.value);
//   });