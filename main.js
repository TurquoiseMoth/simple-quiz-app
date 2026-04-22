let questions = [
  {
    question: "What is the full meaning of WWW?",
    options: [
      { text: "World Wide Web" },
      { text: "Web Web Web" },
      { text: "Wet Watery Whirlpools" },
      { text: "Worrisome Waking Whales" },
    ],
    correctAnswer: 0,
  },
  {
    question: "What browser is commonly used for Web Development?",
    options: [
      { text: "Mozilla Firefox" },
      { text: "Google Chrome" },
      { text: "Microsoft Edge" },
      { text: "Opera" },
    ],
    correctAnswer: 1,
  },

  {
    question: "What does HTML stand for?",
    options: [
      { text: "Hyper Text Markup Language" },
      { text: "Home Tool Markup Language" },
      { text: "Hyperlinks and Text Markup Language" },
      { text: "High Tech Modern Language" },
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the full meaning of CSS?",
    options: [
      { text: "Crazy Spicy Stew" },
      { text: "Cascading Serious Styles" },
      { text: "Cascading Style Sheets" },
      { text: "Centered Styling System" },
    ],
    correctAnswer: 2,
  },
  {
    question: "Which tag is used to link a JavaScript file to HTML?",
    options: [
      { text: "<js>" },
      { text: "<script>" },
      { text: "<link>" },
      { text: "<java>" },
    ],
    correctAnswer: 1,
  },
  {
    question: "What does DOM stand for?",
    options: [
      { text: "Data Object Model" },
      { text: "Document Object Model" },
      { text: "Digital Output Method" },
      { text: "Desktop Object Mode" },
    ],
    correctAnswer: 1,
  },
  {
    question: "Which CSS property changes text color?",
    options: [
      { text: "text-color" },
      { text: "font-color" },
      { text: "color" },
      { text: "foreground" },
    ],
    correctAnswer: 2,
  },
  {
    question: "What is the correct file extension for JavaScript files?",
    options: [
      { text: ".java" },
      { text: ".js" },
      { text: ".javascript" },
      { text: ".script" },
    ],
    correctAnswer: 1,
  },
  {
    question: "Which HTML tag creates a hyperlink?",
    options: [
      { text: "<link>" },
      { text: "<a>" },
      { text: "<href>" },
      { text: "<url>" },
    ],
    correctAnswer: 1,
  },
  {
    question: "What does API stand for?",
    options: [
      { text: "Application Programming Interface" },
      { text: "Advanced Program Integration" },
      { text: "Application Process Instruction" },
      { text: "Automated Program Interface" },
    ],
    correctAnswer: 0,
  },
];

let currentQuestionIndex = 0;
let score = 0;

function renderQuestion() {
  let quizContainer = document.querySelector(".quiz-container");
  quizContainer.innerHTML = "";
  let currentQuestion = questions[currentQuestionIndex];
  let progressIndicator = document.createElement("p");
  progressIndicator.innerHTML = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  let questionElement = document.createElement("h2");

  questionElement.textContent = currentQuestion.question;
  quizContainer.appendChild(progressIndicator);
  quizContainer.appendChild(questionElement);
  currentQuestion.options.forEach((option, index) => {
    let optionElement = document.createElement("button");
    optionElement.textContent = option.text;
    optionElement.onclick = () => {
      if (index === currentQuestion.correctAnswer) {
        score++;
      }
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        renderQuestion();
      } else {
        quizContainer.innerHTML = `<h2>Quiz Completed! Your score is ${(score / questions.length) * 100}%</h2>`;
      }
    };
    quizContainer.appendChild(optionElement);
  });
  let skipButton = document.createElement("button");
  skipButton.textContent = "Skip Question";
  skipButton.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      renderQuestion();
    } else {
      quizContainer.innerHTML = `<h2>Quiz Completed! Your score is ${(score / questions.length) * 100}%</h2>`;
    }
  };
  quizContainer.appendChild(skipButton);
}
renderQuestion();
