let car:string='subaru';
let age:number=25;
let numbers:number[]=[1,2,3,4];
//string test
console.log("is car=='subaru'? i predict tru");
console.log(car=='subaru');//true case sensitive

//strict equality
console.log("is car=='subaru'? i predict false");
console.log(car=='Subaru')//case sensitive
//234 already done in prev question
// lowercase conv test
console.log("is car===car.toLowerCase()? i predict false");
console.log(car===car.toLowerCase());//false orgnl value remain orgnl as stored above

//numerical test
//inequality test
console.log("is age!=30?i predict true")
console.log(age!= 30)
//equality tst
console.log("is age==25?i predict true")
console.log(age== 25)
//greater than
console.log("is age>30?i predict false")
console.log(age> 30)
//lesser than
console.log("is age<30?i predict true")
console.log(age< 30)
//and operator
console.log("is age>20 && age<30 ?i predict true")
console.log(age>20 && age<30)
//or operator
console.log("is age>30 || age<18?i predict false")
console.log(age> 30 || age<18)

//array test
console.log("is 3 in numbers?i predict true")
console.log(3 in numbers)
//array test false
console.log("is 5 in numbers?i predict false")
console.log(5 in numbers)

