describe('Тестирование работоспособности приложения', function () {
  it('Приложение запускается по адресу localhost:3000', function () {
    cy.visit('/');
  });
});