// #Fluent Calculator 
// Your task is to implement a simple calculator with fluent syntax

// FluentCalculator should be separated in two, 
// the Values and the Operations, one can call the other, 
// but cannot call one of his own.

// A Value can call an Operation, but cannot call a value
// FluentCalculator.one.plus
// FluentCalculator.one.one // undefined, if you may.

// An Operation can call a Value, but cannont call a operation
// FluentCalculator.one.plus.two // this should have a value of 3
// FluentCalculator.one.plus.plus // (undefined as well)

// Pairs of Value and Operation should be stackable to infinity
// FluentCalculator.one.plus.two.plus.three.minus.one.minus.two.minus.four // Should be -1

// A Value should resolve to a primitive integer
// FluentCalculator.one.plus.ten - 10 // Should be 1

// --- Rules ---
// eval is disabled
// Values in FluentCalculator should go from zero to ten.
// Supported Operations are plus, minus, times, dividedBy
// Rules mentioned above
// FluentCalculator should be stackable to infinity
// A Value can only call an Operation
// An Operation can only call a Value
// A Value should be resolvable to a primitive integer, if needed as such

const Magic = class Magic {
	constructor() {
		this.zero = this.newNum(0);
		this.one = this.newNum(1);
		this.two = this.newNum(2);
		this.three = this.newNum(3);
		this.four = this.newNum(4);
		this.five = this.newNum(5);
		this.six = this.newNum(6);
		this.seven = this.newNum(7);
		this.eight = this.newNum(8);
		this.nine = this.newNum(9);
    this.ten = this.newNum(10);
    this.numKey = {
      'zero': 0,
      'one': 1,
      'two': 2,
      'three': 3,
      'four': 4,
      'five': 5,
      'six': 6,
      'seven': 7,
      'eight': 8,
      'nine': 9,
      'ten': 10,
    }
	}

	newNum(num, total = num) {
		return new Proxy(() => {}, this.handlerOp(num, total));
  }
  
  newOperator(fn, total) {
		return new Proxy(() => {}, this.handlerNum(fn, total));
	}

	handlerOp(num, total) {
    const magic = this;
    const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 
    'six', 'seven', 'eight', 'nine', 'ten'];
		return {
			get(target, prop, reciever) {
      
				if (nums.includes(prop)) return undefined;
        
				switch(prop) {
					case 'plus': {
						const sum = (a, b) => a + b;
						return magic.newOperator(sum, total);
					}
					case 'minus': {
						const minus = (a, b) => a - b;
						return magic.newOperator(minus, total);
					}
					case 'times': {
						const times = (a, b) => a * b;
						return magic.newOperator(times, total);
					}
					case 'dividedBy': {
						const dividedBy = (a, b) => a / b;
						return magic.newOperator(dividedBy, total);
					}
					default:
						return () => total;
				}
			}
		}
	}

	handlerNum(fn, num) {
		const magic = this;
	  const ops = ['times', 'plus', 'minus', 'dividedBy'];
		return {
			get(target, prop, reciever) {

        if (ops.includes(prop)) return undefined;
        
        if (magic.numKey[prop]) {
          const total = fn(num, magic.numKey[prop]);
					return magic.newNum(0, total);
        } else {
					return () => undefined;
        }
			}
		}
	}
};

const FluentCalculator = new Magic();


// console.log(FluentCalculator.zero) 							  	// 0
// console.log(FluentCalculator.one) 								  	// 1
// console.log(FluentCalculator.one.plus) 					  	// undefined
// console.log(FluentCalculator.one.plus.two) 		  		// 3
// console.log(FluentCalculator.two) 								   	// 2
// console.log(FluentCalculator.two.plus) 					  	// undefined
// console.log(FluentCalculator.two.plus.two) 				  // 4
// console.log(FluentCalculator.two.plus.two.plus) 		  // undefined
// console.log(FluentCalculator.two.plus.two.plus.one)  // 5
// console.log(FluentCalculator.two.plus.two.plus.zero) // 4
// console.log(FluentCalculator.two.plus.two.minus.one)	// 3
// console.log(FluentCalculator.two.plus.five)	        // 7
// console.log(FluentCalculator.two.minus.two)	        // 0

// test big chains
// console.log(FluentCalculator.two.plus.two.minus.one.plus.nine)	// 12
// console.log(FluentCalculator.ten.dividedBy.two.plus.six.minus.eight.times.two)	//  6

// test fail cases
// console.log(FluentCalculator.zero.zero)	// undefined
// console.log(FluentCalculator.one.two)	// undefined
// console.log(FluentCalculator.two.times.times)	// undefined
// console.log(FluentCalculator.two.times.dividedBy)	// undefined