import { LightningElement, track } from 'lwc';

export default class ConditionalRender extends LightningElement {
    @track displayDiv = false;
    @track cityList = ['adad', 'dsds', 'wqefewf'];

    showDivHandler(event) {
        this.displayDiv = event.target.checked;
    }
}