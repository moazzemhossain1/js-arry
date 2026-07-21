// let cart = [
//     { name: "Phone", price: 500 },
//     { name: "Laptop", price: 1000 },
//     { name: "Mouse", price: 50 }
// ];

// let total=0;

// for(let i =0; i<cart.length;i++){
//     let car=cart[i];
    
//     // console.log(car);
//     // console.log(car.name);
//     console.log(car.price);

//     total=total+car.price;
   





    
// }
//  console.log("Total price =",total)




let students = [
    {name:"Rahim", marks:80},
    {name:"Karim", marks:95},
    {name:"Sakib", marks:70}
];

let highest=0;

for(let i=0; i<students.length;i++){
   let student=students[i];
   console.log(student.marks);
   if(student.marks>highest ){
    highest=student.marks;
   }

}
console.log("Marks : ", highest)




let words = [
    "apple",
    "javascript",
    "code",
    "developer",
    "html"
]; 

let conent=0;
for(let i=0; i<words.length;i++){
    let word=words[i];
    console.log(word);
    if(word.length>5){
        conent=conent+1;
    }
}
console.log(conent)




let numbers = [10,20,30,40,50];
const inde=numbers.includes(40);
console.log(inde)