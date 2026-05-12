const containerProdutos = document.getElementById("produtos-container");

const produtos = [
   {
    nome: "Batman",
    preco: 199.90,
    imagem: "/src/assets/batman.png",
    descricao: "Action Figure do Batman"
   },
    {
        nome: "Homem-Aranha",
        preco: 249.90,
        imagem: "/src/assets/homem-aranha.png",
        descricao: "Action Figure do Homem-Aranha"
    },
    {
        nome: "Homem de Ferro",
        preco: 299.90,
        imagem: "/src/assets/homem-de-ferro.png",
        descricao: "Action Figure do Homem de Ferro"
    },
    {
        nome: "Capitão América",
        preco: 189.90,
        imagem: "/src/assets/capitao-america.png",
        descricao: "Action Figure do Capitão América"
    },
    {
        nome: "Thor",
        preco: 279.90,
        imagem: "/src/assets/thor.png",
        descricao: "Action Figure do Thor"
    }
];

function mostrarProdutos() {

    if (!containerProdutos) return;

    const html = produtos.map(item => `
        <div class="card">
            <img src="${item.imagem}" alt="${item.nome}" style="width: 100%; height: 200px; object-fit: contain;">
            <h3>${item.nome}</h3>
            <p>${item.descricao}</p>
            <p>R$ ${item.preco.toFixed(2)}</p>
        </div>
    `).join("");

    containerProdutos.innerHTML = html;
}

mostrarProdutos();

const containerCarrinho = document.getElementById("carrinho-container");
const totalElemento = document.getElementById("total");

function mostrarCarrinho() {

    if (!containerCarrinho) return;

    const html = produtos.map(item => `
        <div class="card">
            <h3>${item.nome}</h3>
            <p>${item.descricao}</p>
            <p>R$ ${item.preco.toFixed(2)}</p>
        </div>
    `).join("");

    containerCarrinho.innerHTML = html;
}

function calcularTotal() {

    if (!totalElemento) return;

    const total = produtos.reduce((acc, item) => acc + item.preco, 0);

    totalElemento.innerText = `Total: R$ ${total.toFixed(2)}`;
}

function aplicarDesconto() {

    if (!totalElemento) return;

    const total = produtos.reduce((acc, item) => acc + item.preco, 0);
    const desconto = total * 0.9;

    totalElemento.innerText = `Total com desconto: R$ ${desconto.toFixed(2)}`;
}

mostrarCarrinho();

window.calcularTotal = calcularTotal;
window.aplicarDesconto = aplicarDesconto;