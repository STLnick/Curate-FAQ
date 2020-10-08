import { ObjectId } from 'mongodb';
import client from './client';

/* * Users * */
export const addUser = async (newUser) => {
  try {
    return await client.db('curate').collection('users')
      .insertOne(newUser);
  } catch (err) {
    throw new Error(err);
  }
}

export const deleteUser = async ({ _id }) => {
  try {
    return await client.db('curate').collection('users')
      .deleteOne({ _id: ObjectId(_id) });
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

/* * FAQs * */
export const addFaq = async (newFaq) => {
  try {
    return await client.db('curate').collection('faq')
      .insertOne(newFaq);
  } catch (err) {
    throw new Error(err);
  }
}

export const deleteFaq = async ({ _id }) => {
  try {
    return await client.db('curate').collection('faq')
      .deleteOne({ _id: ObjectId(_id) });
  } catch (err) {
    throw new Error(err);
  }
}

export const getFaqs = async () => {
  try {
    return await client.db('curate').collection('faq')
      .find().toArray();
  } catch (err) {
    throw new Error(err);
  }
}

export const updateFaq = async (_id, propsToUpdate) => {
  try {
    return await client.db('curate').collection('faq')
      .findOneAndUpdate({ _id: ObjectId(_id) }, { $set: { ...propsToUpdate } })
  } catch (err) {
    throw new Error(err);
  }
}
