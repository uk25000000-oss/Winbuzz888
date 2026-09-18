
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
```

### Code Explanation:

1. **Event Listener**: 
   - `document.getElementById('place-bet').addEventListener('click', ...)`: Jab user "Place Bet" button par click karega, to function execute hoga.

2. **Input Value Retrieval**: 
   - `const betAmount = parseFloat(document.getElementById('bet-amount').value);`: User se bet amount ko number mein convert kiya ja raha hai.

3. **Validation**: 
   - Input validation kiya gaya hai. Agar user valid amount nahi dalta, to error message dikhaya jayega.

4. **Win/Lose Logic**: 
   - `const winProbability = Math.random();`: Random number generate hota hai (0 se 1 ke beech). 0.5 se zyada value hone par user ko jeet milti hai.
   - Win hone par amount double ho jata hai.

5. **Result Display**: 
   - Result ko `resultDiv` mein dikhaya ja raha hai aur win ya lose ke liye different classes (`win` ya `lose`) add kiye gaye hain.

6. **Input Clear**: 
   - Bet place karne ke baad input field ko clear kiya gaya hai.

### Implementation Steps:

1. **Create a File**: Apne project ke folder mein `script.js` naam se ek nayi JavaScript file banayein.

2. **Copy the Code**: Upar diya gaya JavaScript code is file mein paste karein.

3. **Link JavaScript to HTML**: Apne `index.html` file mein `<script src="script.js"></script>` line ko include karein, jaise pehle se hai.

4. **Save Changes**: Har ek file mein apne changes ko save karein.

5. **Open in Browser**: Apne HTML file ko browser mein kholen aur testing karein ki sab kuch sahi se kaam kar raha hai.

Agar aapko koi