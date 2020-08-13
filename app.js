// Listen for submit
document
  .getElementById("loan-form")
  .addEventListener("submit", calculateResults);

// Calculate results
function calculateResults(e) {
  //  Ui Vars
  const amount = document.getElementById("amount")
  const interest = document.getElementById("interest")
  const years = document.getElementById("years")
  const monthlyPayment = document.getElementById("monthlyPayment")
  const totalPayment = document.getElementById("totalPayment")
  const totalInterest = document.getElementById("totalInterest")

  const principal = parseFloat(amount.value)
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 +)
  
  
  e.preventDefault();
}
