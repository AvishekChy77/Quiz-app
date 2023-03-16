const quizData = [
    {
        question: "Starting in 2026, how many national teams will compete in the World Cup?",
        a: "16",
        b: "32",
        c: "48",
        d: "64",
        correct: "c",
    },
    {
        question: "How often does the World Cup take place?",
        a: "every four years",
        b: "every two years",
        c: "twice a year",
        d: "every year",
        correct: "a",
    },
    {
        question: "Which country hosted the 2022 World Cup?",
        a: "Mexico",
        b: "Qatar",
        c: "England",
        d: "Saudi Arabia",
        correct: "b",
    },
    {
        question: "Prior to the 2026 World Cup, which goalkeeper holds the record for the most saves in a single World Cup match?",
        a: "Lev Yashin",
        b: "Tim Howard",
        c: "Manuel Neuer",
        d: "Gianluigi Buffon",
        correct: "b",
    },
    {
        question: "In what year did the World Cup competition start?",
        a: "1926",
        b: "1936",
        c: "1930",
        d: "1964",
        correct: "c",
    },
    {
        question: "Which country won the World Cup in 2018?",
        a: "Croatia",
        b: "Germany",
        c: "France",
        d: "England",
        correct: "c",
    },
    {
        question: "Which country has won the most World Cups?",
        a: "Germany",
        b: "Brazil",
        c: "Argentina",
        d: "Spain",
        correct: "b",
    },
    {
        question: "Prior to the 2026 World Cup, which player is the all-time leading goal scorer in World Cup history?",
        a: "Lionel Messi",
        b: "Miroslav Klose",
        c: "Pelé",
        d: "Gerd Müller",
        correct: "b",
    },
    {
        question: "The FIFA World Cup Trophy depicts two people holding up a golden object - what is it?",
        a: "A cup",
        b: "A football",
        c: "The earth",
        d: "A child",
        correct: "c",
    },
    {
        question: "Which is the only country to have competed in every World Cup finals series?",
        a: "Brazil",
        b: "Germany",
        c: "Argentina",
        d: "Spain",
        correct: "a",
    }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})