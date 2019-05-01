const questions = [
    'What is your name ?',
    'what is your best programming language ?',
    'Have used wordpress before ?',
    'How old are you ?',
    'It is nice talking to you !!!'
]
const answer = [];

let num = 0;
let inputBox = document.querySelector("#ans");
let output = document.querySelector("#result");
let input = document.querySelector("#input");
output.innerHTML = questions[num];

function showResponse() {
    let input = inputBox.value;
    if (input == "") {

    } else {
        if (num == 0) {
            output.innerHTML = `Hello ${input} , nice meeting you`;
            answer[num] = `${questions[num]} ' : '  ${input}`;
            inputBox.value = "";
            thinkDisplay();
            ++num;
            answer[num] = `${questions[num]} ' : '  ${input}`;
            setTimeout(changeQuestion, 2000); //get new question after 2 sec
        } else if (num == 1) {
            output.innerHTML = `${input} , is a great Language`;
            answer[num] = `${questions[num]} ' : '  ${input}`;
            inputBox.value = "";
            ++num;

            setTimeout(changeQuestion, 2000);
        } else if (num == 2) {
            output.innerHTML = `That is okay !`;
            answer[num] = `${questions[num]} ' : '  ${input}`;
            inputBox.value = "";
            ++num;
            setTimeout(changeQuestion, 2000);
        } else if (num == 3) {

            output.innerHTML = `That means you are ${2019-input} old`;
            answer[num] = `${questions[num]} ' : '  ${input}`;
            inputBox.value = "";
            ++num;
            setTimeout(changeQuestion, 2000);
        }
    }
}

function changeQuestion() {
    inputBox.setAttribute("placeholder", 'Enter response please');
    output.innerHTML = questions[num];
    if (num == 4) {
        console.log(answer);
        inputBox.style.display = "none";
        fu(answer);
    }
}

function thinkDisplay() {
    inputBox.setAttribute("placeholder", 'i am thinking....wait..');
}


function fu(answer) {
    var opened = window.open("");
    answer.forEach(ans => {
        opened.document.write(ans + '' + '<br/>');
    });

}



addEventListener('keypress', function(e) {
    if (e.which == 13) {
        showResponse();
    }
})