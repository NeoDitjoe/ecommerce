const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGODB_URI;

export const client = new MongoClient('mongodb+srv://4store:NSVmJpmhHGo65WpU@clothingstore.jyzp0oz.mongodb.net/?retryWrites=true&w=majority', {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});