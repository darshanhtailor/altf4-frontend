function checkQuiz() {
    var ansOp = document.getElementById('quiz-content').getElementsByTagName('li');
    var correct = 0;
    for(let i = 0; i < 15; i++){
        if(ansOp[i].className){
            if(!ansOp[i].id){
                ansOp[i].classList.add("wrong-option");
            }
            else correct++;
        }
        if(ansOp[i].id){
            ansOp[i].classList.add("correct-option");
        }
    }
}

var currTopic;  //For comment section
var prev = null;
var prevName = null;
function selectedCategory() {
    if (prev != null) {
        prev.classList.toggle('selected-category');
    }
    prev = this;
    var name = this.className;
    this.classList.toggle('selected-category');
    if (prevName != null) {
        document.getElementById(`${prevName}-content`).classList.toggle('display-none');

        if(prevName == "video")   // For comment section
            document.getElementById("comment-section").classList.toggle('display-none');

    }
    document.getElementById(`${name}-content`).classList.toggle('display-none');

    if(name == "video"){ //For comment section
        document.getElementById("comment-section").classList.toggle('display-none');
        document.getElementById("video-name").innerHTML = currTopic;   
    }

    prevName = name;
}

const topics = document.getElementsByClassName("topicname");
const video = document.getElementsByClassName("video")
const notes = document.getElementsByClassName("notes")
const quiz = document.getElementsByClassName("quiz")

var flags = [];
for (let i = 0; i < topics.length; i++) {
    flags[i] = false;
}
for (let i = 0; i < topics.length; i++) {
    topics[i].addEventListener('click', function () {
        document.getElementById("placeHolder").style.display = "none";
        const top = document.getElementsByClassName("topicname")[i];
        currTopic = top.innerHTML;
        if (flags[i]) {
            const ele = document.getElementsByClassName("options")[i];
            ele.classList.remove("enable-options");
            ele.classList.add("disable-options");
            top.querySelector('i').innerText = "expand_more";
            flags[i] = false;
        }
        else {
            const ele = document.getElementsByClassName("options")[i];
            ele.classList.remove("disable-options");
            ele.classList.add("enable-options");
            top.querySelector('i').innerText = "expand_less";
            flags[i] = true;
        }
        top.classList.toggle("selected-topic");
    })
    video[i].addEventListener('click', selectedCategory)
    notes[i].addEventListener('click', selectedCategory)
    quiz[i].addEventListener('click', selectedCategory)
}

// Quiz
var arrflag = []
var num = document.getElementById('quiz-content').getElementsByTagName('li');
for (let i = 0; i < num.length; i++) {
    arrflag[i] = false;
    num[i].addEventListener('click', function () {
        if (!arrflag[i]) {
            arrflag[i] = true;
            num[i].classList.toggle('option-selected');
            var j, k;
            if (i % 3 == 0) {
                j = i + 1, k = i + 2
            }
            else if (i % 3 == 1) {
                j = i - 1, k = i + 1;
            }
            else {
                j = i - 2, k = i - 1;
            }
            if (arrflag[j]) {
                arrflag[j] = false;
                num[j].classList.toggle('option-selected');
            }
            if (arrflag[k]) {
                arrflag[k] = false;
                num[k].classList.toggle('option-selected');
            }
        }
    })
}


// Comment-section
var comNum = document.getElementById("commentsArea").getElementsByTagName("span").length;
document.getElementById("commentsNumber").innerText = `Comments (${comNum})`;

function makeComment(msg) {
    if (msg) {
        var span = document.createElement("span");
        var spanIn1 = document.createElement("span");
        var spanIn2 = document.createElement("span");
        spanIn1.style.display = "block";
        spanIn2.style.display = "block";
        var currDateTime = new Date().toLocaleString();
        spanIn1.innerText = "username . " + currDateTime;
        spanIn2.innerText = msg;
        spanIn1.classList.add("time-details");
        span.appendChild(spanIn1);
        span.appendChild(spanIn2);
        span.classList.add('textBlock');
        var cmarea = document.getElementById("commentsArea");
        cmarea.appendChild(span);
        cmarea.scrollTop = cmarea.scrollHeight;
    }
    var comNum = document.getElementById("commentsArea").getElementsByTagName("span").length;
    document.getElementById("commentsNumber").innerText = `Comments (${comNum/3})`;
}

function sendComment() {
    var msg = document.getElementById('chatinput').value;
    document.getElementById('chatinput').value = "";
    makeComment(msg);
}

document.getElementById('comment-send-icon').addEventListener('click', sendComment);
document.getElementById('chatinput').addEventListener('keypress', function (e) {
    if (e.key == 'Enter')
        document.getElementById('comment-send-icon').click();
});

var navigFlag = false;
document.getElementById('video-name').addEventListener('click', function(){
    if(!navigFlag){
        document.getElementById("navigator").scrollIntoView({behavior: 'smooth'})
        navigFlag = true;
    }
    else{
        document.getElementById("video-content").scrollIntoView({ behavior: 'smooth'});
        navigFlag = false;
    }
})

