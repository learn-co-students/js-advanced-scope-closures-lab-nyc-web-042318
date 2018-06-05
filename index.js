const produceDrivingRange = function(blockRange) {
  return function (start,end) {
    s = start.slice(0,2)
    e = end.slice(0,2)
    let travel = Math.abs(e-s)
    let difference = blockRange - travel
    if (difference > 0) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

const produceTipCalculator = function(percent) {
  return function (fare) {
    return fare*percent
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.id = ++driverId
      this.name = name
    }
  }
}
