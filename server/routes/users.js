import { Router } from 'express';
import { addUser, getUsers } from '../db'

const router = Router();

router.get('/', async (req, res) => {
  try {
    res.status(200).json(await getUsers());
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/', async (req, res) => {
  try {
    res.status(201).json(await addUser(req.body));
  } catch (err) {
    res.status(500).send(err);
  }
});

//   router.patch('/', () => {//update a user});

//     router.delete('/', () => {//delete a user});

export default router;