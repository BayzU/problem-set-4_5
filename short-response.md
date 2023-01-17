# Problem Set 4-5

## Classes and Inheritance 

**1. What is inheritance in programming?**

Inheritance is when an object inherits or takes properties from another object. Usually it goes up in the prototype chain to look for the property.One example is when instances of an object inherits the behaviors of the prototype object.

**2. In a code snippet, demonstrate inheritance by creating two classes where one is the parent class and one is the child class.**

```
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    
    canCook(food){
        console.log(`I can cook ${food}`)
    }
    
    canDraw(shape){
        console.log(`I can draw a ${circle}`)
    }
    
    canGreet(){
        console.log(`hello!`)
    }
}

class SoftwareEngineer extends Person{
    constructor(name, age, type){
        super(name, age)
        this.type = type 
    }
    
    canCode(){
        console.log(`I can code in JavaScript!`)
    }
}
```

**3. What is polymorphism? Show an example in a code snippet.**

 Poly means many and morph means shape. Polymorphism is when a behaviour can work with different objects or be in different forms.
 ```
 class Person{
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    
    canCook(food){
        console.log(`I can cook ${food}`)
    }
    
    canDraw(shape){
        console.log(`I can draw a ${circle}`)
    }
    
    canGreet(){
        console.log(`hello!`)
    }
}

class SoftwareEngineer extends Person{
    constructor(name, age, type){
        super(name, age)
        this.type = type 
    }
    
    canCode(){
        console.log(`I can code in JavaScript!`)
    }
}
```

In this example above. The method greet() can be an object of the person instance or it can be an object of the software engineer instance. This means that this behaviour could work with different objects.



