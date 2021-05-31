const sortObjArr = (arr,keyParam) => {
        return arr.sort((a,b) => (a[keyParam]<b[keyParam] ? -1 : 1));
}
console.log(sortObjArr([
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ], 'type')); /* [{
    {type:"BMW", year:2010}
    {type:"Saab", year:2001},
    {type:"Volvo", year:2016},
  }]
  */
  console.log(sortObjArr([
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ], 'year')); /* [{
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
    {type:"Volvo", year:2016},
  }]
  */