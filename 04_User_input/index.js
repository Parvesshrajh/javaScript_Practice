// 1. Easy way - window prompt

let username = window.prompt(`What is your username?`);
console.log(username);

// 2. Professional way - HTML Textbox

let username2;
document.getElementById("mySubmit").onclick = function(){
    username2 = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username2}`;
}