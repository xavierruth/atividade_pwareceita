function login() {
    var username = document.getElementById("username").value;
    var senha = document.getElementById("senha").value;

    if (username && senha) {
        // Armazenar o username no localStorage
        localStorage.setItem('username', username);
        // Redirecionar para a página home.html
        window.location.href = "home.html";
    } else {
        alert("Por favor, preencha seu usuário e senha.");
    }
}



// Adicione isso ao final do arquivo forms.js
window.onload = function() {
    var username = localStorage.getItem('username');
    if (username) {
        var welcomeMessageElement = document.getElementById("welcome-message");
        welcomeMessageElement.innerText = "Olá, " + username;
    }
};

