
const questions = [
    {
        "que": "Which of the following is a mark-up language?",
        "a": "HTML",
        "b": "CSS",
        "c": "JavaScript",
        "d": "PHP",
        "correct": "a"
    },
    {
        "que": "What is the capital of Japan?",
        "a": "Beijing",
        "b": "Seoul",
        "c": "Tokyo",
        "d": "Bangkok",
        "correct": "c"
    },
    {
        "que": "Which planet is known as the Red Planet?",
        "a": "Mars",
        "b": "Venus",
        "c": "Jupiter",
        "d": "Saturn",
        "correct": "a"
    },
    {
        "que": "What is the largest mammal in the world?",
        "a": "Elephant",
        "b": "Blue Whale",
        "c": "Giraffe",
        "d": "Hippopotamus",
        "correct": "b"
    },
    {
        "que": "In which year did the Titanic sink?",
        "a": "1910",
        "b": "1925",
        "c": "1912",
        "d": "1931",
        "correct": "c"
    },
    {
        "que": "What is the capital of Australia?",
        "a": "Sydney",
        "b": "Melbourne",
        "c": "Canberra",
        "d": "Perth",
        "correct": "c"
    },
    {
        "que": "Who wrote 'Romeo and Juliet'?",
        "a": "Charles Dickens",
        "b": "William Shakespeare",
        "c": "Jane Austen",
        "d": "Mark Twain",
        "correct": "b"
    },
    {
        "que": "Which programming language is known for its versatility and use in web development?",
        "a": "Java",
        "b": "Python",
        "c": "Ruby",
        "d": "JavaScript",
        "correct": "d"
    },
    {
        "que": "What is the capital of Brazil?",
        "a": "Buenos Aires",
        "b": "Brasília",
        "c": "Rio de Janeiro",
        "d": "São Paulo",
        "correct": "b"
    },
    {
        "que": "What is the chemical symbol for gold?",
        "a": "Gd",
        "b": "Au",
        "c": "Ag",
        "d": "Fe",
        "correct": "b"
    },
    {
        "que": "Who painted the Mona Lisa?",
        "a": "Vincent van Gogh",
        "b": "Leonardo da Vinci",
        "c": "Pablo Picasso",
        "d": "Michelangelo",
        "correct": "b"
    },
    {
        "que": "Which country is known as the Land of the Rising Sun?",
        "a": "China",
        "b": "South Korea",
        "c": "Japan",
        "d": "Vietnam",
        "correct": "c"
    },
    {
        "que": "What is the largest ocean on Earth?",
        "a": "Atlantic Ocean",
        "b": "Indian Ocean",
        "c": "Southern Ocean",
        "d": "Pacific Ocean",
        "correct": "d"
    },
    {
        "que": "Who developed the theory of relativity?",
        "a": "Isaac Newton",
        "b": "Albert Einstein",
        "c": "Galileo Galilei",
        "d": "Stephen Hawking",
        "correct": "b"
    },
    {
        "que": "What is the capital of Canada?",
        "a": "Vancouver",
        "b": "Toronto",
        "c": "Montreal",
        "d": "Ottawa",
        "correct": "d"
    },
    {
        "que": "Which gas do plants absorb from the atmosphere?",
        "a": "Oxygen",
        "b": "Carbon Dioxide",
        "c": "Nitrogen",
        "d": "Hydrogen",
        "correct": "b"
    },
    {
        "que": "Who wrote 'To Kill a Mockingbird'?",
        "a": "George Orwell",
        "b": "Harper Lee",
        "c": "J.K. Rowling",
        "d": "Mark Twain",
        "correct": "b"
    },
    {
        "que": "What is the currency of Japan?",
        "a": "Yuan",
        "b": "Won",
        "c": "Yen",
        "d": "Ringgit",
        "correct": "c"
    },
    {
        "que": "What is the speed of light?",
        "a": "299,792 kilometers per second",
        "b": "150,000 kilometers per second",
        "c": "200,000 kilometers per second",
        "d": "400,000 kilometers per second",
        "correct": "a"
    }
]
let index;
let total= question.length;
let right= 0,wrong=0; 
index = Math.floor((Math.random() * 18));
// console.log(index)
const quebox = document.getElementById("question")

const opt=document.querySelectorAll(".options")


const loadQuestion = async () => {
    const data = questions[index]
    console.log(data)
    quebox.innerText =`${index+1})${data.que}`;
    opt[0].nextElementSibling.innerText=data.a;
    opt[1].nextElementSibling.innerText=data.b;
    opt[2].nextElementSibling.innerText=data.c;
    opt[3].nextElementSibling.innerText=data.d;


}
const submitQuiz=()=>{
    const data=questions[index];
    const ans=getAnswer()
    if(ans==data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion()
    return;
}
const getAnswer=()=>{
    let answer;
    opt.forEach(
        (input)=>{
            if(input.checked){
                answer= input.value;
                
            }
        }
    )
    return answer
}

loadQuestion();