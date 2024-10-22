// script.js

// Quiz data containing questions, options, and correct answers
const quizData = [
    {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
        answer: 0
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Gold", "Silver", "Helium"],
        answer: 0
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
        answer: 1
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        answer: 1
    },
    {
        question: "What is the boiling point of water?",
        options: ["100°C", "0°C", "50°C", "25°C"],
        answer: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: 1
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Onion", "Pepper"],
        answer: 1
    },
    {
        question: "Who painted the Sistine Chapel ceiling?",
        options: ["Leonardo da Vinci", "Michelangelo", "Vincent van Gogh", "Pablo Picasso"],
        answer: 1
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: 2
    },
    {
        question: "What is the largest continent on Earth?",
        options: ["Africa", "Asia", "Europe", "North America"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

// Display the first question
displayQuestion();

// Event listener for the submit button
document.getElementById("submit-btn").addEventListener("click", checkAnswer);

// Event listener for the next button
document.getElementById("next-btn").addEventListener("click", nextQuestion);

// Function to display the current question and options
function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.textContent = quizData[currentQuestion].question;

    optionsElement.innerHTML = "";
    quizData[currentQuestion].options.forEach((option, index) => {
        const liElement = document.createElement("li");
        const inputElement = document.createElement("input");
        const labelElement = document.createElement("label");

        inputElement.type = "radio";
        inputElement.name = "option";
        inputElement.value = index;

        labelElement.textContent = option;

        liElement.appendChild(inputElement);
        liElement.appendChild(labelElement);

        optionsElement.appendChild(liElement);
    });
}

// Function to check the selected answer
function checkAnswer() {
    const selectedOption = document.querySelector("input[name='option']:checked");
    if (selectedOption) {
        const selectedAnswer = parseInt(selectedOption.value);
        if (selectedAnswer === quizData[currentQuestion].answer) {
            score++;
        }
        document.getElementById("result").textContent = `Correct answers: ${score} out of ${currentQuestion + 1}`;
    } else {
        alert("Please select an option");
    }
}


// Function to go to the next question
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= quizData.length) {
        // Display the final score
        const finalScore = `Final score: ${score} out of ${quizData.length}`;
        document.getElementById("result").textContent = finalScore;
        // Hide the next button and submit button
        document.getElementById("submit-btn").style.display = "none";
        document.getElementById("next-btn").style.display = "none";
        // Display a play again button
        const playAgainButton = document.createElement("button");
        playAgainButton.textContent = "Play Again";
        playAgainButton.onclick = function() {
            location.reload();
        };
        document.body.appendChild(playAgainButton);
    } else {
        displayQuestion();
    }
}