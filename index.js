let pointEl1 = document.getElementById("point-El1")
let pointEl2 = document.getElementById("point-El2")
let countEl = document.getElementById("counter")
let homeScore = 0
let guestScore = 0

let count = 24

const timer = setInterval(function() {
    countEl.textContent = count
    count--
    if(count === 0) {
        count = 24
        timer
    }
}, 1000)



function addHome1() {
    homeScore +=1
    pointEl1.textContent = homeScore;
}

function addHome2() {
    homeScore += 2
    pointEl1.textContent = homeScore;
}

function addHome3() {
    homeScore += 3
    pointEl1.textContent = homeScore;
}

function addGuest1 () {
    guestScore += 1
    pointEl2.textContent = guestScore
}

function addGuest1 () {
    guestScore += 1
    pointEl2.textContent = guestScore
}

function addGuest2 () {
    guestScore += 2
    pointEl2.textContent = guestScore
}

function addGuest3 () {
    guestScore += 3
    pointEl2.textContent = guestScore
}

function reset () {
    homeScore = 0
    guestScore = 0
    pointEl1.textContent = 0
    pointEl2.textContent = 0
}
