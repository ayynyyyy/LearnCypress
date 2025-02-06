Feature: Searching Page

 Scenario: Search for a valid keyword
    Given I am on the page
    When I enter "online banking" in the search bar
    Then I should see results related

  Scenario: Search for an invalid keyword
    Given I am on the page
    When I enter "xy21" invalid keyword
    Then I should see a message

  Scenario: Search with an empty input
    Given I am on the page
    When I leave the search bar empty
    Then I should see an error

