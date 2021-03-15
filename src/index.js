module.exports = function toReadable (number) {
  let readable = [];
  let numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hundred = ['hundred'];
    if (number === 0) {
    readable.push('zero');
    }
    if (number >= 100 && number < 1000) {
        readable.push(numbers[Math.floor(number / 100)]);
        readable.push(hundred[0]);
    }
    if ((number - (Math.floor(number / 100) * 100)) < 20) {
        readable.push(numbers[number % 100]);
    } else if (number % 10 == 0) {
        readable.push(tens[Math.floor((number - (Math.floor(number / 100)) * 100) / 10)]);
    } else if ((number - (Math.floor(number / 100) * 100)) > 20) {
        readable.push(tens[Math.floor((number - (Math.floor(number / 100)) * 100) / 10)]);
        readable.push(numbers[number % 10]);
    }
    readable = readable.filter(String).join(' ').toString();
    return readable;
}
