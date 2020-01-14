import Mongoose, { Connection } from 'mongoose';
import Variables from '../environment/variables';

export default class MongoDB{
    private static _instance: MongoDB;
    private _cnn: any;

    constructor() {
        this._cnn = null;
        this._createConnection();
    }

    public static get instance(){ // Instance only once (singleton)
        return this._instance || (this._instance = new this());
    }

    private async _createConnection() { // Start the connection to mongodb cluster
        console.log('Connecting to MongoDB');
        await Mongoose.connect(Variables.dataBaseConnectionString, { useNewUrlParser: true, useUnifiedTopology: true  });
        
        if (Mongoose.connection.readyState === 0){
            console.log(`Connection error`);
        } else {
            console.log(`Connected to MongoDB`);
            this._cnn = Mongoose.connection;
        }  
    }
}