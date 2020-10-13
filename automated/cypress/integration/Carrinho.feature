#language: pt

Funcionalidade: Carrinho

  Contexto: esteja no carrinho
    Dado esteja no home
    Quando inserir um item no carrinho

    Cenario: Adicionar um item 
      Então deve exibí-lo no carrinho

    Cenario: Adicionar mais de um item
      E inserir outro item
      Então deve exibí-los no carrinho

  Contexto: esteja no carrinho
    Dado que esteja no carrinho

    Cenario: Remover um item
      Quando remover um item contido no carrinho
      Então este item não deve ser exibido.

    Cenario: Remover todos os itens
      Quando remover todos os itens contido no carrinho
      Então deve ser exibida mensagem "O seu carrinho está vazio :(".

    Cenario: Alterar quantidade de um item
      Quando aumentar a quantidade de um item contido no carrinho
      Então a quantidade será acrescida em uma unidade
      E o preço será modificado.

    Cenario: Inserir CEP válido
      Quando inserir um CEP válido
      Então serão exibidas opções de frete.

    Cenario: Inserir CEP inválido
      Quando inserir um CEP inválido
      Então deve ser exibida mensagem "Ocorreu um erro ao carregar as opções de frete".

    Cenario: Inserir cupom de desconto válido
      Quando inserir um cupom válido
      Então será calculado um desconto.

    Cenario: Inserir cupom de desconto inválido
      Quando inserir um cupom inválido
      Então deve ser exibida mensagem "CUPOM INVÁLIDO, EXPIRADO OU JÁ UTILIZADO.".