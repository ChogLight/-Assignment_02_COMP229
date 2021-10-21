import express from 'express';
import { DisplayListPage } from '../controllers/contact';

const router = express.Router();


/*



*/


//Get display contact list view

router.get('/list', DisplayListPage);







export default router;
