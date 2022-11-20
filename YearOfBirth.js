let yearofbirth = parseInt(prompt("Enter year of birth ="))
let currentYear = 2022
let age = currentYear - yearofbirth
let ans = (age>=13 && age<=19)?("Teenager"):(age>18&&age<30)?("In Twenties"):("NA")
console.log(ans)