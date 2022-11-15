import {Given, When, Then, Before, After} from "@badeball/cypress-cucumber-preprocessor";

// After({tags: '@latest'}, async () => {
//
// });

Given(/^De loginpagina van het gezondheidsdashboard$/, () => {
    cy.visit("http://localhost:4200/#/login");
});

Given(/^ik log in met mailadres "([^"]*)" en wachtwoord "([^"]*)"$/, (mailadres: string, wachtwoord: string) => {
    cy.get("#email").type(mailadres);
    cy.get("#password").type(wachtwoord);
});

When(/^ik medische informatie wil wijzigen$/, () => {
    cy.get("#modify-medical-information").click();
});

When(/^ik ga naar het formulier waar ik medische informatie kan toevoegen$/, () => {
    cy.contains("div.text-black", "Medische informatie");
});

When(/^ik vul mijn geboortedatum "([^"]*)" in$/, (geboortedatum: string) => {
    cy.get("#birthdate").clear().type(geboortedatum);
});

When(/^ik vul mijn geslacht "([^"]*)" in$/, (geslacht: string) => {
    cy.get("#sex").select(geslacht);
});

When(/^ik vul mijn ethniciteit "([^"]*)" in$/, (ethniciteit: string) => {
    cy.get("#ethnicity").select(ethniciteit);
});

When(/^ik vul mijn lengte "([^"]*)" m in$/, (lengte: string) => {
    cy.get("#height").clear().type(lengte);
});

When(/^ik vul mijn gewicht "([^"]*)" kg in$/, (gewicht: string) => {
    cy.get("#weight").clear().type(gewicht);
});

When(/^ik vul mijn tabaksgebruik "([^"]*)" in$/, (tabak: string) => {
    cy.get("#tobacco").select(tabak);
});

When(/^de berekende leeftijd is "([^"]*)" jaar oud$/, (leeftijd: string) => {
    cy.contains("table.ng-star-inserted > tr:nth-child(2) > td:nth-child(1)", leeftijd);
});

When(/^de body mass index is "([^"]*)"$/, (bmi: string) => {
    cy.contains(".value", bmi);
});

When(/^ik klik op het kruisje om mijn medische informatie te verwijderen$/, () => {
    cy.get("#remove-medical-information").click();
});

Then(/^krijg ik een foutmelding dat de gegeven lengte incorrect is$/, () => {
    cy.contains(".input-error", "Vul een geldige lengte in.");
});

Then(/^krijg ik een foutmelding dat het gegeven gewicht incorrect is$/, () => {
    cy.contains(".input-error", "Vul een geldig gewicht in.");
});

When(/^ik een ziekte wil toevoegen$/, () => {
    cy.get("#modify-diseases").click();
});

When(/^ik ga naar het formulier waar ik ziektes kan toevoegen$/, () => {
    cy.contains(".text-black", "Voeg ziekte toe");
});

Then(/^ik selecteer "([^"]*)" als een ziekte$/, (ziekte: string) => {
    cy.get("#disease").select(ziekte);
});