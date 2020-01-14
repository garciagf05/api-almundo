// Reusable constants
const DATABASE_USER = process.env.ALMUNDO_MONGODB_USER || '';
const DATABASE_PASSWORD = process.env.ALMUNDO_MONGODB_PASSWORD || '';
const DATABASE_HOST = process.env.ALMUNDO_MONGODB_CLUSTER || '';
const DATABASE_NAME = process.env.ALMUNDO_MONGODB_DATABASE_NAME || '';

// Object for export
export default {
    port: process.env.PORT || '',
    dataBaseUser: DATABASE_USER,
    dataBasePassword: DATABASE_PASSWORD,
    dataBaseHost: DATABASE_HOST,
    dataBaseName: DATABASE_NAME,
    dataBaseConnectionString: `mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}/${DATABASE_NAME}?retryWrites=true&w=majority`
}
