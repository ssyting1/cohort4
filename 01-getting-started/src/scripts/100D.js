const functions = {

insert(num) {
    document.form.number.value = document.form.number.value+num;
}
equal() {
    var exp = document.form.number.value;
    if(exp){
    document.form.number.value=eval(exp);
    }
}
clean() {
    document.form.number.value="";
}
back() {
    var exp=document.form.number.value;
    document.form.number.value = exp.substring(0, exp.length-1);
}
};

export default functions;

   


