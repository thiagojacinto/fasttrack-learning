#language:pt

Funcionalidade: Inserir no carrinho

  Contexto:
    Dado esteja na home

  Cenário: Adicionar um item 
    Quando inserir um item no carrinho
    Então deve exibir 1 item no carrinho

  Cenário: Adicionar mais de um item
    Quando inserir um item no carrinho
    E inserir outro item
    Então deve exibir 2 items no carrinho