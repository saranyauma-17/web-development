const days = (month) => {
    let dayCount = [31,28,31,30,31,30,31,31,30,31,30,31]
    return (month>12||month<1)?"Error":dayCount[month-1];
}
console.log(days(8));
console.log(days(18));