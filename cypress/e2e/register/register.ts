import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";

Given("The register page of the health dashboard", () => {
    cy.visit("http://localhost:4200/#/register");
});

When(/^I register a new patient with email address "([^"]*)" and password "([^"]*)"$/, (email: string, password: string) => {
    cy.get("#email").type(email);
    cy.get("#password").type(password);
});

When(/^I confirm the form$/, () => {
    cy.get("button.confirm").click();
});

Then(/^I will be forwarded to the main page of the health dashboard$/, () => {
    cy.contains("div.text-black", "Welkom!");
});

Then(/^the calculated hospitalisation risk will be shown as "([^"]*)"$/, (risk: string) => {
    cy.contains(".percentage", risk);
});

Given(/^I am authenticated$/, () => {
    cy.contains(".nav-link", "Uitloggen")
});

Then(/^I get an error that specifies that the given email address is incorrect$/, () => {
    cy.contains(".input-error", "Vul een geldig e-mailadres in.")
});

Then(/^I cannot confirm the form$/, () => {
    cy.get("button.confirm").should("be.disabled");
});