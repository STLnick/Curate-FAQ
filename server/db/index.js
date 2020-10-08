import { ObjectId } from 'mongodb';
import client from './client';

export const addUser = async (newUser) => {
  try {
    return await client.db('curate').collection('users')
      .insertOne(newUser);
  } catch (err) {
    throw new Error(err);
  }
}

export const getUsers = async () => {
  try {
    return await client.db('curate').collection('users')
      .find().toArray();
  } catch (err) {
    throw new Error(err);
  }
}

export const updateUser = async (_id, propsToUpdate) => {
  try {
    return await client.db('curate').collection('users')
      .findOneAndUpdate({ _id: ObjectId(_id) }, { $set: { ...propsToUpdate } })
  } catch (err) {
    throw new Error(err);
  }
}
