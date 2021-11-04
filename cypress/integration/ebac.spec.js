/// <reference types="cypress" />

describe("DevFinance adicionar valores de entrada e saída", () => {   
    it('Adicionar valores 1 na entrada', () => {
        cy.visit('https://devfinance-agilizei.netlify.app/#');
        cy.get('#transaction > .button').click()
        cy.get('#description').type("freelancer 1");
        cy.get('#amount').type( 500);
        cy.get('#date').type('2021-11-04');
        cy.contains('Salvar').click();
        cy.wait(2000);
    });

    it('Adicionar valores 1 na entrada', () => {
        cy.get('#transaction > .button').click();
        cy.get('#description').type("freelancer 2");
        cy.get('#amount').type( 700);
        cy.get('#date').type('2021-11-04');
        cy.contains('Salvar').click();
        cy.wait(2000);
    });

    it('Adicionar valores saida', () => {       
        cy.get('#transaction > .button').click()
        cy.get('#description').type("Educação");
        cy.get('#amount').type(-190);
        cy.get('#date').type('2021-11-06');
        cy.contains('Salvar').click();
        cy.wait(2000);
    });

    it('Adicionar valores saida 2 ', () => {       
        cy.get('#transaction > .button').click();
        cy.get('#description').type("Gasolina");
        cy.get('#amount').type(-170);
        cy.get('#date').type('2021-11-05');
        cy.contains('Salvar').click();
        cy.wait(2000);        
    });   

});

describe("DevFinanceexcluir um valor de entrada e um de saída", () => {   
    it('Excluir uma entrada ', () => {
        cy.get('[data-index="0"] > :nth-child(4) > img').click()
        
    });

    it('Excluir uma saída ', () => {
        cy.get('[data-index="2"] > :nth-child(4) > img').click()
        
    });

});