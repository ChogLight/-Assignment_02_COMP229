import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', function(req:express.Request, res:express.Response, next:express.NextFunction) {
  res.render('index', { title: 'Home', page:'home' });
});
router.get('/home', function(req:express.Request, res:express.Response, next:express.NextFunction) {
  res.render('index', { title: 'Home', page:'home' });
});
/* GET about me page. */
router.get('/about', function(req:express.Request, res:express.Response, next:express.NextFunction) {
  res.render('index', { title: 'About me', page:'about' });
});
/* GET projects page. */
router.get('/projects', function(req:express.Request, res:express.Response, next:express.NextFunction) {
  res.render('index', { title: 'Projects', page:'projects' });
});
/* GET services page. */
router.get('/services', function(req:express.Request, res:express.Response, next:express.NextFunction) {
  res.render('index', { title: 'Services', page: 'services' });
});
/* GET contact me page. */
router.get('/contact', function(req:express.Request, res:express.Response, next:express.NextFunction) {
  res.render('index', { title: 'Contact me', page: 'contact' });
});
export default router;
