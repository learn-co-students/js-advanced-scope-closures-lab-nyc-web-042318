function produceDrivingRange(blockRange) {
  return function(start, end) {
    const startBlock = parseInt(start)
    const endBlock = parseInt(end)
    const dist = Math.abs(startBlock - endBlock)
    const diff = dist - blockRange
    if (diff > 0) {
      return `${Math.abs(diff)} blocks out of range`
    } else {
      return `within range by ${Math.abs(diff)}`
    }
  }
}

function produceTipCalculator(percent) {
  return function(amount) {
    return percent * amount
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
