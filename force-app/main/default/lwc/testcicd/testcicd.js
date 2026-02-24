import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Testcicd extends LightningElement {
    name = 'Developer';

    handleChange(event) {
        this.name = event.target.value;
    }

    showMessage() {
        const event = new ShowToastEvent({
            title: 'Success',
            message: `Hello ${this.name}, CI/CD is working!`,
            variant: 'success'
        });
        this.dispatchEvent(event);
    }
}