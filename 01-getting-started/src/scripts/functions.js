
const functions = {
    
    size: (num) => {
        if (num < -10) return "extra large";
        if (num < 10) return "small";
        if (num < 20) return "medium";
        return "large";
    },

    add: (num1, num2) => {
        return num1 + num2;
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    },
    
    isEven: (num) => {
        return false
    }
    
};

export default functions;

   
