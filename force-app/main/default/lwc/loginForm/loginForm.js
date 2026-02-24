import { LightningElement, track } from 'lwc';
import validateUser from '@salesforce/apex/LoginController.validateUser';

export default class LoginForm extends LightningElement {

    @track username;
    @track password;
    @track message;

    handleUsername(event){
        this.username = event.target.value;
    }

    handlePassword(event){
        this.password = event.target.value;
    }

    handleLogin(){
        validateUser({
            username: this.username,
            password: this.password
        })
        .then(result => {
            this.message = result;
        })
        .catch(error => {
            this.message = 'Error occurred';
        });
    }
}