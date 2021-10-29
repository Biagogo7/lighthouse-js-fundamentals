function whichSchool(age) {

let school; 
//let age;

if (age < 13) {
  school = 'Elementary';
} else if (age >= 13 && age <= 18) {
  school = 'Secondary School';
} else {
  school = 'Lighthouse Labs'
}
return console.log('I am ' + age + '. and will be attending ' + school +'.' )
}

whichSchool(11);
