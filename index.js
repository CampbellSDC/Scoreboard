let homeCount = document.getElementById('home-points')
let guestCount = document.getElementById('guest-points')
let resetScores = document.getElementById('reset-btn')
let quarterBtn = document.getElementById('quarter-btn')
let quarter = document.getElementById('quarter')
let resetQuarters = document.getElementById('reset-qtrs')

let totalHomeScore = 0
let totalGuestScore = 0
let newQuarter = 0





document.getElementById('home-one').addEventListener('click', function() {
    
    totalHomeScore++
    homeCount.textContent = totalHomeScore
    
})

document.getElementById('home-two').addEventListener('click', function() {
    
    totalHomeScore += 2
    homeCount.textContent = totalHomeScore
    
})

document.getElementById('home-three').addEventListener('click', function() {
    
    totalHomeScore += 3
    homeCount.textContent = totalHomeScore
    
})

document.getElementById('guest-one').addEventListener('click', function() {
    
    totalGuestScore++
    guestCount.textContent = totalGuestScore
 
})

document.getElementById('guest-two').addEventListener('click', function() {
    
    totalGuestScore +=2
    guestCount.textContent = totalGuestScore
    
})

document.getElementById('guest-three').addEventListener('click', function() {
    
    totalGuestScore += 3
    guestCount.textContent = totalGuestScore
    
})


// RESET SCORES

resetScores.addEventListener('click', e => {
    totalHomeScore = 0
    totalGuestScore = 0

    homeCount.textContent = totalHomeScore
    guestCount.textContent = totalGuestScore

    
})

// CHANGE QUARTERS

quarterBtn.addEventListener('click', e => {
    
    newQuarter++
    quarter.textContent = "QTR: " + newQuarter

    if (newQuarter === 4){
        document.getElementById('quarter-btn').disabled = true
    }
})

// RESET QUARTERS

resetQuarters.addEventListener('click', e => {
    newQuarter = 0
    quarter.textContent = "QTR: "
    document.getElementById('quarter-btn').disabled = false
})