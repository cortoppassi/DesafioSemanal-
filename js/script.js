var listadeRegistro = []

const registrar =()=> {
var nome = document.getElementById('nome').value;
var preco = document.getElementById('preco').value;
var quantidade = document.getElementById('quantidade').value;

    var dados = {
        nomedoProduto: nome,
        preco: preco,
        quantidade: quantidade
    };
    listadeRegistro.push(dados);

   var elementoLi = document.createElement('li');
   lista.appendChild(elementoLi);
   
   
  
    var btnExcluir = document.createElement("button")
    lista.appendChild(btnExcluir)
    btnExcluir.innerHTML = "Exluir"
    btnExcluir.onclick = () => {
        excluir()
    }

    var btnEditar = document.createElement("button")
    lista.appendChild(btnEditar)
    btnEditar.innerHTML = "Editar"
    btnEditar.onclick = () => {
        editar()
    }

   
};
function excluir() {
    alert('ok')
}
function editar() {
    alert('ok')
}
function listar() {
    elementoLi.push(listadeRegistro)
}