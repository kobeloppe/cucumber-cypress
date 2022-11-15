import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor/methods";

Given(/^de registratiepagina van het gezondheidsdashboard$/, () => {
    cy.visit("http://localhost:4200/#/register");
    cy.contains("div.text-black", "Registreren");
});

When(/^ik een nieuwe patiënt registreer met een gegeven mailadres en wachtwoord$/, () => {
    const email = `${Math.random().toString(36)}@mail.com`;
    const password = "azerty";
    cy.get("#email").type(email);
    cy.get("#password").type(password);
});

When(/^ik bevestig het formulier$/, () => {
    cy.get("button.confirm").click();
});

Then(/^ik word doorwezen naar de hoofdpagina van het gezondheidsdashboard$/, () => {
    cy.contains("div.text-black", "Welkom!");
});

Then(/^dan ben ik geauthenticeerd$/, () => {
    cy.contains(".nav-link", "Uitloggen")
});

Then(/^het berekende hospitalisatierisico wordt weergegeven als "([^"]*)"$/, (risico: string) => {
    cy.contains(".percentage", risico);

});

Then(/^het dashboard toont de volgende melding: "([^"]*)"$/, (melding: string) => {
    cy.contains(".explanation", melding);
});

When(/^ik een nieuwe patiënt registreer met mailadres "([^"]*)" en wachtwoord "([^"]*)"$/, (mailadres: string, wachtwoord: string) => {
    cy.get("#email").type(mailadres);
    cy.get("#password").type(wachtwoord);
});

Then(/^krijg ik een foutmelding dat het gegeven mailadres incorrect is$/, () => {
    cy.contains(".input-error", "Vul een geldig e-mailadres in.")
});

Then(/^krijg ik een foutmelding dat het gegeven wachtwoord incorrect is$/, function () {
    cy.contains(".input-error", "Vul een geldig wachtwoord in.");
});

Then(/^dan kan ik het formulier niet bevestigen$/, () => {
    cy.get("button.confirm").should("be.disabled");
});

When(/^ik klik op uitloggen$/, () => {
    cy.get("#log-out").click();
});

Then(/^ik word doorwezen naar een pagina waarop ik moet bevestigen dat ik wil uitloggen$/, () => {
    cy.contains(".text-black", "Uitloggen");
});

Then(/^ik ben uitgelogd en ik zie opnieuw de inlogpagina$/, () => {
    cy.contains(".text-black", "Inloggen");
});

Then(/^er is geen toelichting beschikbaar$/, () => {
    cy.contains("span", "Vervolledig je medische informatie om een toelichting te verkrijgen.")
});