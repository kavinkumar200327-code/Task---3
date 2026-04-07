// let name = prompt("Enter your name:")
// let age = prompt("Enter your age:")
// let salary = prompt("Enter your monthly salary:")
// let loanAmount = prompt("Enter your loan amount:")


// console.log("Before Conversion:", typeof Yourname, typeof age, typeof salary, typeof loanAmount)

let name = (prompt("Enter your Full Name:"))
let age = Number(prompt("Enter your Age:"))
let salary  = Number(prompt("Enter Your Salary:"))
let loanAmount = Number(prompt("Enter loan Amount:"))

console.log("After conversion:",typeof name, typeof age, typeof salary, typeof loanAmount)

let isEligible = (age >= 21 && age <= 60) && (salary  >= 25000)
console.log("Name:", name)
console.log("Age:", age)
console.log("Salary", salary)
console.log("LoanAmount:", loanAmount)
console.log(isEligible ? "Eligible ✅" : "Not Eligible ❌")

let emi = loanAmount / 12
    console.log("EMI AMOUNT:", emi )

if(loanAmount >= 500000)
{
    console.log("Loan Category: High Loan")
}
else if(loanAmount >= 200000)
{
    console.log("Loan Category: Medium Loan")
}
else
{
    console.log("Loan Category: Low Loan")
}

let risklevel = salary >= 50000 ? "Low Risk" : "High Risk"
console.log("Risk Level:", risklevel)

let monthlyemi = loanAmount / 12
switch(true)
{
    case(monthlyemi > 40000): customerType = "Premium Customer";break;
    case(monthlyemi > 20000): customerType = "Standard Customer";break;
    default: customerType = "Normal Customer";
}

console.log("CustomerType :", customerType)