const quotesArray = [
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      person: "Franklin D. Roosevelt"
    },
    {
      quote: "In three words I can sum up everything I've learned about life: it goes on.",
      person: "Robert Frost"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      person: "Eleanor Roosevelt"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      person: "Winston Churchill"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      person: "Steve Jobs"
    },
    {
      quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
      person: "Chinese Proverb"
    },
    {
      quote: "The only thing we have to fear is fear itself.",
      person: "Franklin D. Roosevelt"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      person: "Confucius"
    },
    {
      quote: "Innovation distinguishes between a leader and a follower.",
      person: "Steve Jobs"
    },
    {
      quote: "The journey of a thousand miles begins with one step.",
      person: "Lao Tzu"
    }
  ];

// collect all id // 
const quoteButton =  document.getElementById('quote-btn');
const keepQuoteOne = document.getElementById('quote-generate');
const keepQuoteTwo = document.getElementById('quote-generate-two');
// collect all id //


// operation start // 
quoteButton.addEventListener('click', function(){
   const generateRandom = Math.floor(Math.random() * quotesArray.length);

   keepQuoteOne.innerText = quotesArray[generateRandom].quote;
   keepQuoteTwo.innerText = quotesArray[generateRandom].person;
});
// operation end // 