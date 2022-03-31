let nameUser = document.getElementById("name-txt")
let emailUser = document.getElementById("email-txt")
let msgForm = document.getElementById("message-txt")

document.getElementById("submit-btn").addEventListener("click", function(e) {
    e.preventDefault()
    Email.send({
        Host : "smtp.gmail.com",
        Username : "jplawrenca543@gmail.com",
        Password : "cllgqtcxmqwjocdg",
        To : 'jplawrenca543@gmail.com',
        From : `${emailUser.value}`,
        Subject : `Contact Form Submission: ${nameUser.value}`,
        Body : `${msgForm.value} <br>Emailed from: ${emailUser.value}`
    }).then(
        document.getElementById("submit-btn").style.background = "#0CCE6B",
        document.getElementById("submit-btn").style.color = "#000"
    );
    resetForm()
})
function resetForm() {
    nameUser.value = ""
    emailUser.value = ""
    msgForm.value = ""

    nameUser.textContent = ""
    emailUser.textContent = ""
    msgForm.textContent = ""
}
