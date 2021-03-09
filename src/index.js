module.exports = function reverse (n) {
    n = Math.abs(n);
    let reverse = 0;
    let tempArr = [];
    while (n > 0){
        tempArr.push(n % 10);
        n = Math.floor(n / 10);
    }

    for (let i=0; i < tempArr.length; i++) {
        reverse = reverse * 10 + tempArr[i];
    }


    return reverse;
  
}
