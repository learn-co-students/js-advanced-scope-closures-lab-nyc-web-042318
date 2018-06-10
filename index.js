function produceDrivingRange (range) {
  return function (orig, dest) {
    let org = orig.slice(0, -2)
    let dst = dest.slice(0, -2)
    return ((dst - org) > range) ? `${Math.abs(range - (dst - org))} blocks out of range` : `within range by ${range - (dst - org)}`
  }
}

function produceTipCalculator (tip) {
  return function (fare) {
    return tip * fare
  }
}
let driverid = 0
class Driver {
  constructor(name) {
    this.name = name
    this.id = driverid++
  }
}
let createDriver = function() { return Driver }
