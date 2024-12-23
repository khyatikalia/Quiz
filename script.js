let timerEl = document.querySelector(".timer_sec");
let time;
let timerId;
let userAnswers = [];
const questions = [
  {
    question: "Which one is a markup language",
    answer: ["Html", "Python", "Css", "Javascript"],
    correct: "a",
  },
  {
    question: "Which one is used for styling web pages",
    answer: ["Javascript", "Html", "Css", "Sql"],
    correct: "c",
  },
  {
    question: "Which one is a database management system",
    answer: ["Mysql", "Python", "Excel", "Flask"],
    correct: "a",
  },
  {
    question: "Which one is a version control system",
    answer: ["Git", "Photoshop", "Docker", "Linux"],
    correct: "a",
  },
  {
    question: "Which one is a JavaScript framework",
    answer: ["Angular", "Laravel", "Django", "Spring"],
    correct: "a",
  },
  {
    question: "Which one is a back-end framework",
    answer: ["Express.js", "Vue.js", "Laravel", "Bootstrap"],
    correct: "c",
  },
  {
    question: "Which one is a cloud service provider",
    answer: ["Aws", "Docker", "Flask", "Bootstrap"],
    correct: "a",
  },
  {
    question: "Which one is a NoSQL database",
    answer: ["Mongodb", "Mysql", "Oracle", "Sql Server"],
    correct: "a",
  },
  {
    question: "Which one is a programming language",
    answer: ["Java", "Git", "Html", "Photoshop"],
    correct: "a",
  },
  {
    question: "Which one is a Python web framework",
    answer: ["Flask", "Laravel", "Vue.js", "Spring"],
    correct: "a",
  },
  {
    question: "Which one is a continuous integration tool",
    answer: ["Jenkins", "Docker", "Github", "Node.js"],
    correct: "a",
  },
  {
    question: "Which one is a type of cybersecurity attack",
    answer: ["Phishing", "Mongodb", "Javascript", "Html"],
    correct: "a",
  },
  {
    question: "Which one is a JavaScript library",
    answer: ["React", "Django", "Spring", "Flask"],
    correct: "a",
  },
  {
    question: "Which one is a JavaScript runtime",
    answer: ["Node.js", "React", "Angular", "Vue.js"],
    correct: "a",
  },
  {
    question: "Which one is an integrated development environment (IDE)",
    answer: ["Vs Code", "Git", "Docker", "Linux"],
    correct: "a",
  },
  {
    question: "Which one is a Python library for data science",
    answer: ["Numpy", "Laravel", "Django", "Vue.js"],
    correct: "a",
  },
  {
    question: "Which one is a containerization tool",
    answer: ["Docker", "Python", "Gimp", "Excel"],
    correct: "a",
  },
  {
    question: "Which one is a relational database management system",
    answer: ["Mysql", "Mongodb", "Cassandra", "Hbase"],
    correct: "a",
  },
  {
    question: "Which one is a front-end framework",
    answer: ["Angular", "Django", "Node.js", "Flask"],
    correct: "a",
  },
  {
    question: "Which one is a cloud platform",
    answer: ["Google Cloud", "Windows", "Eclipse", "Kubernetes"],
    correct: "a",
  },
  {
    question: "Which one is a version control hosting service",
    answer: ["Github", "Docker", "Flask", "Javascript"],
    correct: "a",
  },
  {
    question: "Which one is a query language",
    answer: ["Sql", "Python", "Javascript", "Html"],
    correct: "a",
  },
  {
    question: "Which one is a software development methodology",
    answer: ["Scrum", "Java", "Docker", "Css"],
    correct: "a",
  },
  {
    question: "Which one is a type of database",
    answer: ["Mongodb", "Laravel", "Docker", "React"],
    correct: "a",
  },
  {
    question: "Which one is a Python package manager",
    answer: ["Pip", "Npm", "Yarn", "Composer"],
    correct: "a",
  },
  {
    question: "Which one is a file transfer protocol",
    answer: ["Ftp", "Http", "Smtp", "Dns"],
    correct: "a",
  },
  {
    question: "Which one is an operating system",
    answer: ["Linux", "Git", "Github", "Html"],
    correct: "a",
  },
  {
    question: "Which one is a type of software license",
    answer: ["MIT", "Github", "Npm", "Jenkins"],
    correct: "a",
  },
  {
    question: "Which one is a web server",
    answer: ["Apache", "React", "Flask", "Vue.js"],
    correct: "a",
  },
  {
    question: "Which one is a data structure",
    answer: ["Array", "Html", "Css", "Java"],
    correct: "a",
  },
  {
    question: "Which one is a design pattern",
    answer: ["Singleton", "Html", "Css", "Git"],
    correct: "a",
  },
  {
    question: "Which one is an agile framework",
    answer: ["Scrum", "Angular", "Html", "Git"],
    correct: "a",
  },
  {
    question: "Which one is a Python testing framework",
    answer: ["Pytest", "Unittest", "Mocha", "Junit"],
    correct: "a",
  },
  {
    question: "Which one is a JavaScript transpiler",
    answer: ["Babel", "Jquery", "Flask", "Java"],
    correct: "a",
  },
  {
    question: "Which one is a CSS preprocessor",
    answer: ["Sass", "Html", "Angular", "Php"],
    correct: "a",
  },
  {
    question: "Which one is an open-source relational database",
    answer: ["Postgresql", "Mongodb", "Oracle", "React"],
    correct: "a",
  },
  {
    question: "Which one is a mobile app development framework",
    answer: ["Flutter", "Django", "React", "Node.js"],
    correct: "a",
  },
  {
    question: "Which one is a distributed version control system",
    answer: ["Git", "Excel", "Github", "Vscode"],
    correct: "a",
  },
  {
    question: "Which one is a Python web framework",
    answer: ["Django", "Vue.js", "React", "Bootstrap"],
    correct: "a",
  },
  {
    question: "Which one is a cloud computing service",
    answer: ["Azure", "Flask", "Bootstrap", "Vue.js"],
    correct: "a",
  },
  {
    question: "Which one is a Java framework",
    answer: ["Spring", "Django", "Angular", "Vue.js"],
    correct: "a",
  },
  {
    question: "Which one is a JavaScript testing framework",
    answer: ["Jest", "Vue.js", "Python", "Sql"],
    correct: "a",
  },
  {
    question: "Which one is a code editor",
    answer: ["Vs Code", "Slack", "Docker", "Github"],
    correct: "a",
  },
  {
    question: "Which one is a Python package",
    answer: ["Pandas", "Css", "Javascript", "Angular"],
    correct: "a",
  },
  {
    question: "Which one is a Java development environment",
    answer: ["Intellij", "Docker", "Python", "Css"],
    correct: "a",
  },
  {
    question: "Which one is a web application framework",
    answer: ["Django", "Photoshop", "Git", "Numpy"],
    correct: "a",
  },
  {
    question: "Which one is a code collaboration platform",
    answer: ["Github", "Visual Studio", "Npm", "Kubernetes"],
    correct: "a",
  },
  {
    question: "Which one is an API documentation tool",
    answer: ["Swagger", "Bootstrap", "Css", "Html"],
    correct: "a",
  },
];

