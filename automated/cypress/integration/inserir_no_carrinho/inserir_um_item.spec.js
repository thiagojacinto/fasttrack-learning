/* global Given, When, And, Then */
/// <reference types="Cypress" />

import HomePage from "../../support/pageObjects/Home/Home.page";
import ProductView from "../../support/pageObjects/ProductView/ProductView.page";

Given(`esteja na home`, () => {
    HomePage.acessarHome();
});

When(`inserir um item no carrinho`, () => {
    HomePage.escolheProduto();
    ProductView.adicionarAoCarrinho();
});

Then(`deve exibí-lo no carrinho`, () => {
    return false;
});

And(`inserir outro item`, () => {
    return false;
});

Then(`deve exibí-los no carrinho`, () => {
    return false;
});