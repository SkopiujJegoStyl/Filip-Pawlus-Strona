const name = document.getElementById('książka')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (książka.value === '' || książka.value == null) {
        massages.push('wprowadź książkę')
    }
    
    if (massages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})