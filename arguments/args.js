function sum() {
    let result = 0;
    
    for (let i = 0; i < arguments.length; i++) {
         result += arguments[i];
    }
    return result;
}

function sum2(...theArgs) {
    let result = 0
    for (let i = 0; i < theArgs.length; i++) {
        result += theArgs[i];
    }
    return result;
}

class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");

Function.prototype.myBind = function(ctx) {
    const fn = this;
    const args = Array.from(arguments).slice(1);
    return function() {
        const idontknow = Array.from(arguments);
        fn.apply(ctx, args.concat(idontknow));
    };
};

Function.prototype.myBind2 = function(...theCtx) {
    const fn = this;
    const obj = theCtx[0];
    const args = theCtx.slice(1);
    return function(...callingArgs) {
        const idontknow = theCtx;
        fn.apply(obj, args.concat(callingArgs));
    };
};

Function.prototype.myBind3 = function(obj, ...theCtx) {
    const fn = this;
    return function (...callingArgs) {
        fn.apply(obj, theCtx.concat(callingArgs));
    };
};

Function.prototype.myBind4 = function (obj, ...theCtx) {
   return (...callingArgs) => {
       this.apply(obj, theCtx.concat(callingArgs));
   };
};

markov.says.myBind4(pavlov, "meow", "Kush")();

// markov.says.myBind3(pavlov, "meow", "Kush")();


function curriedSum(numArgs) {
    const numbers = [];
    function _curriedSum(num) {
        numbers.push(num);
        if (numbers.length === numArgs) {
            let sum = 0;
            numbers.forEach((ele) => {
                sum += ele;
            });
            return sum;
        } else {
            return _curriedSum;
        }
    }
    return _curriedSum;
}

Function.prototype.curry = function (numArgs) {
    const args = [];
    const that = this;
    function _curry(num) {
        args.push(num);
        if (args.length < numArgs) {
            return _curry;
        } else {
            // return that.apply(null, args);
            return that(...args);
        }
    }

    return _curry;
};

function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
}

console.log(sumThree.curry(3)(4)(20)(6));

// const sum3 = curriedSum(4);
// console.log(sum3(5)(30)(20)(1));