const homeScoreEl = document.querySelector('#home-score')
const guestScoreEl = document.querySelector('#guest-score')
const homeBtn = document.querySelector('#home')
const guestBtn = document.querySelector('#guest')

homeBtn.addEventListener('click', event => {
    const currentScore = parseInt(homeScoreEl.textContent)
    const scoreAdded = parseInt(event.target.dataset.value)
    homeScoreEl.textContent = currentScore + scoreAdded
} )

guestBtn.addEventListener('click', event => {
    const currentScore = parseInt(guestScoreEl.textContent)
    const scoreAdded = parseInt(event.target.dataset.value)
    guestScoreEl.textContent = currentScore + scoreAdded
} )
