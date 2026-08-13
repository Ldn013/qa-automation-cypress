 # Testes E2E com Cypress — Carrinho & Login

 Este repositório contém testes end-to-end em Cypress para o site de demonstração https://automationpratice.com.br/.

 ## Testes implementados
 - `cypress/e2e/login.cy.js` — cenários de login:
   - Login com sucesso
   - Senha inválida
   - E-mail inválido

 - `cypress/e2e/cart.cy.js` — cenários da tela de carrinho:
   - Adicionar um produto ao carrinho e validar presença
   - Atualizar quantidade e validar o novo valor
   - Remover produto e validar carrinho vazio
   - Adicionar múltiplos produtos e validar itens
   - Ir para o checkout a partir do carrinho

 ## Como executar localmente

 Instale as dependências:

 ```bash
 npm install
 ```

 Executar um spec específico (headed, Chrome):

 ```bash
 npx cypress run --headed --browser chrome --spec "cypress/e2e/cart.cy.js"
 npx cypress run --headed --browser chrome --spec "cypress/e2e/login.cy.js"
 ```

 Abrir o Test Runner (interface interativa):

 ```bash
 npx cypress open
 ```

 ## Artefatos
 - Os vídeos das execuções são salvos em `cypress/videos/` (ex.: `cypress/videos/cart.cy.js.mp4`, `cypress/videos/login.cy.js.mp4`).

 ## Observações
 - Os testes foram desenvolvidos contra o site público `automationpratice.com.br`. Seletores e fluxos foram implementados de forma robusta, porém podem requerer manutenção caso a estrutura do site mude.
 - Se deseja que eu publique este repositório no GitHub, informe a URL remota (ou autorize o push). Já há um commit local; eu posso adicionar o remoto e enviar os commits quando autorizado.


