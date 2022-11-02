Feature: Register a patient

  Scenario: A patient can successfully register
    Given The register page of the health dashboard
    When I register a new patient with email address "kobe@mail.com" and password "azerty"
    And I confirm the form
    Then I will be forwarded to the main page of the health dashboard
    And I am authenticated
    And the calculated hospitalisation risk will be shown as "Ongekend"

  Scenario: A patient with invalid email address cannot successfully register
    Given The register page of the health dashboard
    When I register a new patient with email address "kobe" and password "azerty"
    Then I get an error that specifies that the given email address is incorrect
    And I cannot confirm the form

  Scenario: A patient with short password cannot successfully register
    Given The register page of the health dashboard
    When I register a new patient with email address "kobe@mail.com" and password "t"
    Then I get an error that specifies that the given password is too short
    And I cannot confirm the form



