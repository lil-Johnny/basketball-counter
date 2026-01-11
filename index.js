let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");
let count = 0;
let count1 = 0;

function plusOne() {
    count += 1;
    homeEl.textContent = count;
}
function plusTwo() {
    count += 2;
    homeEl.textContent = count;
}
function plusThree() {
    count += 3;
    homeEl.textContent = count;
}

function plusOne1() {
    count1 += 1;
    guestEl.textContent = count1;
}
function plusTwo2() {
    count1 += 2;
    guestEl.textContent = count1;
}
function plusThree3() {
    count1 += 3;
    guestEl.textContent = count1;
}

function startOver() {
    count = 0;
    count1 = 0;
    homeEl.textContent = count;
    guestEl.textContent = count1;
}