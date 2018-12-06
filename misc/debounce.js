// create the debounce function
/*
Creates a debounced function that delays invoking func until 
after wait milliseconds have elapsed since the last time the 
debounced function was invoked. The debounced function comes 
with a cancel method to cancel delayed func invocations 
and a flush method to immediately invoke them. Provide options 
to indicate whether func should be invoked on the leading and/or 
trailing edge of the wait timeout. The func is invoked with the 
last arguments provided to the debounced function. Subsequent 
calls to the debounced function return the result of the last 
func invocation.

Note: If leading and trailing options are true, 
func is invoked on the trailing edge of the timeout 
only if the debounced function is invoked more than once 
during the wait timeout.

If wait is 0 and leading is false, func invocation is deferred 
until to the next tick, similar to setTimeout with a timeout of 0.
*/

const debounce = async (fn, wait) => {
  function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  return await sleep(wait).then(() => {
    return fn;
  });
}

const yell = () => 'aaaaaaaah'


const send = async () => {
  console.log(Date.now(), await debounce(yell(), 1000))
}
send()