var teacher = "Kyle";

function otherClass() {
    teacher = "Suzy";
    topic = "React";
    console.log('Welcome');
    console.log(teacher);
    document.querySelector('.local-scope').innerText = teacher;
    
}

function ask() {
    var question = "Why?";
    document.querySelector('.question').innerText = question;
}

console.log(teacher);
document.querySelector('.global-scope').innerText = teacher;
// document.querySelector('.topic').innerText = topic;
otherClass();
document.querySelector('.topic').innerText = topic;
// document.querySelector('.global-scope').innerText = teacher;
// console.log(teacher);
ask();