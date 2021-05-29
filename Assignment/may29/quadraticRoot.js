const quadRoot = (a,b,c) => {
    let x1,x2;
    x1 = (-b + Math.sqrt(b ** 2 - 4*a*c))/ (2*a);
    x2 = (-b - Math.sqrt(b ** 2 - 4*a*c))/ (2*a);
    return [x1.toFixed(2),x2.toFixed(2)];
}
var res = quadRoot(1,5,6);
console.log(res[0],res[1]);