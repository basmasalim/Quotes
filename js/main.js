var quotes = [
  {
    quote: `"Every action you take is a vote for the person you wish to become."`,
  },
  {
    quote: `"Habits are the compound interest of self-improvement."`,
  },
  {
    quote: `"Your habits shape your identity, and your identity shapes your habits."`,
  },
  {
    quote: `"You get what you repeat."`,
  },
  {
    quote: `"Good habits make time your ally, bad habits make time your enemy."`,
  },
  {
    quote: `"The seed of every habit is a single, tiny decision."`,
  },
  {
    quote: `"You do not rise to the level of your goals, you fall to the level of your systems."`,
  },
  {
    quote: `"Your identity emerges out of your habits."`,
  },
  {
    quote: `"The most practical way to change who you are is to change what you do." `,
  },
  {
    quote: `"Quite literally, you become your habits."`,
  },
  {
    quote: `"Be the designer of your world and not merely the consumer of it."`,
  },
  {
    quote: `"Habits are the compound interest of self-improvement."`,
  },
  {
    quote: `"Goals are good for setting a direction, but systems are best for making progress."`,
  },
  {
    quote: `"Success is the product of daily habits—not once-in-a-lifetime transformations."`,
  },
  {
    quote: `"When you can’t win by being better, you can win by being different."`,
  },
  {
    quote: `"Professionals stick to the schedule;
    amateurs let life get in the way."`,
  },
  {
    quote: `"You don’t have to be the victim of your environment. You can also be the architect of it."`,
  },
  {
    quote: `"If you want better results, then forget about setting goals. Focus on your system instead."`,
  },
  {
    quote: `"We imitate the habits of three groups in particular: The close. The many. The powerful."`,
  },
  {
    quote: `"It is not too late to do what you want to do—if you stop waiting for the time to be right"`,
  },
  {
    quote: `"The imperfect project you actually complete is worth more than the perfect project you never finish."`,
  },
];

const quoteText = document.querySelector(".quote-content"),
  quoteBtn = document.querySelector(".gnBtn"),
  speechBtn = document.querySelector(".speech"),
  copyBtn = document.querySelector(".copy"),
  twitterBtn = document.querySelector(".twitter"),
  synth = speechSynthesis;

let currentQuoteIndex;

const getRandomQuoteIndex = () => {
  let newIndex = Math.floor(Math.random() * quotes.length);
  // Ensure the new index is different from the current one
  while (newIndex === currentQuoteIndex) {
    newIndex = Math.floor(Math.random() * quotes.length);
  }
  currentQuoteIndex = newIndex;
  return currentQuoteIndex;
};

quoteBtn.addEventListener("click", function () {
  let randomQuotesIndex = getRandomQuoteIndex();
  quoteText.innerHTML = quotes[randomQuotesIndex].quote;
});

speechBtn.addEventListener("click", () => {
  if (!quoteBtn.classList.contains("loading")) {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText}`);
    synth.speak(utterance);
    setInterval(() => {
      !synth.speaking
        ? speechBtn.classList.remove("active")
        : speechBtn.classList.add("active");
    }, 1);
  }
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
});

quoteBtn.addEventListener("click", randomQuote);
