# language: nl
Functionaliteit: Registreer een patiënt

  Scenario: Een patient kan zich succesvol registreren
    Gegeven de registratiepagina van het gezondheidsdashboard
    Wanneer ik een nieuwe patiënt registreer met een gegeven mailadres en wachtwoord
    En ik bevestig het formulier
    Dan ik word doorwezen naar de hoofdpagina van het gezondheidsdashboard
    En dan ben ik geauthenticeerd
    En het berekende hospitalisatierisico wordt weergegeven als "Ongekend"
    En er is geen toelichting beschikbaar
    En het dashboard toont de volgende melding: "Vervolledig je medische informatie om een toelichting te verkrijgen."

  Scenario: Een patiënt met een ongeldig mailadres kan zich niet succesvol registreren
    Gegeven de registratiepagina van het gezondheidsdashboard
    Wanneer ik een nieuwe patiënt registreer met mailadres "kobe" en wachtwoord "azerty"
    Dan krijg ik een foutmelding dat het gegeven mailadres incorrect is
    En dan kan ik het formulier niet bevestigen

  Scenario: Een patiënt met een wachtwoord korter dan 6 karakters kan zich niet succesvol registreren
    Gegeven de registratiepagina van het gezondheidsdashboard
    Wanneer ik een nieuwe patiënt registreer met mailadres "kobe@mail.com" en wachtwoord "azert"
    Dan krijg ik een foutmelding dat het gegeven wachtwoord incorrect is
    En dan kan ik het formulier niet bevestigen

  Scenario: Een geregistreerde patiënt kan uitloggen
    Gegeven de loginpagina van het gezondheidsdashboard
    En ik log in met mailadres "kobe@mail.com" en wachtwoord "azerty"
    En ik bevestig het formulier
    En ik word doorwezen naar de hoofdpagina van het gezondheidsdashboard
    En dan ben ik geauthenticeerd
    Wanneer ik klik op uitloggen
    Dan ik word doorwezen naar een pagina waarop ik moet bevestigen dat ik wil uitloggen
    Wanneer ik bevestig het formulier
    Dan ik ben uitgelogd en ik zie opnieuw de inlogpagina

