import { Document, Schema, model } from 'mongoose';

export class HotelSchemaClass{

    private name: string;
    private stars: string;
    private images: Array<string>;
    private price: string;
    private country: string;
    private state: string;
    private city: string;
    private address: string;
    private latitude: string;
    private longitude: string;

    constructor(newSchema: {
        name: string,
        stars: string,
        images: Array<string>,
        price: string,
        country: string,
        state: string,
        city: string,
        address: string,
        latitude: string,
        longitude: string
    }){
        this.name = newSchema.name;
        this.stars = newSchema.stars;
        this.images = newSchema.images;
        this.price = newSchema.price;
        this.country = newSchema.country;
        this.state = newSchema.state;
        this.city = newSchema.city;
        this.address =  newSchema.address;
        this.latitude = newSchema.latitude;
        this.longitude = newSchema.longitude;
    }
}

const SCHEMA = new Schema({
    name: {
        type: String,
        required: [true, 'Hotel name is required']
    },
    stars: {
        type: String,
        required: [true, 'Hotel rating is required']
    },
    images: {
        type: Array,
        required: [true, 'Hotel images are required']
    },
    price: {
        type: String,
        required: [true, 'Hotel price is required']
    },
    country: {
        type: String,
        required: [true, 'Hotel country is required']
    },
    state: {
        type: String,
        required: [true, 'Hotel state is required']
    },
    city: {
        type: String,
        required: [true, 'Hotel city is required'],
    },
    address: {
        type: String,
        required: [true, 'Hotel address is required'],
    },
    latitude: {
        type: String,
        required: [true, 'Hotel latitude coord is required'],
    },
    longitude: {
        type: String,
        required: [true, 'Hotel longitude coord is required'],
    },
});

export interface HotelSchemaDocument extends HotelSchemaClass, Document { }
export const HotelSchema = model<HotelSchemaDocument>('Hotels', SCHEMA)