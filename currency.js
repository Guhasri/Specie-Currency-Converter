document.addEventListener('DOMContentLoaded', function() {
    var convertButton = document.getElementById('convert');
    var fromInput = document.getElementById('from');
    var toInput = document.getElementById('to');
    var amountInput = document.getElementById('amount');
    var resultDiv = document.getElementById('Finalvalue');

    // Initially hide the result div
    resultDiv.style.display = 'none';

    // Event listener for the CONVERT button
    convertButton.addEventListener('click', function() {
        var fromCurrency = fromInput.value;
        var toCurrency = toInput.value;
        var amount = amountInput.value;

        // Include your API code here using fromCurrency, toCurrency, and amount
        $.ajax({
            method: 'GET',
            url: `https://api.api-ninjas.com/v1/convertcurrency?want=${toCurrency}&have=${fromCurrency}&amount=${amount}`,
            headers: { 'X-Api-Key': 'kVCnI797T8OiYjBbPZoKPpyu7EzFVdIK5SSMaWyE' }, // Replace with your actual API key
            contentType: 'application/json',
            success: function(result) {
                console.log('API Response:', result);

                // Display the result in the resultDiv
                resultDiv.textContent = `Converted amount: ${result.new_amount} ${result.new_currency}`;
                resultDiv.style.display = 'block';
            },
            error: function ajaxError(jqXHR) {
                console.error('Currency not available or in Premium Tier ', jqXHR.responseText);
            }
        });
    });
});