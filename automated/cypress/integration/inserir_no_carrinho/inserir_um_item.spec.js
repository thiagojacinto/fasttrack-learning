/* global Given, When, And, Then */
/// <reference types="Cypress" />

import HomePage from "../../support/pageObjects/Home/Home.page";
import ShoppingCart from "../../support/pageObjects/ShoppingCart/ShoppingCart.page";
import ProductView from "../../support/pageObjects/ProductView/ProductView.page";

Given(`esteja na home`, () => {
    HomePage.acessarHome();
});

When(`inserir um item no carrinho`, () => {
    HomePage.escolheProduto();
    ProductView.adicionarAoCarrinho();
});

Then(`deve exibir {int} item(s) no carrinho`, (numeroDeItens) => {
    ShoppingCart.acessarCarrinho();
    ShoppingCart.exibirNoCarrinho(numeroDeItens);
});

And(`inserir outro item`, () => {
    ProductView.voltarAHome();
    HomePage.escolheProduto();
    ProductView.adicionarAoCarrinho();
});