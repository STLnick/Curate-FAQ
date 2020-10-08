import { Router } from 'express';
import { getUsers } from '../db'

const router = Router();

router.get('/', async (req, res) => {
  try {
    res.status(200).json(await getUsers());
  } catch (err) {
    res.status(500).send(err);
  }
});

// router.post('/', () => {//add a user});

//   router.patch('/', () => {//update a user});

//     router.delete('/', () => {//delete a user});

export default router;