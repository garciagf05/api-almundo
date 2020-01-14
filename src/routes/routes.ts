const BASE_PATH = `/api`;
const HOTELS_PATH = `${BASE_PATH}/hotels`

export const hotelRoutes = {
    listAllHotels: `${HOTELS_PATH}/list`,
    getHotelById: `${HOTELS_PATH}/info/:id`
}