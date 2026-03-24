const decrease = document.getElementById("dec");
const increase = document.getElementById("in");
const reset = document.getElementById("re");
const countLabel = document.getElementById("countLabel");
let count = 0;
decrease.onclick = function(){
    count--;
    countLabel.textContent = count;
}
increase.onclick = function(){
    count++;
    countLabel.textContent = count;
}
reset.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}