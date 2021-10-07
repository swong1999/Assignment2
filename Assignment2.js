const arr = [1,2,3,4,5];
const wordarr = ['spray', 'limit', 'elite', 'present', 'exuberant', 'destruction', 'present'];

// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
for (let i = 0; i < this.length; i++) {
if (this[i] === undefined) continue;
callbackFn(this[i], i, this);
}
};

console.log("forEach: ")
arr.forEach( (x,i) => console.log(x,i) );
console.log("myEach: ")
arr.myEach( (x,i) => console.log(x,i) );

// MAP //
Array.prototype.myMap = function(callbackFn) {
let array = [];
for (let i = 0; i < this.length; i++) {
let newelement = callbackFn(this[i], i, this)
for(let x = 0; x<this.length; x++){
array[i] = newelement
}
}
return array
};

const map1 = arr.map(x => x*2);
console.log("map: ")
console.log(map1);
console.log("myMap: ")
const map2 = arr.myMap(x => x *2);
console.log(map2);

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
let array = []
let count = 0;
for(let i = 0; i < this.length; i++){
if (callbackFn(this[i])){
array[count]=this[i]
count++
}
}
return array
};

const result = wordarr.filter(word => word.length > 6);
console.log("filter: ")
console.log(result)
const myresult = wordarr.myFilter(word => word.length > 6);
console.log("myFilter: ")
console.log(myresult)

// SOME //
Array.prototype.mySome = function(callbackFn) {
for(let i = 0; i < this.length; i++){
if (callbackFn(this[i])){
return true
}
}
return false
};

const even = (element) => element % 2 === 0;
console.log("some: ")
console.log(arr.some(even));
console.log("mySome: ")
console.log(arr.mySome(even));

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
for(let i = 0; i < this.length; i++){
if (!callbackFn(this[i])){
return false
}
}
return true
};

const isBelowThreshold = (currentValue) => currentValue > 0;
console.log("Every: ")
console.log(arr.every(isBelowThreshold));
console.log("myEvery: ")
console.log(arr.myEvery(isBelowThreshold));

// REDUCE //
Array.prototype.myReduce = function(callbackFn, num) {
if (num === undefined) num = 0;
let sum =+ num
for (let i=0; i < this.length; i++){
sum = callbackFn(sum, this[i], i, this)
}
return sum
};

const reducer = (previousValue, currentValue) => previousValue + currentValue;
console.log("reduce: ")
console.log(arr.reduce(reducer,5));
console.log("myReduce: ")
console.log(arr.myReduce(reducer,5));

// INCLUDES //
Array.prototype.myIncludes = function(element, index) {
if (index === undefined) index = 0;
for (let i = 0; i < this.length; i++){
if(this[i] == element && index == i){
return true
}
}
return false
};

console.log("includes: ")
console.log(wordarr.includes('spray', 0));
console.log("myIncludes: ")
console.log(wordarr.myIncludes('spray', 0));

// INDEXOF //
Array.prototype.myIndexOf = function(element, index) {
if (index === undefined) index = 0;
for (let i = index; i < this.length; i++){
if(this[i] == element){
return i
}
}
return -1
};

console.log("indexOf: ")
console.log(wordarr.indexOf('present',4));
console.log("myIndexOf: ")
console.log(wordarr.myIndexOf('present',4));

// PUSH //
Array.prototype.myPush = function(...args) {
let arg_i = 0;
let length = this.length;
for(let i = length; i < length + args.length; i++){
this[i] = args[arg_i];
arg_i++;
}
return this.length;
};

console.log("push: ")
arr.push(10,20);
console.log(arr);
console.log("myPush: ")
arr.myPush(100,200);
console.log(arr);

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(element, index) {
if (index === undefined) index = this.length;
for (let i = index; i > 0; i--){
if(this[i] == element){
return i
}
}
return -1
};

console.log("lastIndexOf: ")
console.log(wordarr.lastIndexOf('present',6));
console.log("myLastIndexOf: ")
console.log(wordarr.myLastIndexOf('present',6));

// KEYS //
Object.grabKeys = function(obj) {
let array = []
for (let key in obj){
array.myPush(key)
}
return array;
};

const object1 = { 0: 'something', 2: 42, 1: false };
console.log("keys:")
console.log(Object.keys(object1));
console.log("grabKeys:")
console.log(Object.grabKeys(object1));

// VALUES //
Object.grabValues = function(obj) {
let array = []
for (let key in obj){
array.myPush(obj[key]);
}
return array
};

console.log("values:")
console.log(Object.values(object1));
console.log("grabValues:")
console.log(Object.grabValues(object1));
