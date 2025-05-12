import { LightningElement, track } from 'lwc';

export default class VenueMap extends LightningElement {
    @track mapMarkers = [
        {
            location: {
                Latitude: 10.7789119,
                Longitude: 79.1562453
            },
            title: 'Gurudayal Sharma Marriage Hall',
            description: '1030/4, SH 99A, Cholan Nagar, Evergreen Nagar, Thanjavur, Tamil Nadu 613001'
        }
    ];
    
    @track mapCenter = {
        location: {
            Latitude: 10.7789119,
            Longitude: 79.1562453
        }
    };
}