import { client } from "./client";

export async function getItems() {
  try {
    const db = client.db('store');
    const getdata = await db.collection('items').find({}).toArray();

    const items = getdata.map(item => ({
      ...item,
      _id: item._id.toString(),
      createdAt: item.createdAt instanceof Date ? item.createdAt : new Date(item.createdAt)
    }));

    return items;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error; // Rethrow the error to propagate it to the caller
  }
}

export async function getCartItems(user) {
  try {
    const db = client.db('user');
    const cartItems = await db.collection('cart').aggregate([
      { $match: { user: user } },
      { $project: { name: 1, price: 1, image: 1, username: 1, qty: 1, _id: 0, imgFile: 1 } }
    ]).toArray();

    return cartItems;
  } catch (error) {
    console.error('Error fetching cart items:', error);
    throw error; // Rethrow the error to propagate it to the caller
  }
}
