module.exports = function toReadable (number) {
    let ones = ['' , 'one' , 'two', 'three', 'four' ,'five', 'six' , 'seven' , 'eight' , 'nine' ];
    let afterTens = ['ten' , 'eleven' , 'twelve', 'thirteen', 'fourteen' , 'fifteen', 'sixteen', 'seventeen', 'eighteen' , 'nineteen'];
    let tens = ['' , '' , 'twenty', 'thirty', 'forty' , 'fifty', 'sixty', 'seventy','eighty' , 'ninety'];
    if (number < 1 ) return 'zero';
    if (number > 0 && number < 10 ) return ones[number];
    if (number > 9 && number < 20 ) return afterTens[number%10];
    if (number > 19 && number < 100) return (tens[Math.floor([number/10])]+ ' '+ones[number%10]).trim();
    if (number > 99 && number < 1000) {
        if(Math.floor((number % 100)/10) == 0) return (ones[Math.floor([number/100])] + ' hundred ' + ones[Math.floor((number%100)%10)]).trim();
        else if(Math.floor((number % 100)/10) == 1) return (ones[Math.floor([number/100])] + ' hundred ' + afterTens[(number % 100)%10]).trim();
        else if(Math.floor((number % 100)/10) > 1) return (ones[Math.floor([number/100])]+ ' hundred ' + tens[Math.floor((number%100)/10)] + 
        ' ' + ones[Math.floor((number%100)%10)]).trim()
    }
}
