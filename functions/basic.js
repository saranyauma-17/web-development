function sample() {
    console.log('abc')
  }
  
  var sample1 = function() {
    console.log('def')
  }();
  
  var sample2 = function() {
    console.log('ghi')
  };
  
  //arrow function
  var sample3 = () => {
    console.log('jkl')
  }
  
  sample();

  sample3();
  
  sample2();
  
  
  