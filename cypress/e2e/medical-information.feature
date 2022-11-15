Feature: Medical information

  Background:
    Given The login page of the health dashboard
    And I log in with email address "kobe@mail.com" and password "azerty"
    And I confirm the form
    And I will be forwarded to the main page of the health dashboard
    And I am authenticated

  Scenario: The patient can successfully add medical information
    When I want to edit my medical information
    And I go to a form in which I can specify my medical information
    And I fill in my birth date "1998-11-19"
    And I fill in my sex "Mannelijk"
    And I fill in my ethnicity "Kaukasisch"
    And I fill in my height "1.85" m
    And I fill in my weight "80" kg
    And I fill in my tobacco use "Nee"
    And I confirm the form
    Then I will be forwarded to the main page of the health dashboard
    And the calculated hospitalisation risk will be shown as "Laag"
    And the dashboard feedback is "Je COVID-hospitalisatierisico met bijhorende toelichting is succesvol berekend."
    And the calculated age is "23" years old
    And the body mass index is "23.4"

  Scenario: The patient cannot successfully modify his height and weight
    When I want to edit my medical information
    And I go to a form in which I can specify my medical information
    And I fill in my height "2.51" m
    And I fill in my weight "251" kg
    Then I get an error that specifies that the given height is invalid
    And I get an error that specifies that the given weight is invalid

  Scenario: The patient can successfully modify his age, height and weight
    When I want to edit my medical information
    And I go to a form in which I can specify my medical information
    And I fill in my birth date "1950-11-19"
    And I fill in my height "1.60" m
    And I fill in my weight "130" kg
    And I confirm the form
    Then I will be forwarded to the main page of the health dashboard
    And the calculated hospitalisation risk will be shown as "Medium"
    And the dashboard feedback is "Je COVID-hospitalisatierisico met bijhorende toelichting is succesvol berekend."
    And the calculated age is "71" years old
    And the body mass index is "50.8"

  Scenario: The patient can succesfully add diseases
    When I want to edit my diseases information
    And I go to a form in which I can specify my diseases
    And I select "Astma" as a disease
    And I confirm the form
    Then I will be forwarded to the main page of the health dashboard
    And the calculated hospitalisation risk will be shown as "Hoog"
    And the dashboard feedback is "Je COVID-hospitalisatierisico met bijhorende toelichting is succesvol berekend."
    And the calculated age is "71" years old
    And the body mass index is "50.8"

  Scenario: The patient can succesfully remove his medical information
    When I click on the cross in order to remove my medical information
    Then the calculated hospitalisation risk will be shown as "Ongekend"
    And the dashboard feedback is "Vervolledig je medische informatie om een toelichting te verkrijgen."
