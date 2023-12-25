const botaoMenu = document.querySelector('.navegacao__botao--menu');
const menu = document.querySelector('.menu__lista');

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu__lista--ativo');
});