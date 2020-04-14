const getOne = (selector) => {
    return document.querySelector(selector)
}


const email = getOne("footer a")
email.addEventListener("click", (event) => {
    event.preventDefault()
    alert("contact form")
})
console.log(email)
