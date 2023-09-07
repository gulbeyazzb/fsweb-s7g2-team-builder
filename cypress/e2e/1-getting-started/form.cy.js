describe("form cypress testi", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Form bilgisini al", () => {
    cy.get('[href="/signup"]').click();
    cy.get('[data-cy="name"]').type("Yasemin").should("have.value", "Yasemin");
    cy.get('[href="/signup"]').click();
    cy.get('[data-cy="email"]')
      .type("yasemin@gmail.com")
      .should("have.value", "yasemin@gmail.com");
    cy.get('[href="/signup"]').click();
    cy.get('[data-cy="rol"]')
      .type("developer")
      .should("have.value", "developer");
    cy.get('[data-cy="terms"]').check();
    cy.get('[data-cy="submit"]').should("have.enabled");
    cy.get('[data-cy="submit"]').click();
  });
});

describe("form cypress testi", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("error bilgisini al", () => {
    cy.get('[href="/signup"]').click();
    cy.url().should("include", "/signup");
  });
  it("isim alanı kontrolü", () => {
    cy.get('[href="/signup"]').click();
    cy.get('[data-cy="name"]').type("ya");
    cy.get('[data-cy="name-error"]').contains("karakter");
  });
  it.only("isim alanı kontrolü", () => {
    cy.get('[href="/signup"]').click();
    cy.get('[ data-cy="member-form"]').submit();
    cy.url().should("be.equal", "http://localhost:3000/");
  });
  //   cy.get('[data-cy="name"]').type("Ya");
  //   cy.get('[data-cy="email"]')
  //     .type("yasemingmail.com")
  //     .should("have.value", "yasemin@gmail.com")
  //     .cy.contains("geçerli email giriniz!");
  // });

  // it("error bilgisini al", () => {
  //   cy.get('[data-cy="terms"]').check();
  //   cy.get('[data-cy="terms"]').click();
  //   cy.contains("Lütfen kullanım şartlarını kabul ediniz!");
});
