function produceDrivingRange(range) {
  return function (start, end) {
    let block = Math.abs(parseInt(start) - parseInt(end))
    if (range >= block){
      return `within range by ${range - block}`;
    } else {
      return `${block - range} blocks out of range`;
    };
  };
}


function produceTipCalculator(tip_percent) {
  return function (amount) {
    return amount*tip_percent;
  };
}


function createDriver() {
  let driverId = 0;
  return class {
    constructor (name){
      this.name = name;
      this.id = driverId++;
    }
  }
}
