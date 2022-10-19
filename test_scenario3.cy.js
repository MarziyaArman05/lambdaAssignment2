describe("Test Scenario 1", () => {
  it("user Open LambdaTest’s Selenium Playground from", function () {
    cy.visit("https://www.lambdatest.com/selenium-playground/input-form-demo");
  });

  it("user click “Input Form Submit” under “Input Forms””", function () {
    cy.get('p.inline-block:contains("Input Forms")').click();
  });

  it("user Click “Submit” without filling in any information in the form", function () {
    cy.get(".btn").click();
  });
  it("Assert “Please fill in the fields” error message", function () {});
  it("Fill in Name, Email, and other fields”", function () {
    cy.get("#name").type("arman");
    cy.get("#inputEmail4").type("arman@gmail.com");
    cy.get("#inputPassword4").type("Aramn@123");
    cy.get("#company").type("Arman Software");
    cy.get("#websitename").type("ArmanSoftware.com");
    cy.get('select[name="country"]')
      .should("be.visible")
      .select("United States", { force: true });
    cy.get("#inputCity").type("jammu");
    cy.get("#inputAddress1").type("rehadi");
    cy.get("#inputAddress2").type("bantalab");
    cy.get("#inputState").type("jammu");
    cy.get("#inputZip").type("123123");
  });
  it("From the Country drop-down, select “United States” using the textproperty.", function () {
    cy.get('select[name="country"]')
      .should("be.visible")
      .select("United States", { force: true });
  });
  it("After fill input field click on the submit button", function () {
    cy.get(".btn").click();
  });
  it("validate the success message “Thanks for contactingus, we will get back to you shortly.” on the screen.", function () {
    cy.get(".success-msg").contains(
      "Thanks for contacting us, we will get back to you shortly."
    );
  });
});
