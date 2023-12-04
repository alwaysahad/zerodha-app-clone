function calculateEMI() {
    // Get input values
    var loanAmount = parseFloat(document.getElementById('loanAmount').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);
    var loanTenure = parseFloat(document.getElementById('loanTenure').value);

    // Calculate EMI
    var monthlyInterestRate = interestRate / (12 * 100);
    var emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTenure)) / (Math.pow(1 + monthlyInterestRate, loanTenure) - 1);

    // Display result in INR
    var emiResultElement = document.getElementById('emiResult');
    emiResultElement.innerHTML = 'EMI: ₹' + formatINR(emi.toFixed(2));
  }
  
  function formatINR(amount) {
    // Format number with commas for thousands separator
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }