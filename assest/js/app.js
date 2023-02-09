var cl = console.log;

//   var a = 3;
//   var b = 4;
//   var c = 5;
//   if (a*a + b*b === c*c) {
//     cl("The given triangle is right angled..");
//   }
//   else {
//     cl("The given triangle is not right angled..");
//   }



// var a = 3;
// var b = 4;
// var c = 5;
// for (var i = 0; i < a; i++) {
//     if (a * a + b * b === c * c) {
//        cl("The given triangle is right angled..");
//   }
//   else {
//     cl("The given triangle is not right angled..");
//     }
// }



// function rightAngleTriangle(a,b,c){
//     if (a * a + b * b === c * c) {
//         cl("The given triangle is right angled..");
//     }
//     else {
//         cl("The given triangle is not right angled..");
//     }
// }
// rightAngleTriangle(3,4,5);
// //rightAngleTriangle(2,4,5);



const rightAngleTriangle = (a, b, c) => (a * a + b * b === c * c)

cl(rightAngleTriangle(3, 4, 5), `The given triangle is right angled..`);
cl(rightAngleTriangle(2, 4, 5), `The given triangle is not right angled..`);







