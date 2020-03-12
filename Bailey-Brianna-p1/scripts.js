//welcome message
var user = 'Brianna';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are my favorite things.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

// product price
var price = 20,
    averageDiscount = .20,
    averagePrice = price - (price * averageDiscount),
    priceEl = document.getElementById('price'),
    averagePriceEl = document.getElementById('average-price');

priceEl.textContent = price.toFixed(2);
averagePriceEl.textContent = averagePrice.toFixed(2);