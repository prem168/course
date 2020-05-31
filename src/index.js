import React from  'react';
import ReactDom from 'react-dom';
import App from "./App";
ReactDom.render(<App/>,document.getElementById('root'));

// class Animal{
//     constructor(name, age){
//         this.name=name;
//         this.age=age;
//     }
//     speak(){
//         console.log("I am",this.name,"My age",this.age);
//     }
// }
// const lion =new Animal("Prem",21);
// lion.speak();
// console.log(lion);
// class ex extends Animal{
//     constructor(name,age,color, speed){
//         super(name,age);
//         this.color=color;
//         this.speed=speed;
//     }
//     roar(){
//         console.log("My name",this.name,"fur color",this.color )
//     }
// }
// const example =new ex("Prem",21,"gold",20);
// example.roar();
// example.speak();