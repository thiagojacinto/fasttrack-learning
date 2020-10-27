#language:pt

Funcionalidade: Alterar do carrinho

  Contexto:
    Dado que hajam itens no carrinho
    E que esteja no carrinho
  
  Cenário: Remover um item
    Quando remover um item contido no carrinho
    Então este item não deve ser exibido.
 
  Cenário: Remover todos os itens
    Quando remover todos os itens contido no carrinho
    Então deve ser exibida mensagem "O seu carrinho está vazio :("

  Cenário: Alterar quantidade de um item
    Quando aumentar a quantidade de um item contido no carrinho
    Então a quantidade será acrescida em uma unidade
    E o preço será modificado.