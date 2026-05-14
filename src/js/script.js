const containerProdutos = document.getElementById("produtos-container");
const containerCarrinho = document.getElementById("carrinho-container");
const totalElemento = document.getElementById("total");

const produtos = [
   {
    id: 1,
    nome: "Batman",
    preco: 199.99,
    imagem: "./src/assets/batman.png",
    descricao: "Action Figure do Batman"
   },
    {
        id: 2,
        nome: "Homem-Aranha",
        preco: 249.99,
        imagem: "./src/assets/homem-aranha.png",
        descricao: "Action Figure do Homem-Aranha"
    },
    {
        id: 3,
        nome: "Homem de Ferro",
        preco: 299.99,
        imagem: "./src/assets/homem-de-ferro.png",
        descricao: "Action Figure do Homem de Ferro"
    },
    {
        id: 4,
        nome: "Capitão América",
        preco: 189.99,
        imagem: "./src/assets/capitao-america.png",
        descricao: "Action Figure do Capitão América"
    },
    {
        id: 5,
        nome: "Thor",
        preco: 279.99,
        imagem: "./src/assets/thor.png",
        descricao: "Action Figure do Thor"
    }
];

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function salvarCarrinho() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function adicionarCarrinho(id) {
    const produto = produtos.find(item => item.id === id);

    carrinho.push(produto);

    salvarCarrinho();

    alert(`${produto.nome} adicionado ao carrinho!`);
}

function removerCarrinho(index) {
    carrinho.splice(index, 1);

    salvarCarrinho();

    mostrarCarrinho();
    calcularTotalAutomatico();
}

function mostrarProdutos() {

    if (!containerProdutos) return;

    const html = produtos.map(item => `
        <div class="card">
            <img src="${item.imagem}" alt="${item.nome}">
            <h3>${item.nome}</h3>
            <p>${item.descricao}</p>
            <p>R$ ${item.preco.toFixed(2)}</p>

            <button onclick="adicionarCarrinho(${item.id})">
                Adicionar ao carrinho
            </button>
        </div>
    `).join("");

    containerProdutos.innerHTML = html;
}

function mostrarCarrinho() {

    if (!containerCarrinho) return;

    if (carrinho.length === 0) {
        containerCarrinho.innerHTML = "<p>Seu carrinho está vazio.</p>";
        return;
    }

    const html = carrinho.map((item, index) => `
        <div class="card carrinho-card">
            <img src="${item.imagem}" alt="${item.nome}">
            
            <div>
                <h3>${item.nome}</h3>
                <p>${item.descricao}</p>
                <p>R$ ${item.preco.toFixed(2)}</p>

                <button onclick="removerCarrinho(${index})">
                    Remover
                </button>
            </div>
        </div>
    `).join("");

    containerCarrinho.innerHTML = html;
}

function calcularTotalAutomatico() {

    if (!totalElemento) return;

    const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

    totalElemento.innerText = `Total: R$ ${total.toFixed(2)}`;
}

function aplicarDesconto() {

    if (!totalElemento) return;

    const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

    const desconto = total * 0.9;

    totalElemento.innerText = `Total com desconto: R$ ${desconto.toFixed(2)}`;
}

mostrarProdutos();
mostrarCarrinho();
calcularTotalAutomatico();

window.aplicarDesconto = aplicarDesconto;
window.adicionarCarrinho = adicionarCarrinho;
window.removerCarrinho = removerCarrinho;