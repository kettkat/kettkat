function sendEmail() {
    Email.send({
    Host : "smtp.gmail.com",
    Username : "catherinekettner1@gmail.com",
    Password : "",
    To : 'catherinekettner1@gmail.com',
    From : document.getElementById('email').value,
    Subject : "New Inquiry",
    Body : "And this is the body"
  }).then(
    message => alert(message)
  );
}