console.log(Symbol('foo')===Symbol("foo")); //false

const sym = Symbol();

const obj ={[sym]:"value"}

obj[sym] // 하나의 고유 객체, 고유객체로 부를수 있음. 