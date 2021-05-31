var a = 1;
var obj = {
    a:2,
    fn1: function() {
        console.log(this.a);
    },
    fn2: () => {
        console.log(this.a);
    }
}
obj.fn1();
obj.fn2();