/*
--------------- Copy this section into your code syntax.js as comments --------

define attributes / variables
    number
    string
    boolean
    array
    dictionary / objects
    undefined
sample if / else
functions
    parameters
    returns
arrays
    add to the front
    add to the end
    update values
loops 
    for
    for/in
    while
    do while
    forEach (with array and function)
Objects / Dictionaries
    declare object
    lookup key to retrieve value

--------------- Copy ends here --------
*/
const functions = {

// define number
number1: (num) => {
    if (num > 1) return "true";
},
// define string
string1() {
    var str = "this is a string"; 
    var n = str.search("string");
    return "true";
},
// define boolean
boolean1: (num2) => {
    if (num2 = true) return "true";
},
// define array
array1() {
    var arr = ["Acer", "Apple", "Microsoft", "Asus"];
    arr [2] = "Microsoft"
    return "true";
},
// define dictionary/objects
object1() { 
    var name = "EvolveU";
    var location = "Calgary";
    return (`${name} was located in ${location}`) 
},    
// define undefined
undefined1() {
    var x;
    return ("undefined")
},
// sample if/else
ifelse1(age) {
    if (age > 18) {
        return "legal";
      } else {
        return "illegal";
      }
},
// functions(parameters & returns) - please see above example
// arrays(add to the front + add to the end + update values)
array2() {
    var car = ["Toyota", "Honda", "Fiat"];
    car.unshift("Ford");
    car.push("Nissan");
    car[2] = "Acura";
    return (car);
},
// Loops(for)
loops1() {
    var y;
    for (y = 15; y < 20;) {
        return "It's " + y;};   
    },
// Loops(for/in)
loops2() {
    var name = {fname:"Simon", lname:"Ting"};
    var xy;
    for (xy in name) {
        return name[xy]};   
    },  
// Loops(while)
loops3() {
    let q = 2;
    while (q < 3) { 
    return(q + 1);
    q++;};
},
// Loops(do while)
loops4() {
    var s = 2;
    do { 
    return(s + 5);
    q++;}
    while (s < 10)
},
// Loops(forEach)
loops5() {
    var apps = ["WhatsApp", "Instagram", "Facebook"];
    var playStore = [];  
    apps.forEach(function(item){
      playStore.push(item)
    });
    return(playStore);
},  
// Objects / Dictionaries (declare object)
declare1() {
    var person = {fname: "Simon", lname: "Ting", rank: "7"}
    return("I'm contestant " + person.rank + "," +" " + person.fname + " " + person.lname)
},
// Objects / Dictionaries (lookup key to retrieve value)
lookup1() {
    var number2 = [1, 5, 15, 20];
    function checkNum(num4) {
    return num4 > 11;}
    return(number2.find(checkNum));
},
};
export default functions;