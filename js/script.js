const url = "./membership.html";
const btn = document.querySelector('#btn1'); 

function openInNewTab(url){
    const janela = window.open(url, '_blank');
    janela.focus();
}

btn.addEventListener('click', ( )=> {
    openInNewTab(url)
});

//

const url2 = "./camisa.html";
const btn2 = document.querySelector('#btn2'); 

function openInNewTab(url2){
    const janela2 = window.open(url2, '_blank');
    janela2.focus();
}

btn2.addEventListener('click', ( )=> {
    openInNewTab(url2)
});

//

const url3 = "./sprun.html";
const btn3 = document.querySelector('#btn3'); 

function openInNewTab(url){
    const janela = window.open(url, '_blank');
    janela.focus();
}

btn3.addEventListener('click', () => {
    openInNewTab(url3);
});