// function produceDrivingRange (range) {
//
//     return function (blockOne, blockTwo ) {
//       let s = blockOne.slice(0,2)
//       let e = blockTwo.slice(0,2)
//         if (((e - s) - range) > 0 ) {return `${(e - s) % range} blocks out of range`}
//
//         else {}
//     }
// }

function produceDrivingRange (blockRange) {
  return function (one, two) {
     a = parseInt(one.slice(0,2))
     b = parseInt(two.slice(0,2))
    sum = b - a
    if (blockRange - sum < 0) {return `${-(blockRange - sum)} blocks out of range`}
    else {return `within range by ${(blockRange - sum)}`}
    return blockRange > sum
  }
}

function produceTipCalculator (percent) {
  return function (price) {
    return price * percent
  }
}
