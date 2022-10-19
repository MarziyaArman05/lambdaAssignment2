describe("Test Scenario 1", () => {
  it("user Open LambdaTest’s Selenium Playground from", function () {
    cy.visit("https://www.lambdatest.com/selenium-playground");
  });

  it(" user click on “Progress Bars & Sliders”", function () {
    cy.get(
      'h2.st_heading:contains("Progress Bars & Sliders")'
    ).scrollIntoView();
    cy.get('h2.st_heading:contains("Progress Bars & Sliders")').click();
  });
  it(" user click “Drag & Drop Sliders”", function () {
    cy.get('a.text-black:contains("Drag & Drop Sliders")').click();
  });
  it("user Select the slider “Default value 15”", function () {
    cy.get("#rangeSuccess").click();
    cy.get("#rangeSuccess").trigger("mousemove", {
      which: 1,
      pageX: 600,
      pageY: 0,
    });
  });
  it("user drag the bar to make it 95 by validating whether the range value shows 95.", function () {
    cy.get("#rangeInfo").should("be.visible");
  });
});
