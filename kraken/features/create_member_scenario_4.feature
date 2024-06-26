Feature: Crear Miembro

@user5 @web
Scenario: Crear un miembro con una dirección de correo electrónico inválido.
  Given I navigate to page "<GHOST_LOGIN_URL>"
  And I wait for 5 seconds
  And I take a screenshot and save it in "create_member_scenario_4/1"
  And I fill the login form email with "<GHOST_USERNAME>"
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_member_scenario_4/2"
  And I fill the login form password with "<GHOST_PASSWORD>"
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_member_scenario_4/3"
  And I try to login
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_member_scenario_4/4"
  And I wait for the dashboard to be visible
  When I navigate to page "<GHOST_MEMBERS_URL>"
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_member_scenario_4/5"
  And I wait for the members to be visible
  And I start to create a new member
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_member_scenario_4/6"
  And I fill the member name with random data
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_member_scenario_4/7"
  And I fill the member email with invalid data
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_member_scenario_4/8"
  And I fill the member note with random data
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_member_scenario_4/9"
  And I click on the save member button
  And I wait for 3 seconds
  And I take a screenshot and save it in "create_member_scenario_4/10"
  Then I expect the error member creation message contains "<EMAIL_MEMBER_ERROR_MESSAGE>"