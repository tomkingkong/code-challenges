const items = [ 714,250,146,135,111,94,94,98,40,50,25,50,25,50,225,179,179,50,400,50,20,100,595,100,200,133,78,25,23 ];
const shirts = [250,146,135,111,94,94,98,40,50,25,50,25,50]
const itemsList = [983, 100, 1168, 100, 695, 200, 211, 25, 23, 18, 714]

const add = (args) => {
  return args.reduce((sum, num) => {
    return sum + num;
  }, 0);
}

console.log(add(itemsList))