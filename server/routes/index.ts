import express from 'express';
import { DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayProjectsPage, DisplayServicesPage } from '../controllers';

const router = express.Router();

/* GET home page. */
router.get('/', DisplayHomePage);
router.get('/home', DisplayHomePage);
/* GET about me page. */
router.get('/about', DisplayAboutPage);
/* GET projects page. */
router.get('/projects', DisplayProjectsPage)
/* GET services page. */
router.get('/services', DisplayServicesPage);
/* GET contact me page. */
router.get('/contact', DisplayContactPage);
export default router;
