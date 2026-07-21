// let num1=20;
// let num2=5;
// console.log("Sum: ",num1+num2);
// console.log("Subtraction: ", num1-num2);
// console.log("Multiplication: ", num1*num2);
// console.log("Division: ",num1*num2)



// let number=12;
// if(number%2===0){
//     console.log("Even number:", number)
// }else{
//     console.log("Odd :", number)
// }
// let age=11;

// age>=20 ?  console.log("you can vot") : console.log("you can not vot ");




let fruits=['Apple','Banana','Mango','Orange'];
console.log("Total fruits: ",fruits.length);
// for (fruit of fruits){
//     console.log(fruit);
// }

// for(let i=0; i<=fruits.length;i++){
//     console.log(fruits[i])
// }


// let i=0;
// while(i<=fruits.length){
//     console.log(fruits[i]);
//     i++;
// }

// fruits.forEach((fruit) =>{
//     console.log(fruit)
// })

// fruits.forEach((fruit) =>{
//     console.log(fruit)
// })


// let numbers=[10,20,30,40,50];
// for(number of numbers){
//     if(number===30){
//         break;
        
//     }
    
// }
// console.log("Find :", number)

// let numbers=[10,20,30,40,50];
// let sum=0;
// for(numbr of numbers){
//     sum=sum+numbr;
// }

// console.log("Total = ", sum)


// for(let i=0; i<numbers.length;i++){
//     sum=sum+numbers[i];
// }
// console.log("Total = ", sum)



// let numbers=[12,45,7,89,23];
// let biggest=0;
// for(number of numbers){
//     if(number>biggest){
//         biggest=number;
//     }
    
// }
// console.log("Binges number =" , biggest)




// let numbers=[1,2,3,4,5,6,7,8,9,10];
// const revers=numbers.reverse();
// console.log(revers)



let numbers = [5,-2,8,-10,20,0];

let positive=0;
// for(number of numbers){
//     if(number%2===0){
//         positive=positive+number;
//     }
//     console.log(number)
// }
// console.log("Postive number :", positive)

for(let i =0; i<numbers.length;i++){
    console.log(i);
    if(numbers[i]>0){
        positive=positive+1;
        
        
    }
   
}
 console.log("Postive number :", positive)








//  let students = [
//     {
//         name:"Rahim",
//         marks:80
//     },
//     {
//         name:"Karim",
//         marks:45
//     },
//     {
//         name:"Sakib",
//         marks:90
//     }
// ];

// for(let i =0; i<students.length;i++){
//     let student=students[i]
//     // student =students.name;
//     // console.log(student.name);
//     // console.log(student.marks);
//     if(student.marks>=50){
//         console.log("pase")
//     }
//     else{
//         console.log("Faile")
//     }
// }

let cart = [
    { name: "Phone", price: 500 },
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 50 }
];

for(let i =0; i<cart.length;i++){
    let car=cart[i].name;
    // car=car.name;
    console.log(car)
}

