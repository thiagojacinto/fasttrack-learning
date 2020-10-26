/// <reference types="Cypress" />
import componentes from "./componentes";

class ProductView {
    /**
     * Clica no botão "Adicionar ao Carrinho"
     */
    adicionarAoCarrinho(){
        cy  
            .get(componentes.opcoes)
            .eq(0)
            .click()
            .get(componentes.botaoAdicionar)
            .click();
    }

    voltarAHome() {
        cy
            .get(componentes.botaoVoltar)
            .click();
    }
}

export default new ProductView();