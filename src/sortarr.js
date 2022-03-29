var data = [ 
  {type:"Foo", year:1995}, 
  {type:"Bar", year:1993}, 
  {type:"Foobar", year:2020} 
];

function asc(a,b) {
  return parseInt(a.year) - parseInt(b.year);
}

data.sort(asc);