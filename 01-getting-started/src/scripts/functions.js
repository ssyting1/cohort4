
const functions = {

    // size: (num) => {
    //     if (num < -10) return "extra large";
    //     if (num < 10) return "small";
    //     if (num < 20) return "medium";
    //     return "large";
    // },

    // add: (num1, num2) => {
    //     return num1 + num2;
    // },

    // subtract: (num1, num2) => {
    //     return num1 - num2;
    // },
    
    // isEven: (num) => {
    //     return false
    // },
    
// 100D Competencies - working with Arrays

    arrAdd(arr, num) {
    if(isNaN(num)){
    return (`${num} is not a valid number`)}
    else 
    {arr.push(Number(num));
    return (`${num} added to the Array`)}
    },
    arrShow(arr) {
        return arr;
    },
    arrTotal(arr) {
        let total = 0;
        for(let i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        return total;
    },
    arrClear(arr){
        arr.length = 0;
    },

// 100D Competencies - working with dictionaries

caps : {
    'AB' : "Edmonton",	
    'MB' : "Winnipeg",	
    'NB' : "Fredericton",
    'NL' : "St. John's",
    'NS' : "Halifax",	
    'ON' : "Toronto",	
    'PE' : "Charlottetown",	
    'QC' : "Quebec City",	
    'SK' : "Regina",
    'YT' : "Whitehorse",	
    'NU' : "Iqaluit",	
    'NT' : "Yellowknife",
},

    getCapital(code) {
    return functions.caps[code];
},

};

export default functions;

   
