const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGODB_URI;

export const client = new MongoClient('mongodb+srv://store4real:vroHvhPz7KfO1zLy@store4real.gba4hau.mongodb.net/?retryWrites=true&w=majority', {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});