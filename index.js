function produceDrivingRange(blockRange) {
  let num = 0;
  return function (block1, block2) {
    if (parseInt(block1) > parseInt(block2)){
      num = parseInt(block1) - parseInt(block2);
    } else if (parseInt(block2) > parseInt(block1)){
      num = parseInt(block2) - parseInt(block1);
    }

    if (num > blockRange) {
      return `${num - blockRange} blocks out of range`;
    } else if (num < blockRange){
      return `within range by ${blockRange - num}`;
    }
  }
}

function produceTipCalculator(percent) {
  return function(total) {
    return percent * total;
  }
}
