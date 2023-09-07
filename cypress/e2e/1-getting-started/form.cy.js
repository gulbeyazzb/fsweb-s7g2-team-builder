describe("form cypress testi", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("İsim bilgisini al", () => {
    cy.get('[href="/signup"]').click();
    cy.get('[data-cy="name"]').type("Yasemin").should("have.value", "Yasemin");
  });

  it("Email bilgisini al", () => {
    cy.get('[href="/signup"]').click();
    cy.get('[data-cy="email"]')
      .type("yasemin@gmail.com")
      .should("have.value", "yasemin@gmail.com");
  });
  it("Rol bilgisini al", () => {
    cy.get('[href="/signup"]').click();
    cy.get('[data-cy="rol"]')
      .type("developer")
      .should("have.value", "developer");
  });
  it("Check bilgisini al", () => {
    cy.get('data-cy="terms" [type="checkbox"]')
      .not("[disabled]")
      .uncheck()
      .should("not.be.checked");

    cy.get('data-cy="terms" [type="checkbox"]')
      .check("checkbox")
      .uncheck("checkbox")
      .should("not.be.checked");

    // Ignore error checking prior to unchecking
    cy.get('data-cy="terms" [disabled]')
      .uncheck({ force: true })
      .should("not.be.checked");
  });
  it("Submit bilgisini al", () => {
    cy.get('[data-cy="member-form"]')
      .find('[data-cy="name"]')
      .type("Yasemin")
      .find('[data-cy="email"]')
      .type("yasemin@gmail.com")
      .find('[data-cy="rol"]')
      .type("developer")
      .find('[data-cy="terms"]')
      .type("checkbox");
    cy.get('[data-cy="member-form"]')
      .submit()
      .next()
      .should("contain", "Your form has been submitted!");
  });
});
