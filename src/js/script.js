const container = document.getElementById("produtos-container");

const produtos = [
    {
        nome: "Batman",
        preco: 199.90,
        imagem: "./src/assets/img/batman.jpg",
        descricao: "Action Figure do Batman"
    },
    {
        nome: "Homem-Aranha",
        preco: 249.90,
        imagem: "./src/assets/img/homem-aranha.jpg",
        descricao: "Action Figure do Homem-Aranha"
    },
    {
        nome: "Homem de Ferro",
        preco: 299.90,
        imagem: "./src/assets/img/homem-ferro.jpg",
        descricao: "Action Figure do Homem de Ferro"
    },
    {
        nome: "Capitão América",
        preco: 189.90,
        imagem: "./src/assets/img/capitao-america.jpg",
        descricao: "Action Figure do Capitão América"
    },
    {
        nome: "Thor",
        preco: 279.90,
        imagem: "./src/assets/img/thor.jpg",
        descricao: "Action Figure do Thor"
    }
];

function mostrarProdutos() {

    const html = produtos.map(item => `
        <div class="card">
            <img src="${item.imagem}" alt="${item.nome}">
            <h3>${item.nome}</h3>
            <p>${item.descricao}</p>
            <p>R$ ${item.preco}</p>
        </div>
    `).join("");

    container.innerHTML = html;
}

mostrarProdutos();

const container = document.getElementById("carrinho-container");
const totalElemento = document.getElementById("total");

const carrinho = [
    { nome: "Batman", preco: 199.90, imagem: "../src/assets/img/batman.jpg" },
    { nome: "Homem-Aranha", preco: 249.90, imagem: "../src/assets/img/homem-aranha.jpg" },
    { nome: "Homem de Ferro", preco: 299.90, imagem: "../src/assets/img/homem-ferro.jpg" }
];

function mostrarCarrinho() {

    const html = carrinho.map(item => `
        <div class="card">
            <img src="${item.imagem}">
            <h3>${item.nome}</h3>
            <p>R$ ${item.preco}</p>
        </div>
    `).join("");

    container.innerHTML = html;
}

function calcularTotal() {

    const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

    totalElemento.innerText = `Total: R$ ${total.toFixed(2)}`;
}

function aplicarDesconto() {

    const total = carrinho.reduce((acc, item) => acc + item.preco, 0) * 0.9;

    totalElemento.innerText = `Total com desconto: R$ ${total.toFixed(2)}`;
}

mostrarCarrinho();