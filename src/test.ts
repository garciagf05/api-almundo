import { HotelSchema } from './database/models/hotel.schema';

export default () => {
    let hotel = new HotelSchema({
        name: 'Test Hotel',
        stars: '5',
        images: [''],
        price: '120000',
        country: 'Colombia',
        state: 'Atlántico',
        city: 'Barranquilla',
        address: 'Avenida del rio',
        latitude: '1111111111111111',
        longitude: '00000000000000'
    });
    
    hotel.save((error)=>{
        if(error)
            console.log(error);
        else
            console.log('saved');
    });
};