const homeScoreEl = document.querySelector('#home-score')
const guestScoreEl = document.querySelector('#guest-score')
const homeBtn = document.querySelector('#home')
const guestBtn = document.querySelector('#guest')
const resetBtn = document.querySelector('#reset')

homeBtn.addEventListener('click', event => {
    const homeScore = parseInt(homeScoreEl.textContent)
    const guestScore = parseInt(guestScoreEl.textContent)
   
    const scoreAdded = parseInt(event.target.dataset.value)
    homeScoreEl.textContent = homeScore + scoreAdded
    highLightScore(homeScoreEl.textContent, guestScoreEl.textContent)
} )

guestBtn.addEventListener('click', event => {
    const homeScore = parseInt(homeScoreEl.textContent)
    const guestScore = parseInt(guestScoreEl.textContent)

 
    const scoreAdded = parseInt(event.target.dataset.value)
    guestScoreEl.textContent = guestScore + scoreAdded
    highLightScore(homeScoreEl.textContent, guestScoreEl.textContent)
} )

resetBtn.addEventListener('click', event => {
    guestScoreEl.textContent = 0
    homeScoreEl.textContent = 0
    homeScoreEl.style.backgroundColor = "#080001";
    guestScoreEl.style.backgroundColor = "#080001";
    
})


const highLightScore = (score1, score2) => {
    if(score1 !== score2) {
        const [highScoreEl, lowScoreEl] = score1 > score2 
        ? [homeScoreEl, guestScoreEl] 
        : [guestScoreEl, homeScoreEl];
    
        highScoreEl.style.backgroundColor = "#047857";
        lowScoreEl.style.backgroundColor = "#080001";
    } else {
        homeScoreEl.style.backgroundColor = "#080001";
        guestScoreEl.style.backgroundColor = "#080001";
    }
   
  };

  //the below is the same function as the above, but more verbose 
// const highLightScore = (score1, score2) => {
//     if (score1 > score2) {
//         homeScoreEl.style.backgroundColor = "#047857";
//         guestScoreEl.style.backgroundColor = "#080001";
       
//       } else if (score2 > score1) {
//         guestScoreEl.style.backgroundColor = "#047857"
//         homeScoreEl.style.backgroundColor = "#080001";
//       } else {
//         homeScoreEl.style.backgroundColor = "#080001";
//         guestScoreEl.style.backgroundColor = "#080001";
//       }
    
//     }