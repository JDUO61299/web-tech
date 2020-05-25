const name = document.getElementById("name")
const email = document.getElementById("email")
const number = document.getElementById("number")
const date_of_form = document.getElementById("date_of_form")
const message = document.getElementById("message")
const form = document.getElementById("form")
const errorElement = document.getElementById("error")


form.addEventListener("submit", (e) => {
    let messages = []
    if (name.value == "" || name.value == null) {
    messages.push("Name is required")
    }

    if (email.value.length <= 4) {
        messages.push("Email must be valid")
    }

    if (number.value.length <= 5) {
        messages.push("Number must be valid")
    }

    if (message.value.length > 400) {
        messages.push("Enter a shorter message")
    }
    
    if (messages.length > 0) { 
    e.preventDefault()
    errorElement.innerText = messages.join(", ")
    }

 
    

      
    
})
