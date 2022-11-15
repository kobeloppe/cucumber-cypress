import {Given, When, Then, Before, After} from "@badeball/cypress-cucumber-preprocessor";

// After({tags: '@latest'}, async () => {
//
// });

Given(/^I want to edit my medical information$/, () => {
    cy.get("#modify-medical-information").click();
});

Given(/^I go to a form in which I can specify my medical information$/, () => {
    cy.contains("div.text-black", "Medische informatie");
});

When(/^I fill in my birth date "([^"]*)"$/, (birthDate: string) => {
    cy.get("#birthdate").clear().type(birthDate);
});

When(/^I fill in my sex "([^"]*)"$/, (sex: string) => {
    cy.get("#sex").select(sex);
});

When(/^I fill in my ethnicity "([^"]*)"$/, (ethnicity: string) => {
    cy.get("#ethnicity").select(ethnicity);
});

When(/^I fill in my height "([^"]*)" m$/, (height: string) => {
    cy.get("#height").clear().type(height);
});

When(/^I fill in my weight "([^"]*)" kg$/, (weight: string) => {
    cy.get("#weight").clear().type(weight);
});

When(/^I fill in my tobacco use "([^"]*)"$/, (tobaccoUse: string) => {
    cy.get("#tobacco").select(tobaccoUse);
});

Given(/^The login page of the health dashboard$/, () => {
    cy.visit("http://localhost:4200/#/login");
});

Given(/^I log in with email address "([^"]*)" and password "([^"]*)"$/, (email: string, password: string) => {
    cy.get("#email").type(email);
    cy.get("#password").type(password);
});

Then(/^I get an error that specifies that the given height is invalid$/, () => {
    cy.contains(".input-error", "Vul een geldige lengte in.");
});

Then(/^I get an error that specifies that the given weight is invalid$/, () => {
    cy.contains(".input-error", "Vul een geldig gewicht in.");
});

Then(/^the calculated age is "([^"]*)" years old$/, (age: string) => {
    cy.contains("table.ng-star-inserted > tr:nth-child(2) > td:nth-child(1)", age);
});

Then(/^the body mass index is "([^"]*)"$/, (bmi: string) => {
    cy.contains(".value", bmi);
});

When(/^I want to edit my diseases information$/, () => {
    cy.get("#modify-diseases").click();
});

When(/^I go to a form in which I can specify my diseases$/, () => {
    cy.contains(".text-black", "Voeg ziekte toe")
});

When(/^I select "([^"]*)" as a disease$/, (disease: string) => {
    cy.get("#disease").select(disease);
});

When(/^I click on the cross in order to remove my medical information$/, () => {
    cy.get("#remove-medical-information").click();
});