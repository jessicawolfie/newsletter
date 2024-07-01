document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('emailInput');
    const emailError = document.getElementById('emailError');
    const mainContentContainer = document.getElementById('mainContentContainer');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const confirmedEmail = document.getElementById('confirmedEmail');
    const dismissButton = document.getElementById('dismissButton');

    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        if (!isValidEmail(emailInput.value)) {
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
            mainContentContainer.style.display = 'none'; // Oculta o contêiner do conteúdo principal
            confirmationMessage.style.display = 'block'; // Exibe a mensagem de confirmação
            confirmedEmail.textContent = emailInput.value;
        }
    });

    dismissButton.addEventListener('click', function() {
        confirmationMessage.style.display = 'none';
        mainContentContainer.style.display = 'block'; // Mostra novamente o contêiner do conteúdo principal
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
