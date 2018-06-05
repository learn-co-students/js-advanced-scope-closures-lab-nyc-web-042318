function produceDrivingRange (triplength) {
  return function blockRange (start, end) {
    let start_loc = Number(start.slice(0,2));
    let end_loc = Number(end.slice(0,2));
    let range = end_loc - start_loc;
    if (end_loc < start_loc) {
      range = range * -1;
    }
    if (range > triplength) {
      return `${range - triplength} blocks out of range`
    }
    else {
      return `within range by ${triplength - range}`
    }
  }
}

function produceTipCalculator(tipcal) {
  return function tip (amount) {
    return amount * tipcal;
  }
}


function createDriver() {
  let driverId = 0
  return class {
    constructor (name) {
      this.name = name;
      this.id = ++driverId;
    }
  }

}
