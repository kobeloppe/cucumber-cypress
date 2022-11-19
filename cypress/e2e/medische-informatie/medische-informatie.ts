import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import {DataTable} from "@cucumber/cucumber";

Given(/^de loginpagina van het gezondheidsdashboard$/, () => {
    cy.visit("http://localhost:4200/#/login");
    cy.contains(".text-black", "Inloggen");
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

When(/^ik vul de onderstaande medische gegevens in$/, (table: DataTable) => {
    const data = table.transpose().rowsHash();
    const geboortedatum = data["geboortedatum"];
    const geslacht = data["geslacht"];
    const ethniciteit = data["ethniciteit"];
    const lengte = data["lengte"];
    const gewicht = data["gewicht"];
    const tabaksgebruik = data["tabaksgebruik"];
    cy.get("#birthdate").clear().type(geboortedatum);
    cy.get("#sex").select(geslacht);
    cy.get("#ethnicity").select(ethniciteit);
    cy.get("#height").clear().type(lengte);
    cy.get("#weight").clear().type(gewicht);
    cy.get("#tobacco").select(tabaksgebruik);
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

When(/^ik vul mijn gewicht (\d+) kg in$/, (gewicht: number) => {
    cy.get("#weight").clear().type(gewicht.toString());
});

When(/^ik vul mijn tabaksgebruik "([^"]*)" in$/, (tabaksgebruik: string) => {
    cy.get("#tobacco").select(tabaksgebruik);
});

When(/^de berekende leeftijd is (\d+) jaar oud$/, (leeftijd: number) => {
    cy.contains("td", leeftijd);
});

Then(/^de body mass index is (\d+)\.(\d+)$/, (bmi: number) => {
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

Then(/^de ziekte "([^"]*)" is zichtbaar op de hoofdpagina van het gezondheidsdashboard$/, (ziekte: string) => {
    cy.contains("div", ziekte);
});

When(/^ik op het kruisje klik naast de naam van de ziekte$/, () => {
    cy.get("body > app-root > app-dashboard > div > div > div > div.col-lg-7 > div > app-diseases-box > div > div:nth-child(2) > div > div > i").click();
});

Then(/^geen enkele ziekte is nog zichtbaar op de hoofdpagina van het gezondheidsdashboard$/, () => {
    cy.contains("span", "Je hebt momenteel geen chronische ziektes geregistreerd.");
});