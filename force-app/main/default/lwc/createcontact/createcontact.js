import { LightningElement, api, track } from 'lwc';
import createContact from '@salesforce/apex/ContactController.createContact';

export default class Recordeditform extends LightningElement {

    @track contacts;

    handleSubmit(event) {
        event.preventDefault(); // stop the form from submitting
        const fields = event.detail.fields;
        createContact({ incomingMapping: JSON.stringify(fields) })
        .then(result => {
            this.contacts = result;
            this.error = undefined;
        })
        .catch(error => {
            this.error = error;
            this.contacts = undefined;
        });

        
    }
    handleSuccess(event) {
        const payload = event.detail;

        const updatedRecord = event.detail.id;
    }

}