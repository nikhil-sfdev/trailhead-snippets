import { LightningElement, track } from 'lwc';

export default class BmiCalculator extends LightningElement {

    Height;
    Weight;

    @track bmi;

    fetchHeight(event) {
        this.Height = event.target.value;
    }

    fetchWeight(event) {
        this.Weight = event.target.value;
    }

    doAction() {
        this.bmi = this.Weight / (this.Height * this.Height);
    }

    get bmiValue() {
        if (this.bmi === undefined) {
            return '';
        }
        return `Your BMI is ${this.bmi}`;

    }
}