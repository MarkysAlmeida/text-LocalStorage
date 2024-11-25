let text = document.getElementById("text"); // Pega dados do textarea
let itens = document.getElementById("itens"); // Pega o espaço da div
let submit = document.getElementById("submit"); // Pega o botão de envio

submit.addEventListener("click", enviaDados);

function enviaDados() {
    let newEntry = text.value; // Texto digitado
    if (!newEntry.trim()) return; // Evitar salvar entradas vazias

    // Recuperar os array salvo no localStorage ou criar um novo
    let diaryEntries = JSON.parse(localStorage.getItem("diaryEntries")) || [];

    //.push =  Adicionar a nova entrada
    diaryEntries.push(newEntry);

    // Atualizar o localStorage
    /*.stringify = Converter os objetos em string
     *.setItem = Pega os dados da variavel diaryEntries */
    localStorage.setItem("diaryEntries", JSON.stringify(diaryEntries));

    // Atualizar a exibição na tela
renderEntries(diaryEntries);

    // Limpar o campo de texto
    text.value = "";
}

// Função para renderizar as entradas na tela
function renderEntries(entries) {
    itens.innerHTML = entries.map(entry => `<p>${entry}</p> <hr>`).join("");
}

// Carregar e exibir as entradas salvas ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
    let savedEntries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
    renderEntries(savedEntries);
});
