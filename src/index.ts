import Server from './server/server';
import MongoDB from './database/mongo';
import Variables from './environment/variables';
import HotelController from './api/controllers/hotel.controller'

// MongoDB
MongoDB.instance; // Instance the MongoDB class with connection already succesfull.

// Express
const server = Server.init(Variables.port); // An instance of Server class, pass the port environment variable

server.app.use(HotelController); // Add route to express server

server.start(() => console.log(`Server listening in port: ${Variables.port}`)); // Start the express server