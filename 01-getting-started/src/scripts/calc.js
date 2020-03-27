// My Calculator

function insert(num) {
    document.form.number.value = document.form.number.value+num;
}
function equal(){
    var exp = document.form.number.value;
    if(exp){
    document.form.number.value=eval(exp);
    }
}
function clean(){
    document.form.number.value="";
}
function back(){
    var exp=document.form.number.value;
    document.form.number.value = exp.substring(0, exp.length-1);
}


// Tax Calculator
var $ = function (myfTax) {
    return document.getElementById(myfTax);
    }
var fcalculate_tax = function() {
var income = $("income").value;
$("ftax").value = fcalcTaxes(income);

// Federal Tax
function fcalcTaxes(amount){
    if(amount > 214368){
    ftax = ((amount - 214368)*0.33) + ((214368-150473)*0.29) + ((150473-97069)*0.26) + ((97069-48534)*0.205) + ((48534)*0.15);
    }
    else if( amount > 150473){
    ftax = ((amount - 150473)*.29) + ((150473-97069)*0.26) + ((97069-48534)*0.205) + ((48534)*0.15);
    }
    else if(amount > 97069){
    ftax = ((amount - 97069)*0.26) + ((97069-48534)*0.205) + ((48534)*0.15);
    }
    else if(amount > 48534){
    ftax = ((amount - 48534)*0.205) + ((48534)*.15); 
    }
    else{
    ftax = (amount *0.15);
    }
    ftax = ftax.toFixed(2);
    return ftax;
}
}
// window.onload = function () {
//     $("calculate").onclick = fcalculate_tax;
// }
// Provincial Tax
// var pcalculate_tax = function() {
// $("ptax").value = pcalcTaxes(income);
// function pcalcTaxes(amount){
//         if(amount > 314928){
//         ptax = ((amount - 314928)*0.15) + ((314928-209952)*0.14) + ((209952-157464)*0.13) + ((157464-131220)*0.12) + ((131220)*0.10);
//         }
//         else if( amount > 209952){
//         ptax = ((amount - 209952)*.14) + ((209952-157464)*0.13) + ((157464-131220)*0.12) + ((131220)*0.10);
//         }
//         else if(amount > 157464){
//         ptax = ((amount - 157464)*0.13)  + ((157464-131220)*0.12) + ((131220)*0.10);
//         }
//         else if(amount > 131220){
//         ptax = ((amount - 131220)*0.12) + ((131220)*.10); 
//         }
//         else{
//         ptax = (amount *0.10);
//         }

//     ptax = ptax.toFixed(2);  
//     return ptax;
// }
// }
window.onload = function () {
    $("calculate").onclick = fcalculate_tax;
}
// window.onload = function () {
//     $("calculate").onclick = pcalculate_tax;
// }


// My Calculator


