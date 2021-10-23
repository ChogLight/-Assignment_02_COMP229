"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayRegisterPage = exports.DisplayLoginPage = exports.DisplayContactPage = exports.DisplayServicesPage = exports.DisplayProjectsPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}
exports.DisplayHomePage = DisplayHomePage;
;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About me', page: 'about' });
}
exports.DisplayAboutPage = DisplayAboutPage;
;
function DisplayProjectsPage(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects' });
}
exports.DisplayProjectsPage = DisplayProjectsPage;
;
function DisplayServicesPage(req, res, next) {
    res.render('index', { title: 'Services', page: 'services' });
}
exports.DisplayServicesPage = DisplayServicesPage;
;
function DisplayContactPage(req, res, next) {
    res.render('index', { title: 'Contact me', page: 'contact' });
}
exports.DisplayContactPage = DisplayContactPage;
;
function DisplayLoginPage(req, res, next) {
    res.render('index', { title: 'Login', page: 'auth/login' });
}
exports.DisplayLoginPage = DisplayLoginPage;
;
function DisplayRegisterPage(req, res, next) {
    res.render('index', { title: 'Register', page: 'auth/register' });
}
exports.DisplayRegisterPage = DisplayRegisterPage;
;
//# sourceMappingURL=index.js.map