let students =["Amit", "Priya", "Rahul", "Sneha"];
console.log(students);
console.log(students[0]);
console.log(students[3]);
console.log(students.length);
students.push("Neha");
console.log(students);
students.pop();
console.log(students);
students[1] = "Kamlesh";
console.log(students);

for(let i = 0; i < students.length; i++){
  console.log(students[i]);
}