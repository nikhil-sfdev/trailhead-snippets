import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track currentResult;
    @track previousResult = [];
    @track showResult = false;

    firstnumber;
    secondnumber;

    numberchangeHandler(event) {
        const inboxName = event.target.name;

        if (inboxName === 'firstNumber') {
            this.firstnumber = event.target.value;
        } else {
            this.secondNumber = event.target.value;
        }

    }

    addHandler() {
        const firstN = parseInt(this.firstnumber);
        const secondN = parseInt(this.secondNumber);

        //this.currentResult = 'Result Of ' + firstN + '+' + secondN + '= ' +(firstN+secondN);
        this.currentResult = `Result Of ${firstN}-${secondN} is ${firstN + secondN}`;
        this.previousResult.push(this.currentResult);
    }

    subHandler() {
        const firstN = parseInt(this.firstnumber);
        const secondN = parseInt(this.secondNumber);

        //this.currentResult = 'Result Of ' + firstN + '+' + secondN + '= ' +(firstN-secondN);
        this.currentResult = `Result Of ${firstN}-${secondN} is ${firstN - secondN}`;
        this.previousResult.push(this.currentResult);
    }

    multiplyHandler() {
        const firstN = parseInt(this.firstnumber);
        const secondN = parseInt(this.secondNumber);

        //this.currentResult = 'Result Of ' + firstN + '+' + secondN + '= ' +(firstN*secondN);
        this.currentResult = `Result Of ${firstN}-${secondN} is ${firstN * secondN}`;
        this.previousResult.push(this.currentResult);
    }

    divisionHandler() {
        const firstN = parseInt(this.firstnumber);
        const secondN = parseInt(this.secondNumber);

        //this.currentResult = 'Result Of ' + firstN + '+' + secondN + '= ' +(firstN/secondN);
        this.currentResult = `Result Of ${firstN}-${secondN} is ${firstN / secondN}`;
        this.previousResult.push(this.currentResult);
    }

    showPreviosToggel(event) {
        this.showResult = event.target.checked;
    }


}