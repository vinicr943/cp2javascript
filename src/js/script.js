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