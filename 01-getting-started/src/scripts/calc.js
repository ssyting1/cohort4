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
    var $ = function (myTax) {
    return document.getElementById(myTax);
    }
var calculate_tax = function() {
    var income = $("income").value;
    $("tax").value =  calcTaxes(income);
    function calcTaxes(amount){
        if(amount >= 214368){
        tax = ((amount - 214368)*.33) + ((214368-63895)*.29) + ((63895-53404)*.26) + ((53404-48534)*.205) + ((48534)*.15);
        }
        else if( amount >= 63895){
        tax = ((amount - 63895)*.29) +((63895-53404)*.26) + ((53404-48534)*.205) + ((48534)*.15);    
        }
        else if(amount >= 53404){
        tax = ((amount - 53404)*.26).toFixed(2) + ((53404-48534)*.205).toFixed(2) + ((48534)*.15).toFixed(2);    
        }
        else if(amount >= 48534){
        tax = ((amount - 48534)*.205).toFixed(2) + ((48534)*.15).toFixed(2); 
        }
        else{
       tax = (amount * .15).toFixed(2);
        }
    return tax;

}
}
window.onload = function () {
    $("calculate").onclick = calculate_tax;
}