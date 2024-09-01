var quiz = document.querySelector(".quiz")
var score = document.querySelector(".score")
var nextBtn = document.getElementById("next-btn")
var questionIndex = 0;
var actualScore = 0;

var questions = JSON.parse(localStorage.getItem('questions'));

questions.forEach(question => {
    shuffle(question.optionArr);
})
function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

var totalMarks = questions.length*10;
score.innerHTML = `Score: ${totalMarks}/0`
// var questions1 = [
//     {
//         ques: 'Who is the founder of Pakistan?',
//         optionArr: [
//             { opt: 'Allama Iqbal', result: false, isClicked: false },
//             { opt: 'Quaid e Azam', result: true, isClicked: false },
//             { opt: 'Noman', result: false, isClicked: false },
//             { opt: 'Honey', result: false, isClicked: false },
//         ]

//     },
//     {
//         ques: 'What is your teacher favourite color?',
//         optionArr: [
//             { opt: 'Pink', result: false, isClicked: false },
//             { opt: 'Yellow', result: false, isClicked: false },
//             { opt: 'Green', result: false, isClicked: false },
//             { opt: 'Blue', result: true, isClicked: false },
//         ]
//     },
//     {
//         ques: 'What is your teacher favourite fruit?',
//         optionArr: [
//             { opt: 'Mango', result: true, isClicked: false },
//             { opt: 'Orange', result: false, isClicked: false },
//             { opt: 'Apple', result: false, isClicked: false },
//             { opt: 'Banana', result: false, isClicked: false }
//         ]
//     },
//     {
//         ques: 'Who is your teacher favourite personality?',
//         optionArr: [
//             { opt: 'Allama Iqbal', result: false, isClicked: false },
//             { opt: 'Noman', result: false, isClicked: false },
//             { opt: 'Honey', result: false, isClicked: false },
//             { opt: 'Haram', result: true, isClicked: false }
//         ]
//     },
//     {
//         ques: 'What is your teacher favourite food?',
//         optionArr: [
//             { opt: 'Daal', result: false, isClicked: false },
//             { opt: 'Biryani', result: true, isClicked: false },
//             { opt: 'Karahi', result: false, isClicked: false },
//             { opt: 'Qorma', result: false, isClicked: false },
//         ]
//     },
// ];

const optionSelect = (actualIndex) => {
    console.log('optIndex', actualIndex);
    
    questions[questionIndex].optionArr.forEach((obj) => {
        obj.isClicked = false;
    });
    questions[questionIndex].optionArr[actualIndex].isClicked = true;
    startQuiz();
    console.log(questions[questionIndex]);
    
};


const nextQues = () => {
    questions[questionIndex].optionArr.forEach(option => {
        if (option.result && option.isClicked) {
            actualScore += 10;
        }
        
        score.innerHTML = `Score: ${totalMarks}/${actualScore}`;
    });
    if (questionIndex === (questions.length-1)) {
        console.log('ASSa', questions);
        
        let percentage = Math.round( (actualScore / totalMarks * 100) ) ;
        let remarks;
        if(percentage > 90){
            remarks = 'Very Good!'
        }
        if (percentage > 50){
              remarks = 'Good!'
        } else{
            remarks = 'Very Bad!'
        }
        quiz.innerHTML = `<h2 style="display: flex; justify-content: center; align-items: center;">Game Over</h2>
        <p>Your Score is ${actualScore}</p> 
      <p>Your percentage is ${percentage}%</p>
      <p>Remarks: ${remarks}</p>`
    } else {
        questionIndex++;
        startQuiz();
    }

    
}

function startQuiz() {
    let randomNumber = Math.round(Math.random()*3);
    console.log(randomNumber);
    
    quiz.innerHTML = `<h2>${questions[questionIndex].ques}</h2>
        <div id="answer-buttons">
            <button class='${questions[questionIndex].optionArr[0].isClicked ? 'btn-click btn' : 'btn'}'
             onclick="optionSelect(0)">${questions[questionIndex].optionArr[0].opt}</button>
            <button class='${questions[questionIndex].optionArr[1].isClicked ? 'btn-click btn' : 'btn'}'
             onclick="optionSelect(1)">${questions[questionIndex].optionArr[1].opt}</button>
            <button class='${questions[questionIndex].optionArr[2].isClicked ? 'btn-click btn' : 'btn'}'
             onclick="optionSelect(2)">${questions[questionIndex].optionArr[2].opt}</button>
            <button class='${questions[questionIndex].optionArr[3].isClicked ? 'btn-click btn' : 'btn'}'
             onclick="optionSelect(3)">${questions[questionIndex].optionArr[3].opt}</button>
        </div>
        <button onclick="nextQues()" id="next-btn">NEXT</button>`;
}

startQuiz();