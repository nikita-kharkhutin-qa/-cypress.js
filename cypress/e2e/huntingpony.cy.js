describe('Один длинный автотест', function () {
    it('Длиииный автотест', function () {
         cy.visit('https://huntingpony.com/');
         cy.get('[data-index="7"] > .header__collections-controls > .header__collections-link').click();
         cy.get('.product-preview__img-1').click();
         cy.get('.add-cart-counter__btn').wait(2000);
         cy.get('.add-cart-counter__btn').click();
         cy.get('[data-add-cart-counter-plus=""]').wait(1500);
         cy.get('[data-add-cart-counter-plus=""]').click();
         cy.get('.header__cart > .icon').click();
         cy.get('.cart-controls > .button').click();
         cy.get('.decorated-title').contains('Оформление заказа');

        

     })
    })