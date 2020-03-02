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