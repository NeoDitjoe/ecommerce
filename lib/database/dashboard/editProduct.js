import { client } from "../client";

export default async function editProduct(product) {
  const db = client.db('store');

  const updateFields = {};

  if (product.name) updateFields.name = product.name;
  if (product.price) updateFields.price = product.price;
  if (product.category) updateFields.category = product.category;
  if (product.file) updateFields.file = product.file;
  if (product.image) updateFields.image = product.image;
  if (product.categoryList) updateFields.categoryList = product.categoryList;
  if (product.description) updateFields.description = product.description;
  if (product.stock) updateFields.stock = product.stock;
  if (product.brand) updateFields.brand = product.brand;

  console.log(product)


  await db.collection('items').updateOne({name: product.name}, {$set : updateFields})

}
