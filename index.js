function produceDrivingRange(number) {
  return function (a, b) {
    a = a.replace(/[^0-9]/g, '')
    b = b.replace(/[^0-9]/g, '')
    let distance = Math.abs(a-b)
    if (distance > number) {
      return `${distance - number} blocks out of range`
    } else {
      return `within range by ${number - distance}`
    }

  }
}

function produceTipCalculator(percent) {
  return function(tip) {
    return tip * percent
  }
}

function createDriver() {
  let DriverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++DriverId
    }
  }
}
