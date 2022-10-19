describe("Test Scenario 1", () => {
  it("user Open LambdaTest’s Selenium Playground from", function () {
    cy.visit("https://www.lambdatest.com/selenium-playground");
  });
  it("Click “Simple Form Demo” under Input Forms.", function () {
    cy.get('.pt-10 a:contains("Simple Form Demo")').first().click();
  });
  it("user validate that the URL contains “simple-form-demo”", function () {
    cy.get("h1.text-size-48").should("be.visible");
  });
  it("user create a variable for a string value E.g: “Welcome to LambdaTest”.", function () {
    let string = "Welcome to LambdaTest";
  });
  it("Use this variable to enter values in the “Enter Message” text box.", function () {
    cy.get("#user-message").type("Welcome to LambdaTest");
  });
  it("click on get checked vslue", function () {
    cy.get("#showInput").click();
  });
  it("Validate whether the same text message is displayed in the right-hand panel under the “Welcome to LambdaTest” section.", function () {
    cy.get("#message").contains("Welcome to LambdaTest");
  });
});
