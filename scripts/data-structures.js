
// Class Syntax - use for implementing / defining data structures
// Create class
class Student  {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
  }
}
// Instantiate class
let firstStudent = new Student("John", "Doe", 2);
let secondStudent = new Student("Jane", "Doe", 3);

console.log(firstStudent);


