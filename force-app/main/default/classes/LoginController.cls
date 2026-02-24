public with sharing class LoginController {

    @AuraEnabled
    public static String validateUser(String username, String password) {
        
        List<User> users = [
            SELECT Id, Username 
            FROM User 
            WHERE Username = :username 
            LIMIT 1
        ];

        if(users.isEmpty()){
            return 'User Not Found';
        }

        // Demo validation (For real app use proper authentication)
        if(password == 'Test@123'){
            return 'Login Success';
        } else {
            return 'Invalid Password';
        }
    }
}
