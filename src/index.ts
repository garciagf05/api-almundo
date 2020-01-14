import Server from './server/server';
import MongoDB from './database/mongo';
import Variables from './environment/variables';
import Test from './test';
import test from './test';

// MongoDB
MongoDB.instance; // Instance the MongoDB class with connection already succesfull.

// Express
const server = Server.init(Variables.port); // An instance of Server class, pass the port environment variable
server.start(() => console.log(`Server listening in port: ${Variables.port}`)); // Start the express server
test();