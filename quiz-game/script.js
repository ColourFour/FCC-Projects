const questions = [];

const q1 = {
  category: "Movies",
  question: "In the movie The Matrix, what color is the pill that Neo takes?",
  choices: ["red", "blue", "white"],
  answer: "red"
}


const q2 = {
  category: "Pop Music",
  question: `Which *NSYNC song features the iconic line: “It's gonna be me”?`,
  choices: ["Bye Bye Bye", "It's Gonna Be Me", "I Want You Back"],
  answer: "It's Gonna Be Me"
}


const q3 = {
  category: "Geography",
  question: "Which country has the most natural lakes in the world?",
  choices: ["Russia","Canada","Finland"],
  answer: "Canada"
}

const q4 = {
  category: "Science",
  question: "What planet has the strongest gravity in our solar system?",
  choices: ["Earth","Saturn","Jupiter"],
  answer: "Jupiter"
}


const q5 = {
  category: "Food",
  question: "Which cheese is traditionally used for making tiramisu?",
  choices: ["Ricotta","Mascarpone","Cream Cheese"],
  answer: "Mascarpone"
}

questions.push(q1, q2, q3, q4, q5);

function getRandomQuestion(questions) {
  const i = Math.floor(Math.random() * questions.length);
  return questions[i];
}

function getRandomComputerChoice(choices) {
  const i = Math.floor(Math.random()*3);
  return choices[i];
}

function getResults(selectedQuestion, computerChoice){
  if(computerChoice === selectedQuestion.answer){
    return "The computer's choice is correct!";
  }
  else{
     return "The computer's choice is wrong. The correct answer is: " + selectedQuestion.answer;
  }
}


