
describe('Тестирование авторизации QAstudio', function () {
    it('Позитивный кейс авторизации', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru'); 
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
     })
     
     
     it('Проверка логики востановления пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').click();
         cy.get('#mailForgot').type('nikitaqa@mail.ru');
         cy.get('#restoreEmailButton').click();
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
         cy.get('#exitMessageButton > .exitIcon');
     })
     
     
     it('Верный логин, неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastud123');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
     })
        
     
     it('Неверный логин, верный пароль', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('german@do6678lnikov.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
            cy.get('#exitMessageButton > .exitIcon');
     })    
            
     
     it('Емайл без @', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('germando6678lnikov.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
     })

     
     it('Строчные буквы в емайл', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon')
     })

    })
