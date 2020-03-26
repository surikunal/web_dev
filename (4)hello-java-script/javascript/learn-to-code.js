//var name = "Kunal";
//
//var age = 21;
//
//var message = "Hi, my name is " + name + " and I am " + age + " years old";
//
// //alert(message);

//console.log(message);
//======================================================
//var age1 = 23;
//
//var age2 = "23";
//
//if (age1 == age2) {
//   console.log("value of age1 and age2 is same !!!");
//}
//
//if (age1 === age2) {
//   console.log("value and type of age 1 and age 2 is same !!!");
//}

/*
   == check the value
   === chcek the value and type
   !== check not equal values and type
*/
//=======================================================

//var student0 = {
//   firstName : "Kunal", 
//   lastName : "Suri",
//   age : 21
//};

//console.log(student0.greeting());

//creates a new empty object
//var student1 = new Object();
//student1.firstName = "John";
//student1.lastName = "Parker";
//student1.age = 7;
//
//var student2 = {};
//student2.firstName = "cool";
//student2.lastName = "noth";
//student2.age = 6;
//

//students.push(student0);
//students.push(student1);
//students.push(student2);
//
//for (var index = 0; index < students.length; index++) {
//   console.log(students[index]);
//}

//console.log(student.firstName);
//console.log(student.lastName);
//console.log(student["firstName"]);
//console.log(student["lastName"]);

//var student = [];
//
//function students(first, last, age) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.greeting = function() {
//      return "Hi, I'm " + this.firstName + " and i am " + this.age + " years old !";
//   }
//}
//
////var s1 = new students("Jenny", "Laga", 5);
////console.log(s1);
////console.log(s1.greeting());
//
//student.push(new students("Jenny", "Laga", 5));
//student.push(new students("Kunal", "Suri", 13));
//student.push(new students("Chu", "tia", 4));
//
//
////var stu = student[0];
////for (var key in stu) {
////   console.log(students[key]);
////}
//
//for (var i = 0; i < student.length; i++) {
//   var stu = student[i];
//   console.log(stu.greeting());
//}


//===================================================


this.car = "Honda Civic";

var markGarage = {
   car : "Aston Martin",
   getCar : function() {
      return this.car;
   }
};

console.log(markGarage.getCar());
//giving "Aston Martin" which is normal

//-----------------------------
 
var storeGetCarForLater = markGarage.getCar;
console.log(storeGetCarForLater());
//giving "Honda Civic" because we call a function by saving it in a variable, that's how we will lose the access of our output 
//so to resolve this, we use bind function

//------------------------------

//var theRealGetCarFunction = markGarage.getCar.bind(markGarage);//****
var theRealGetCarFunction = markGarage.getCar.bind(this);      
console.log(theRealGetCarFunction());












