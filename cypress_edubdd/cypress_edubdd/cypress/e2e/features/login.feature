Feature: login to Zero Bank

    Feature Description  

  Scenario: Invalid login
    Given I open login page
    When I submit Invalid login
    Then I see alert error

  Scenario: Login valid
    Given I open login page  
    When I submit login  
    Then I should see homepage

  