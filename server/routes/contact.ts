import express from 'express';
import { DisplayListPage, DisplayAddPage, DisplayEditPage, ExecuteAdd, ExecuteDelete, ExecuteEdit } from '../controllers/contact';

const router = express.Router();



//Get display contact list view

router.get('/list', DisplayListPage);
router.get('/add', DisplayAddPage);
router.get('/edit/:id', DisplayEditPage);
router.get('/edit/:id', ExecuteEdit);
router.get('/add', ExecuteAdd);
router.get('/delete', ExecuteDelete);


export default router;
