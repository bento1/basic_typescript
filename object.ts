const person ={
    name:'Mark',
    age:39
};

const person2=Object.create({name:'Mark',age:39});
// const person3=Object.create({});// union type이니깐 됨
// const person4=Object.create(2);// primitive type 방지