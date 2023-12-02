
let buttonTheme = document.querySelector("#toggleButton")
// console.log(buttonTheme)
//
// buttonTheme.addEventListener('click', changeColor)
// function toggleMenu() {
//     console.log("clickado")
//     const menuMobile = document.querySelector("#menuMobile")
//     menuMobile.style.display = (menuMobile.style.display === "flex") ? "none" : "flex";
// }

window.watsonAssistantChatOptions = {
    integrationID: "d58663cb-a23d-46d9-8515-3fa7cdc063a2", // The ID of this integration.
    region: "us-east", // The region your integration is hosted in.
    serviceInstanceID: "a4b6d0c8-aa69-465c-bd4b-0e9a05057fc1", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });



buttonTheme.addEventListener('click', changeColor)

document.addEventListener('DOMContentLoaded', ()=>{
    let corTema = localStorage.getItem('tema')
    if(corTema=='branco'){
        document.documentElement.style.setProperty('--cor-principal', '#ffff');
        document.documentElement.style.setProperty('--cor-secundaria', '#EBF2F2');
        document.documentElement.style.setProperty('--cor-terciaria', 'black');
        document.documentElement.style.setProperty('--cor-quartenaria', '#6CB52D');
    }
    else{
        document.documentElement.style.setProperty('--cor-principal', '#1B1F23');
        document.documentElement.style.setProperty('--cor-secundaria', '#262A2D');
        document.documentElement.style.setProperty('--cor-terciaria', 'white');
        document.documentElement.style.setProperty('--cor-quartenaria', 'white');
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



