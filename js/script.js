var listadeRegistro = []
function adicionarRegistro() {
    var nome = document.getElementById('nome').value;
    var preco = document.getElementById('preco').value;
    var quantidade = document.getElementById('quantidade').value;
    
    var registro = {
        produto: nome,
        preco: preco,
        quantidade: quantidade
    };
    listadeRegistro.push(registro)
    listar();
};
function listar() {
    
    var li = document.createElement('li');
    var listaHTML = document.getElementById('listaHTML')
    listaHTML.append(li);

    var btnExcluir = document.createElement("button")
    listaHTML.appendChild(btnExcluir)
    btnExcluir.innerHTML = "Exluir"
    btnExcluir.onclick = () => { excluir()};

    const metodoMap = listadeRegistro.map((registro) => {
        li.append(registro.produto)
    })

    console.log(metodoMap)
};

function excluir() {
    listadeRegistro.pop()

};