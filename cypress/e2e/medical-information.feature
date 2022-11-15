# language: nl
Functionaliteit: Medische informatie

  Achtergrond:
    Gegeven De loginpagina van het gezondheidsdashboard
    En ik log in met mailadres "kobe@mail.com" en wachtwoord "azerty"
    En ik bevestig het formulier
    En ik word doorwezen naar de hoofdpagina van het gezondheidsdashboard
    En dan ben ik geauthenticeerd

  Scenario: De patiënt kan succesvol medische informatie toevoegen
    Wanneer ik medische informatie wil wijzigen
    En ik ga naar het formulier waar ik medische informatie kan toevoegen
    En ik vul mijn geboortedatum "1998-11-19" in
    En ik vul mijn geslacht "Mannelijk" in
    En ik vul mijn ethniciteit "Kaukasisch" in
    En ik vul mijn lengte "1.85" m in
    En ik vul mijn gewicht "80" kg in
    En ik vul mijn tabaksgebruik "Nee" in
    En ik bevestig het formulier
    Dan ik word doorwezen naar de hoofdpagina van het gezondheidsdashboard
    En het berekende hospitalisatierisico wordt weergegeven als "Laag"
    En het dashboard toont de volgende melding: "Je COVID-hospitalisatierisico met bijhorende toelichting is succesvol berekend."
    En de berekende leeftijd is "23" jaar oud
    En de body mass index is "23.4"

  Scenario: De patiënt kan niet succesvol zijn/haar lengte en gewicht wijzigen
    Wanneer ik medische informatie wil wijzigen
    En ik ga naar het formulier waar ik medische informatie kan toevoegen
    En ik vul mijn lengte "2.51" m in
    En ik vul mijn gewicht "251" kg in
    Dan krijg ik een foutmelding dat de gegeven lengte incorrect is
    En krijg ik een foutmelding dat het gegeven gewicht incorrect is

  Scenario: De patiënt kan succesvol zijn/haar leeftijd, lengte en gewicht wijzigen
    Wanneer ik medische informatie wil wijzigen
    En ik ga naar het formulier waar ik medische informatie kan toevoegen
    En ik vul mijn geboortedatum "1950-11-19" in
    En ik vul mijn lengte "1.60" m in
    En ik vul mijn gewicht "130" kg in
    En ik bevestig het formulier
    Dan ik word doorwezen naar de hoofdpagina van het gezondheidsdashboard
    En het berekende hospitalisatierisico wordt weergegeven als "Medium"
    En het dashboard toont de volgende melding: "Je COVID-hospitalisatierisico met bijhorende toelichting is succesvol berekend."
    En de berekende leeftijd is "71" jaar oud
    En de body mass index is "50.8"

  Scenario: De patiënt kan succesvol ziektes toevoegen
    Wanneer ik een ziekte wil toevoegen
    En ik ga naar het formulier waar ik ziektes kan toevoegen
    En ik selecteer "Astma" als een ziekte
    En ik bevestig het formulier
    Dan ik word doorwezen naar de hoofdpagina van het gezondheidsdashboard
    En het berekende hospitalisatierisico wordt weergegeven als "Hoog"
    En het dashboard toont de volgende melding: "Je COVID-hospitalisatierisico met bijhorende toelichting is succesvol berekend."
    En de berekende leeftijd is "71" jaar oud
    En de body mass index is "50.8"

  Scenario: De patiënt kan succesvol zijn/haar medische informatie verwijderen
    Wanneer ik klik op het kruisje om mijn medische informatie te verwijderen
    Dan het berekende hospitalisatierisico wordt weergegeven als "Ongekend"
    En het dashboard toont de volgende melding: "Vervolledig je medische informatie om een toelichting te verkrijgen."
