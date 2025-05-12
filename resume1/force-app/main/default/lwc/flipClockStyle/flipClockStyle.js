import { LightningElement, track } from 'lwc';
export default class FlipClockStyle extends LightningElement {
 @track days = 0;
    @track hours = 0;
    @track minutes = 0;
    @track seconds = 0;

    weddingDate = new Date('2024-08-22T10:00:00');

    connectedCallback() {
        this.updateCountdown();
        setInterval(() => this.updateCountdown(), 1000);
    }

    updateCountdown() {
        const now = new Date();
        const timeDifference = this.weddingDate - now;

        this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    }
}