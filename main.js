function flickSwitch(arr){

  let newArr = []
  let evenOrOdd = 0

  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] == 'flick') {
      evenOrOdd += 1
    }

    evenOrOdd % 2 == 0 ? newArr.push(true) : newArr.push(false)

  }
  
  return newArr
}

console.log(flickSwitch(['swish', 'flick', 'flick', 'swish']))
// params: arr
// return: an array of booleans 
// e.g. flickSwitch(['swish', 'flick', 'flick', 'swish'])
// results in [true, false, true, true]

// declare a variable newArr set it to []
// declare a variable evenOrOdd set it to 0
// loop through the arr
// if arr[i] is 'flick' then add and reassign 1 to evenOrOdd
// if evenOrOdd divided by 2 has a remainder of 0 then push true to newArr
// else if it has a remainder of 1 then push false to newArr
// end loop
// return newArr