const shuffleArray = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const getRandomQuestions = (questions, num) => {
  const shuffled = shuffleArray(questions);
  return shuffled.slice(0, num);
};

const selectedQuestions = getRandomQuestions(questions, 10);

let index = 0;
const total = selectedQuestions.length;
let correct = 0,
  wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInput = document.querySelectorAll(".option");

const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = selectedQuestions[index];
  quesBox.innerText = `${index + 1}) ${data.question}`;
  optionInput[0].nextElementSibling.innerText = data.answer[0];
  optionInput[1].nextElementSibling.innerText = data.answer[1];
  optionInput[2].nextElementSibling.innerText = data.answer[2];
  optionInput[3].nextElementSibling.innerText = data.answer[3];

  clearInterval(timerId);
  time = 10;
  timerEl.textContent = time;
  timerId = setInterval(clockTick, 1000);
};

const nextAnswer = () => {
  debugger;
  const ans = getAnswer();
  if (ans === selectedQuestions[index].correct) {
    correct++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
};

const getAnswer = () => {
  let ansI = "";
  optionInput.forEach((input, i) => {
    if (input.checked) {
      ansI = input.value;
    }
  });
  return ansI;
};

const reset = () => {
  optionInput.forEach((input) => {
    input.checked = false;
  });
};

function clockTick() {
  time--;
  timerEl.textContent = time;
  if (time <= 0) {
    clearInterval(timerId);
    nextAnswer();
  }
}

const endQuiz = () => {
  clearInterval(timerId);

  // Create the result HTML
  let result = `
    <div class="p-4 bg-white rounded-lg shadow-lg">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold">Quiz Results</h1>
        <button
          onclick="resetQuiz()"
          class="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition duration-300 transform hover:scale-105"
        >
          Reset
        </button>
      </div>
      <h2 class="text-xl font-semibold mb-8">${correct} / ${total} correct</h2>
      <div class="max-h-80 overflow-y-auto p-2 border-t border-gray-300">
        <h3 class="text-lg font-medium mb-3">Review:</h3>
        <ol class="list-decimal ml-5 space-y-4">`;

  selectedQuestions.forEach((question, i) => {
    const userAnswer = userAnswers[i] || "No answer";
    const correctAnswer = question.correct;

    result += `
      <li class="mt-3">
        <p class="font-semibold">Question ${i + 1}: ${question.question}</p>
        <p>Your answer: <span>${
          question.answer[userAnswer.charCodeAt(0) - 97] || "No answer"
        }</span></p>
        <p>Correct answer: <span class="text-blue-500">${
          question.answer[correctAnswer.charCodeAt(0) - 97]
        }</span></p>
      </li>`;
  });

  result += `
        </ol>
      </div>
    </div>`;

  document.querySelector(".quizBox").innerHTML = result;
};

const resetQuiz = () => {
  location.reload();
};

loadQuestion();
