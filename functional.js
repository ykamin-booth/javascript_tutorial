let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//  Example: "North Dakota" -> "north-dakota"

function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map( element => urlify(element));
}
console.log(functionalUrls(states));

//exercise

let baseUrl="https://example.com/";

function functionalFullUrls(elements) {
  return elements.map(element => baseUrl+urlify(element));
}

console.log(functionalFullUrls(states));


//singles

function imperativeSingles(elements) {
  let singles=[];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}

console.log(imperativeSingles(states));

// singles: Functional version

function functionalSingles(elements) {
  return elements.filter( element => element.split(/\s+/).length === 1);
}

console.log(functionalSingles(states));

//exercises

function functionalDakotas(elements) {
  return elements.filter(element => element.toLowerCase().includes("dakota"));
}

console.log(functionalDakotas(states));

function functionalSplits(elements) {
  return elements.filter( element => element.split(/\s+/).length === 2);
}

console.log(functionalSplits(states));

let numbers = [1,2,3,4,5,6,7,8,9,10];

//sum: imperative solution

function imperativeSum(elements) {
  let total=0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}

console.log(imperativeSum(numbers));

// sum: Functional solution
function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n; });
}
console.log(functionalSum(numbers));

// lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element]=element.length;
  });
  return lengths;
}

console.log(imperativeLengths(states));
  
// lengths: Functional solution
function functionalLength(elements) {
  return elements.reduce((lengths, element) => {
    lengths[element] = element.length;
    return lengths;
  }, {});
}

console.log(functionalLength(states));

//exercises

function functionalMultiple(elements) {
  return elements.reduce((product, element) => { return product *= element; });
}

console.log(functionalMultiple(numbers));

function functionalLength2(elements) { 
  return elements.reduce((lengths, element) => { lengths[element] = element.length; return lengths;}, {});
}

console.log(functionalLength2(states));