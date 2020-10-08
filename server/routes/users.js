import { Router } from 'express';
import { addUser, getUsers, updateUser } from '../db'

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

router.patch('/:_id', async (req, res) => {
  try {
    res.status(201).json(await updateUser(req.params._id, req.body));
  } catch (err) {
    res.status(500).send(err);
  }
});

//     router.delete('/', () => {//delete a user});

export default router;