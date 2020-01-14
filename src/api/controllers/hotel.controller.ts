import { Router, Request, Response } from 'express';
import HotelServices from '../services/hotel.services';
import { HotelSchemaDocument } from '../../database/models/hotel.schema';
import { hotelRoutes } from '../../routes/routes';

const router = Router();

router.get(hotelRoutes.listAllHotels, (request: Request, response: Response) =>{
    HotelServices.getHotelsList() // This service searches all the hotels
    .then((hotelList: Array<HotelSchemaDocument>) => {
        if (hotelList.length === 0){ // If query completed but no result found
            return response.status(204).json({status: 'succesful', message: `No hotel was found`}); // Axios can get the response body no matter NO_CONTENT response
        } else { // If 1 or more hotels found
            return response.status(200).json({ 
                status: 'succesful',
                message: `${hotelList.length} hotel(s) was found`,
                hotels: hotelList
            });
        }
    })
    .catch((error: Error) => { // If any error occurs
        console.error(`GET: ${hotelRoutes.listAllHotels}`, error);
        return response.status(500).json({status: 'error', message: 'INTERNAL_SERVER_ERROR'});
    });
});

router.get(hotelRoutes.getHotelById, (request: Request, response: Response) =>{
    const HOTEL_ID: string = request.params.id;

    if (!HOTEL_ID) {
        return response.json(400).json({status: 'error', message: 'BAD_REQUEST'});
    } else {
        HotelServices.getHotelInfo(HOTEL_ID)
        .then((hotel: HotelSchemaDocument) => {
            if (!hotel){ // If query completed but no result found
                return response.status(204).json({status: 'succesful', message: `No hotel was found`}); // Axios can get the response body no matter NO_CONTENT response
            } else {
                return response.status(200).json({ 
                    status: 'succesful',
                    message: `A hotel was found`,
                    hotel
                });
            }
        })
        .catch((error: Error) => {
            console.error(`GET: ${hotelRoutes.getHotelById}`, error);
            return response.status(500).json({status: 'error', message: 'INTERNAL_SERVER_ERROR'});
        });
    }
});



export default router; 