const selector = require("../fixtures/selector.json");
const store = require("../fixtures/store.json");

     it("Should successfully login admin", () => {
      cy.visit("http://qamid.tmweb.ru/admin"); 
      cy.login("qamid@qamid.ru" , "qamid");
      cy.contains(store.deskForEqual).should("be.visible");
      cy.visit("/");
      cy.get(selector.chooseTimeSession).click();
      cy.get(selector.chooseFilm).contains(store.timeSession).click();
      cy.contains(store.timeSessionForEqual).should("be.visible");
      cy.get(selector.chooseChair).click();
      cy.get(selector.pushButton).click();
      cy.url().should('include', '/client/payment.php')
      cy.get(selector.pushButton).click();
      cy.contains(store.takeTicket).should("be.visible");
    
    });

