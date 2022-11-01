import {Given, When} from "@badeball/cypress-cucumber-preprocessor";

Given(/^I want to edit my medical information$/, () => {
    cy.get(".fa-pen").click();
});

Given(/^I go to a form in which I can specify my medical information$/, () => {
    cy.contains("div.text-black", "Medische informatie");
});

When(/^I fill in my birth date "([^"]*)" and my sex "([^"]*)" and my ethnicity "([^"]*)"$/, (birthDate: string, sex: string, ethnicity: string) => {
    cy.get("#birthdate").type(birthDate);
    cy.get("#sex").select(sex);
    cy.get("#ethnicity").select(ethnicity);
});

When(/^I fill in my height "([^"]*)" m and my weight "([^"]*)" kg and my tobacco use "([^"]*)"$/, (height: string, weight: string, tobaccoUse: string) => {
    cy.get("#height").type(height);
    cy.get("#weight").type(weight);
    cy.get("#tobacco").select(tobaccoUse);
});

Given(/^The login page of the health dashboard$/, () => {
    cy.visit("http://localhost:4200/#/login");
});

Given(/^I log in with email address "([^"]*)" and password "([^"]*)"$/, (email: string, password: string) => {
    cy.get("#email").type(email);
    cy.get("#password").type(password);
});