import express from 'express';
import { createBeer } from '../controllers/createBeer';
import { listBeers } from '../controllers/listBeer'
import { getBeerById } from '../controllers/getBeerById';
import { updateBeer } from '../controllers/updateBeer';
import { deleteBeer } from '../controllers/deleteBeer';



const router = express.Router();


router.post('/beers', createBeer);
router.get('/beers', listBeers);
router.get('/beers/:id', getBeerById);
router.put('/beers/:id', updateBeer);
router.delete('/beers/:id', deleteBeer);


export default router;