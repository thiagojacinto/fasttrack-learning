/// <reference types="Cypress" />
import componentes from "./componentes";

class Home {
    /**
     * Acessa a HOME Mobile
     */
    acessarHome() {
        cy.visit("");
    }

    /**
     * Escolhe um produto da lista de produtos.
     */
    escolheProduto() {
        let random = Math.floor(Math.random() * 10);
        cy
            .log(`Selecionando produto randomico n. ${random}`)
            .get(componentes.listaProdutos)
            .eq(random)
            .click();
        }
};

export default new Home();