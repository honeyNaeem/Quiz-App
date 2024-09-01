
var questionNo = document.querySelector('.questionNo');

var questions = [];
var ActualQuestionNo = 1;

function nextQues() {
    var question = document.getElementById('question');
    var opt1 = document.getElementById('opt1');
    var opt2 = document.getElementById('opt2');
    var opt3 = document.getElementById('opt3');
    var opt4 = document.getElementById('opt4');

    var obj = {
        ques: question.value,
        optionArr: [
            { opt: opt1.value, result: false, isClicked: false },
            { opt: opt2.value, result: true, isClicked: false },
            { opt: opt3.value, result: false, isClicked: false },
            { opt: opt4.value, result: false, isClicked: false },
        ]
    }

    questions.push(obj);
    console.log('obj', questions);
    ActualQuestionNo++
    questionNo.innerHTML = `Question: ${ActualQuestionNo}`;

    localStorage.setItem('questions', JSON.stringify(questions));
    question.value = '';
    opt1.value = '';
    opt2.value = '';
    opt3.value = '';
    opt4.value = '';


}
function end() {
    var next = document.querySelector('#next-btn');
    var app = document.querySelector('.app');
    app.innerHTML = `<h3 style="display: flex; justify-content: center; align-items: center;">Your questions are submitted.</h3> <a href="./../index.html"> <button id="next-btn">BACK</button></a>`

}
