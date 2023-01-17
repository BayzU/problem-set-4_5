
class Quadrilateral {
  constructor(side1, side2, side3, side4){
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
  }
  
  getPerimeter(){
    return this.side1 + this.side2 + this.side3 + this.side4;
  }
}

class Rectangle extends Quadrilateral{
  constructor(side1, side2){
    super(side1,side2);
    this.side3 = side1;
    this.side4 = side2;
  }
  getArea(){
    return this.side1 * this.side2;
  }
}

class Square extends Rectangle{
  constructor(side1){
    super(side1);
    this.side2 = side1;
    this.side3 = side1;
    this.side4 = side1;
  }
  getDiagonal(){
    return Math.sqrt(this.side1**2 + this.side1**2);
  }
}

class Person {
  constructor(name,age,job,hobby){
    this.name = name;
    this.age = age;
    this.job = job;
    this.hobby = hobby;
  }
  greet(name,age){
    console.log(`My name is ${name} and I am ${age} years old`);
  }
  work(job){
    console.log(`I am a ${job}`);
  }
  passion(hobby){
    console.log(`I like ${hobby} in my free time.`);
  }
}

const Bayzed = new Person('Bayzed', 19, 'Software Engineer', 'Bowling');

console.log(Bayzed);
module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person
};
