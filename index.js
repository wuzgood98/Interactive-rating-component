const ratingButtons = [...document.querySelectorAll('.rating-btn')]
const submitButton = document.querySelector('.submit-btn')

let ratingData = [0]

const listenButtons = array => {
    array.forEach(button => {
        button.addEventListener('click', () => {
            const clickedOption = button.textContent
            ratingData.push(clickedOption)
            activateClickedOption(button)
        })
    })
}

const removeCard = () => {
    const card = document.querySelector('.rating-card')
    card.remove()
}

const activateClickedOption = button => {
    ratingButtons.forEach(b => b.classList.remove('active'))
    button.classList.add('active')
}

const renderCards = () => {
    removeCard()
    let lastItem = ratingData[ratingData.length - 1]
    let rating = lastItem
    if (!listenButtons) {
        lastItem = 0
    }
    const card = document.querySelector('.card-container')
    const appreciationCard = document.createElement('section')
    appreciationCard.classList.add('thank_you_state_container')
    const appreciationCardContent = `
    <div class="illustration-icon">
        <img src="./images/illustration-thank-you.svg" alt="illustration-icon">
    </div>
    <div class="description">
        <p class="description-text">
            You selected <span>
                ${rating}
            </span>
            out of 5
        </p>
    </div>
    <div class="appreciation">
        <h1 class="header">Thank you!</h1>
        <p class="info">
            We appreciate you taking the time to give a rating. If you ever need more support,
            on’t hesitate to get in touch!
        </p>
    </div>`
    appreciationCard.innerHTML = appreciationCardContent
    card.append(appreciationCard)
}

const submitButtonAction = button => {
    button.addEventListener('click', renderCards)
}

listenButtons(ratingButtons)
submitButtonAction(submitButton)