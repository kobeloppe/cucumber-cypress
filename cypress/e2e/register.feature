Feature: Register a patient

  Scenario: The information to register a patient is provided
    Given The register page of the health dashboard
    When I register a new patient with email address "kobe@mail.com" and password "azerty"
    And I confirm the form
    Then I will be forwarded to the main page of the health dashboard
    And I am authenticated
    And the calculated hospitalisation risk will be shown as "Ongekend"

  Scenario: The patient can add medical information in order to receive a prediction
    Given The login page of the health dashboard
    And I log in with email address "kobe@mail.com" and password "azerty"
    Then I will be forwarded to the main page of the health dashboard
    And I am authenticated
    And I want to edit my medical information
    And I go to a form in which I can specify my medical information
    When I fill in my birth date "1998-11-19" and my sex "Mannelijk" and my ethnicity "Kaukasisch"
    And I fill in my height "1.85" m and my weight "80" kg and my tobacco use "Nee"
    And I confirm the form
    Then I will be forwarded to the main page of the health dashboard
    And the calculated hospitalisation risk will be shown as "Laag"

