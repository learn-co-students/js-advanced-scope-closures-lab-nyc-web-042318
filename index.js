function produceDrivingRange(blocks) {
  return function(start, end) {
    let num1 = Number.parseInt(start.split('th')[0], 10)
    let num2 = Number.parseInt(end.split('th')[0], 10)

    if ((num1-num2) > blocks) {
      return `${(num1 - num2)-blocks} blocks out of range`
    } else if ((num2-num1) > blocks) {
      return `${(num2 - num1)-blocks} blocks out of range`
    } else {
      if (num1 > num2) {
        return `within range by ${(num1-num2)}`
      } else {
        return `within range by ${(num2-num1)}`
      }
    }
  }
}

function produceTipCalculator(tip) {
  return function (bill) {
    return bill * tip;
  }
}
