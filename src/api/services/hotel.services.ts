import { HotelSchemaDocument, HotelSchema } from '../../database/models/hotel.schema';

export default class HotelServices {
    constructor() {}

    public static getHotelsList(): Promise<Array<HotelSchemaDocument>>{
        return new Promise((resolve, reject) => {
            try{
                HotelSchema.find((error: Error, hotelsList: Array<HotelSchemaDocument>) => {
                    if (error){
                        reject(error);
                    } else{
                        resolve(hotelsList);
                    }
                });
            } catch(error) {
                reject(error);
            }
        });
    }

    public static getHotelInfo(hotelId: string): Promise<HotelSchemaDocument> {
        return new Promise(async (resolve, reject) => {
            try{
                let hotel = await HotelSchema.findById(hotelId) || undefined;
                resolve(hotel);
            }catch(error) {
                reject(error)
            }
        });
    }
}