import { LightningElement, api } from 'lwc';

export default class RoomInfo extends LightningElement {
    @api roomInfoObj;

    @api showRoom = false;
}