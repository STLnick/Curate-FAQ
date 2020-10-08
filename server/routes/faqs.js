import { Router } from 'express';
import { addFaq, deleteFaq, getFaqs, updateFaq } from '../db'

const router = Router();

router.get('/', async (req, res) => {
  try {
    res.status(200).json(await getFaqs());
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/', async (req, res) => {
  try {
    res.status(201).json(await addFaq(req.body));
  } catch (err) {
    res.status(500).send(err);
  }
});

router.patch('/:_id', async (req, res) => {
  try {
    res.status(201).json(await updateFaq(req.params._id, req.body));
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete('/', async (req, res) => {
  try {
    res.status(204).json(await deleteFaq(req.body));
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;