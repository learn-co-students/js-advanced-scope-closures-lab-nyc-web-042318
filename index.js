const produceDrivingRange = function (blockRange) {
  return function tripRange(start, end) {
    let start_int = start.slice(0, 2)
    let end_int = end.slice(0, 2)
    let currentRange = ''
    if (start_int > end_int) {
      currentRange = (start_int - end_int)
    } else {
      currentRange = (end_int - start_int)
    }
    if (currentRange <= blockRange) {
      difference = blockRange - currentRange
      return `within range by ${difference}`
    } else {
      let difference = currentRange - blockRange
      return `${difference} blocks out of range`
    }
  }
}

const produceTipCalculator = function(percent) {
  return function tipOnThisAmount(total){
    return (total * percent)
  }
}

const createDriver = function () {
  let driverId = 0

  return class {
    constructor(name) {
    this.name = name
    this.id = ++driverId
    }
  }
}
