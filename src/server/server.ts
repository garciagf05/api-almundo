import express = require('express');
import path = require('path');
import cors from 'cors';

export default class Server{
    public app: express.Application; //  This var will contain express application
    public port: string; // Port number, from environmet variable

    constructor(port: string){ // The port is received from index.js
        this.port = port;
        this.app = express();
    }

    public static init(port: string){ //Create a new server class an return to the index.js
        return new Server(port);
    }

    private _publicFolder(){
        const PUBLIC_PATH = path.resolve(__dirname, '../public');
        this.app.use(express.static(PUBLIC_PATH));
    }

    private _getCorsOptions():cors.CorsOptions{ // Thus method return cors option object to apply as middleware in express application
        const options: cors.CorsOptions = {
            allowedHeaders: [
                "Origin",
                "X-Requested-With",
                "Content-Type",
                "Accept",
                "X-Access-Token",
                "Authorization"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: '*',
            preflightContinue: false
          };

          return options;
    }

    public start(callback: VoidFunction){ // Start an express server an apply middlewares as public folder and cors
        const CORS_OPTIONS = this._getCorsOptions();
        this.app.listen(this.port, callback);  
        this.app.use(cors(CORS_OPTIONS));
        this._publicFolder();
    }
}