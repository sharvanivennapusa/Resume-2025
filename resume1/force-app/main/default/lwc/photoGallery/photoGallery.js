import { LightningElement, track } from 'lwc';
import myPhoto1 from '@salesforce/resourceUrl/Pic1';
import myPhoto2 from '@salesforce/resourceUrl/Pic2';
import myPhoto3 from '@salesforce/resourceUrl/Pic3';
import myPhoto4 from '@salesforce/resourceUrl/Pic4';


export default class PhotoGallery extends LightningElement {
    @track photos = [
        { id: 1, url: myPhoto1, alt: 'Photo 1' },
        { id: 2, url: myPhoto2, alt: 'Photo 2' },
        { id: 3, url: myPhoto3, alt: 'Photo 3' },
        { id: 4, url: myPhoto4, alt: 'Photo 4' },
        // Add more photos as needed
    ];

    connectedCallback() {
        console.log('Photos:', JSON.stringify(this.photos)); // Debug log to verify photos
    }
}