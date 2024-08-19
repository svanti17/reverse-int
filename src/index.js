module.exports = function reverse (n) {
    let strNumber = (Math.abs(n)).toString();
    let result = "";
    let char = "";

    for (let i = 0; i < strNumber.length; i++) {
        char = strNumber[strNumber.length - (i + 1)];
        result = `${result}${char}`;
    }
    return result;
}
