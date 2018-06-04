function produceDrivingRange(dist) {
  return function distance (start, end) {
    start = start.replace(/[^0-9]/g, '');
    end = end.replace(/[^0-9]/g, '');
    let howFar = Math.abs(start-end);
    if (howFar > dist) {
      return `${howFar-dist} blocks out of range`
    } else  {
      return `within range by ${dist-howFar}`
    }
  }
};

function produceTipCalculator (tip) {
  return function (dist) {
    return tip * dist
  }
};

function createDriver() {
  let DriverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++DriverId
    }
  }
};
