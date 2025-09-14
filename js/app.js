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
    if(lista.length <= 1 || verificador == 0){
        return false;
    }
    let sorteado = desarranjar(lista);

    lista.forEach(function(pessoa, i) {
        res.set(pessoa, sorteado[i]); 
    });
    
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

function desarranjar(lista) {
    let n = lista.length;
    let resultado = [...lista];

    for (let i = 0; i < n - 1; i++) {
        let j = i + 1 + Math.floor(Math.random() * (n - i - 1));
        [resultado[i], resultado[j]] = [resultado[j], resultado[i]];
    }

    if (resultado[n - 1] === lista[n - 1]) {
        [resultado[n - 1], resultado[n - 2]] = [resultado[n - 2], resultado[n - 1]];
    }

    return resultado;
}

input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // evita que a página recarregue
    adicionar();            
  }
});