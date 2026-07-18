const numbers=[23,23,43,23,45,32,432,21,32,343];
// for(let i=0; i<numbers.length;i++){
//     // console.log("value of creent possition :", i);
//     const item=numbers[i];
//     // console.log("Valaue of creent items : ", item);
//     if(item===32){
//         console.log("Find item : ", item);
//         break;
//     }
    
// }


let i=0;
while(i<numbers.length){
    const item=numbers[i];
    // console.log(item);
    i++;
    if(item===32){
        console.log("Find items : ", item);
        break
    }
}