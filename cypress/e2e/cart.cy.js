/// <reference types="cypress" />

describe('Carrinho de Compras - automationpractice', () => {

  const baseUrl = 'https://automationpratice.com.br'

  beforeEach(() => {
    cy.visit(baseUrl + '/shop')
    cy.wait(1000)
  })

  it('Adiciona um produto ao carrinho e valida presença no carrinho', () => {
    // abre a página do primeiro produto e clica em ADD TO CART
    cy.get('a[href*="product-details-one"]').first().click({ force: true })
    cy.contains(/add to cart/i, { timeout: 5000 }).click({ force: true })

    // navegar diretamente para a página de carrinho
    cy.visit(baseUrl + '/cart')

    // valida que estamos na página de carrinho
    cy.url({ timeout: 8000 }).should('include', '/cart')

    // valida que existe pelo menos uma linha de produto
    cy.get('table').find('tr').its('length').should('be.gte', 1)
  })

  it('Atualiza quantidade no carrinho e valida novo valor', () => {
    // adiciona primeiro produto
    cy.get('a[href*="product-details-one"]').first().click({ force: true })
    cy.contains(/add to cart/i, { timeout: 5000 }).click({ force: true })
    cy.visit(baseUrl + '/cart')

    // tenta localizar input de quantidade no carrinho
    cy.get('table').find('input[type="number"]').first().clear().type('2').blur()

    // valida que a quantidade foi atualizada
    cy.get('table').find('input[type="number"]').first().should('have.value', '2')
  })

  it('Remove produto do carrinho e valida que está vazio', () => {
    // adiciona e abre carrinho
    cy.get('a[href*="product-details-one"]').first().click({ force: true })
    cy.contains(/add to cart/i, { timeout: 5000 }).click({ force: true })
    cy.visit(baseUrl + '/cart')

    // tenta clicar em remover/excluir (procura por CLEAR CART ou botão de remover)
    cy.contains(/clear cart|remove|remover|excluir|apagar/i).first().click({ force: true })

    // valida que o carrinho ficou vazio — página /empty-cart ou mensagem
    cy.contains(/your cart is empty|seu carrinho está vazio|empty cart/i, { timeout: 5000 }).should('exist')
  })

  it('Adiciona dois produtos diferentes e valida itens no carrinho', () => {
    // adiciona dois produtos distintos
    // abre dois produtos distintos e adiciona
    cy.get('a[href*="product-details-one"]').eq(0).click({ force: true })
    cy.contains(/add to cart/i, { timeout: 5000 }).click({ force: true })
    cy.visit(baseUrl + '/shop')
    cy.get('a[href*="product-details-one"]').eq(1).click({ force: true })
    cy.contains(/add to cart/i, { timeout: 5000 }).click({ force: true })
    // abrir carrinho
    cy.visit(baseUrl + '/cart')

    // valida que existem pelo menos 2 linhas/itens
    cy.get('table').find('tr').its('length').should('be.gte', 2)
  })

  it('Navega até o checkout a partir do carrinho', () => {
    cy.get('a[href*="product-details-one"]').first().click({ force: true })
    cy.contains(/add to cart/i, { timeout: 5000 }).click({ force: true })
    cy.visit(baseUrl + '/cart')

    // tenta botão de finalizar compra/checkout
    cy.contains(/proceed to checkout|checkout|finalizar compra|finalizar pedido/i).first().click({ force: true })

    // valida que a URL do checkout contém 'checkout' ou 'pagamento'
    cy.url({ timeout: 8000 }).should(url => {
      expect(url.toLowerCase()).to.satisfy(u => u.includes('checkout') || u.includes('pagamento') || u.includes('finalizar'))
    })
  })

})
