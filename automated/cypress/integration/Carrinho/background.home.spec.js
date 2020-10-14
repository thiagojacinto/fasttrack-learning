import { Given, Then, When, Before } from "cypress-cucumber-preprocessor/steps";


Given(`esteja no home`, () => {
    cy.visit("");
});

When(`inserir um item no carrinho`, () => {
    cy.get("div#menu_left div")
        .get("div#texto_categoria")
        .first()
        .click();
});