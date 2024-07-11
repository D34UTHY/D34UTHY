const showProjectsButton = document.querySelector('.btn-show-projects');
const inactiveProjects = document.querySelectorAll('.project:not(.active)');

showProjectsButton.addEventListener('click', () => {
    // Adiciona a classe active nos projetos escondidos para que apareçam na tela
    inactiveProjects.forEach(inactiveProject => {
        inactiveProject.classList.add('active');
    });
    // Esconde o botão de mostrar mais
    showProjectsButton.classList.add('remove')
});