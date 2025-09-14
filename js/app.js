let lista = [];
let input = document.getElementById("nome-amigo");
let verificador = 1;

function adicionar(){
    let nome = input.value;
    if(!lista.includes(nome) && nome != ''){
        lista.push(nome);
        atualiza();
    }else if(lista.includes(nome)){
        alert("Nome repetido!");
    }
    input.value = '';
}

function sortear(){
    let seta = "→";
    let texto = document.getElementById("lista-sorteio");
    let res = new Map();

    if(lista.length <= 1 || verificador == 0)
        return false;

    embaralha(lista);

    for(let i = 0; i < lista.length - 1; i++)
        res.set(lista[i], lista[i+1]);

    res.set(lista[lista.length-1], lista[0]);
    
    for(let [key, chave] of res)
        texto.innerHTML += `${key} ${seta} ${chave} <br>`;
    
    verificador = 0;
}

function reiniciar(){
    let texto = document.getElementById("lista-sorteio");
    texto.innerHTML = '';
    input.value = '';
    lista = [];
    verificador = 1;
    atualiza();
    input.focus();
}

function atualiza(){
    let paragrafo = document.getElementById("lista-amigos");
    let texto = lista.join(', ');
    paragrafo.textContent = texto;
}

function embaralha(lista) {

    let indice = lista.length
    
    while(indice) {
        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [lista[indice], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice]];
    }
}

input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // evita que a página recarregue
    adicionar();            
  }
});