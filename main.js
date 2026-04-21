let questions = [
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
    question:"What is the full meaning of CSS?",
  options:[
    {text: "Crazy Spicy Stew"},
    {text: "Cascading Serious Styles "},
    {text: "Cascading Style Sheets"},
    {text: "Centered Styling System"}
  ],
  correctAnswer: 2,
  }
];

let currentQuestionIndex = 0;
let score = 0;

function renderQuestion() {
  let quizContainer = document.querySelector(".quiz-container");
  quizContainer.innerHTML = "";
  let currentQuestion = questions[currentQuestionIndex];
  let questionElement = document.createElement("h2");

  questionElement.textContent = currentQuestion.question;
  quizContainer.appendChild(questionElement);
  currentQuestion.options.forEach((option, index) => {
    let optionElement = document.createElement("button");
    optionElement.textContent = option.text;
    optionElement.onclick = () => {
      if (index === currentQuestion.correctAnswer) {
        score++;
      }
      currentQuestionIndex++;
    //   renderQuestion();
    if (currentQuestionIndex < questions.length) {
      renderQuestion();
    } else {
        quizContainer.innerHTML = `<h2>Quiz Completed! Your score is ${(score/questions.length) * 100}%</h2>`;
    }
    };
    quizContainer.appendChild(optionElement);
  });
}
renderQuestion();
