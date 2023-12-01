
let buttonTheme = document.querySelector("#toggleButton")
// console.log(buttonTheme)
//
// buttonTheme.addEventListener('click', changeColor)
// function toggleMenu() {
//     console.log("clickado")
//     const menuMobile = document.querySelector("#menuMobile")
//     menuMobile.style.display = (menuMobile.style.display === "flex") ? "none" : "flex";
// }

buttonTheme.addEventListener('click', changeColor)

document.addEventListener('DOMContentLoaded', ()=>{
    if(corTema=='escuro'){

    }
})

function changeColor() {
    let corTema = localStorage.getItem('tema')
    console.log(corTema)
    if(corTema==='escuro'){
        document.documentElement.style.setProperty('--cor-principal', '#ffff');
        document.documentElement.style.setProperty('--cor-secundaria', '#EBF2F2');
        document.documentElement.style.setProperty('--cor-terciaria', 'black');
        document.documentElement.style.setProperty('--cor-quartenaria', '#6CB52D');
        localStorage.setItem('tema', 'branco')
    }
    else{
        document.documentElement.style.setProperty('--cor-principal', '#1B1F23');
        document.documentElement.style.setProperty('--cor-secundaria', '#262A2D');
        document.documentElement.style.setProperty('--cor-terciaria', 'white');
        document.documentElement.style.setProperty('--cor-quartenaria', 'white');
        localStorage.setItem('tema', 'escuro')
    }
}
// document.addEventListener('click', function (event) {
//     // Verifica se o elemento clicado é um link
//     if (event.target.tagName === 'A') {
//         // Impede o comportamento padrão de navegação
//         event.preventDefault();
//
//         // Obtém o destino do link
//         const destino = event.target.getAttribute('href');
//
//         // Adiciona o parâmetro do tema à URL
//
//         const novaUrl = destino + '?tema=escuro';
//
//         // Atualiza a URL e simula o clique
//         window.history.pushState({}, '', novaUrl);
//         window.location.href = novaUrl;
//     }
// });



