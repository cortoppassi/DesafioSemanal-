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
    listaHTML.appendChild(li);

    var btnExcluir = document.createElement("button")
    listaHTML.appendChild(btnExcluir)
    btnExcluir.innerHTML = "Exluir"
    btnExcluir.setAttribute("id", 'excluir')
    document.getElementById('excluir').addEventListener("click", excluir)

    const produto = listadeRegistro.map((item) => {
       return (item.produto) + (item.preco) + (item.quantidade)
    });
    li.innerHTML = (produto)
    console.log(produto)
};
 const excluir = () => {
        alert('ok')
    };

// function listar() {
    
//     var li = document.createElement('li');
//     var listaHTML = document.getElementById('listaHTML')
//     listaHTML.append(li);

//     var btnExcluir = document.createElement("button")
//     listaHTML.appendChild(btnExcluir)
//     btnExcluir.innerHTML = "Exluir"
//     btnExcluir.onclick = () => { excluir()};

//     const metodoMap = listadeRegistro.map((registro) => {
//         li.append(registro.produto)
//         if(registro.produto == registro.produto && registro.preco == registro.preco){
//             li.append(registro.preco)
//             li.append(registro.quantidade)
//         }
//     })
    
//     console.log(metodoMap)
// };

// function excluir() {
//     listadeRegistro.pop()

// };
