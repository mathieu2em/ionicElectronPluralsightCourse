export interface Address {
    description?: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    zipcode: string;
    addressId?: string; // Unique ID set in pinpoint
    placeId?: string; // Unique Id from Google
    addressStatus?: 'GEOCODED' | 'PROVISIONED'; // Status in BE API
    latitude?: string;
    longitude?: string;
}
