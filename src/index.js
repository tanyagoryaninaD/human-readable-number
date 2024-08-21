module.exports = function toReadable (number) {
    let readable = '';
    const first = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const second = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const third = ['hundred', 'thousand', 'million', 'billion'];

    function des(n) {
        n = +n
        if (n > 0 && n <= 19) {
            return readable = first[n]
        } else if (n >= 20 && +n <= 99) {
            readable = second[n.toString()[0]] + ' ' + first[n.toString()[1]];
            return readable.trim()
        } else {
            return ''
        }
    }

    if (number===0) return readable = 'zero';
    if (number > 0 && number <=99) {
        return des(number)
    }
    if (number >= 100 && number <= 999) {
        readable = first[number.toString()[0]] + ' ' + third[0] + ' ' + des(number.toString().slice(-2))
        return readable.trim()
    } 
}