
document.getElementById('place-bet').addEventListener('click', function() {
    const betAmount = parseFloat(document.getElementById('bet-amount').value);
    const resultDiv = document.getElementById('result');

    // Validate the bet amount
    if (isNaN(betAmount) || betAmount <= 0) {
        resultDiv.textContent = "Please enter a valid bet amount.";
        resultDiv.className = ''; // Reset class
        return;
    }

    // Simulating win/lose
    const winProbability = Math.random(); // Random probability for win/lose
    const winAmount = betAmount * 2; // Double the bet if win

    // Determine win or lose based on random probability
    if (winProbability > 0.5) {
        resultDiv.textContent = `You win! Amount: $${winAmount.toFixed(2)}`;
        resultDiv.className = 'win'; // Add class for winning style
    } else {
        resultDiv.textContent = "You lost the bet. Better luck next time!";
        resultDiv.className = 'lose'; // Add class for losing style
    }

    // Clear input field after placing the bet
    document.getElementById('bet-amount').value = '';
});
