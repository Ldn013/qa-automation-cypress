/// <reference types="cypress" />

// Funcionalidade 
describe ('Login', () => {


    // Cenario 1

    it('Login com sucesso', () => {
        // abre o app
        cy.visit('https://automationpratice.com.br/login')
        cy.wait(3000) // Espera 3 segundos para a página carregar
        
        // Preenche o email 
        cy.get('#user').type('test@example.com')
        
        // Preenche a senha
        cy.get('#password').type('password123')
        
        // Clica no botão de login
        cy.get('#btnLogin').click()
        
        // Valida se o login foi realizado com sucesso
        cy.get('#swal2-title').should('have.text', 'Login realizado')

        
    })    

    // Cenario 2

    it('Senha inválida', () => {
        // abre o app
        cy.visit('https://automationpratice.com.br/login')
        cy.wait(3000) // Espera 3 segundos para a página carregar  

        // Preenche o email 
        cy.get('#user').type('test@example.com')
        
        // Preenche a senha
        cy.get('#password').type('d123')
        
        // Clica no botão de login
        cy.get('#btnLogin').click()
        
        // Valida se o login foi inválido
        cy.get('.invalid_input')
            .should('have.text', 'Senha inválida.')
            .should('be.visible')


    }) 
    
    // Cenario 3

    it('Email inválido', () => {
        // abre o app
        cy.visit('https://automationpratice.com.br/login')
        cy.wait(3000) // Espera 3 segundos para a página carregar

        // Preenche o email
        cy.get('#user').type('test@')

        // Preenche a senha
        cy.get('#password').type('password123')

        // Clica no botão de login
        cy.get('#btnLogin').click()

        // Valida se o login foi inválido
        cy.get('.invalid_input')
            .should('have.text', 'E-mail inválido.')
            .should('be.visible')
    })
        
  
})