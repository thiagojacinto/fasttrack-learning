#language: en

Feature: Carrinho

  Scenario: Adicionar um item 
    Given esteja no home
    When inserir um item no carrinho
    Then deve exibí-lo no carrinho

  Scenario: Adicionar mais de um item
    Given esteja no home
    When inserir um item no carrinho
    And inserir outro item
    Then deve exibí-los no carrinho

  Scenario: Remover um item
    Given que esteja no carrinho
    When remover um item contido no carrinho
    Then este item não deve ser exibido.

  Scenario: Remover todos os itens
    Given que esteja no carrinho
    When remover todos os itens contido no carrinho
    Then deve ser exibida mensagem "O seu carrinho está vazio :(".

  Scenario: Alterar quantidade de um item
    Given que esteja no carrinho
    When aumentar a quantidade de um item contido no carrinho
    Then a quantidade será acrescida em uma unidade
    And o preço será modificado.

  Scenario: Inserir CEP válido
    Given que esteja no carrinho
    When inserir um CEP válido
    Then serão exibidas opções de frete.

  Scenario: Inserir CEP inválido
    Given que esteja no carrinho
    When inserir um CEP inválido
    Then deve ser exibida mensagem "Ocorreu um erro ao carregar as opções de frete".

  Scenario: Inserir cupom de desconto válido
    Given que esteja no carrinho
    When inserir um cupom válido
    Then será calculado um desconto.

  Scenario: Inserir cupom de desconto inválido
    Given que esteja no carrinho
    When inserir um cupom inválido
    Then deve ser exibida mensagem "CUPOM INVÁLIDO, EXPIRADO OU JÁ UTILIZADO.".