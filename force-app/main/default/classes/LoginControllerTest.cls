@isTest
public class LoginControllerTest {
    
    @isTest
    static void testLogin() {
        Test.startTest();
        String result = LoginController.validateUser(
            UserInfo.getUserName(), 
            'Test@123'
        );
        Test.stopTest();
        System.assertEquals('Login Success', result);
    }
}
