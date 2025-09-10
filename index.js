const Cliente = require("./class/Cliente");
const Administrador = require("./class/Administrador");
const Produto = require("./class/Produto");
const Pedido = require("./class/Pedido");
const Usuario = require("./class/Usuario");

// Acesso genérico ao sistema
console.log(new Usuario("Teste", 99).acessoPainel());
console.log("=================================");

// Administrador adicionando produtos
const admin = new Administrador("João", 30);
const produto1 = new Produto("Camisa", 50, 10);
const produto2 = new Produto("Tênis", 200, 5);

admin.adicionarProduto(produto1);
admin.adicionarProduto(produto2);

console.log(admin.acessoPainel());
console.log("Produtos cadastrados pelo admin:", admin.produtos);
console.log("=================================");

// Cliente adicionando produtos ao carrinho
const cliente = new Cliente("Maria", 20);
cliente.adicionarProduto(produto1);
cliente.adicionarProduto(produto2);

console.log(cliente.acessoPainel());
console.log("Carrinho da cliente:", cliente.carrinho);

// Cliente finalizando pedido
const pedido = new Pedido(cliente, cliente.carrinho);
console.log("Valor total do pedido:", pedido.calcularTotal());




