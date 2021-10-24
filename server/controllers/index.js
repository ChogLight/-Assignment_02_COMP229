"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactPage = exports.DisplayServicesPage = exports.DisplayProjectsPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
const utils_1 = require("../utils");
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: (0, utils_1.userDisplayName)(req) });
}
exports.DisplayHomePage = DisplayHomePage;
;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About me', page: 'about', displayName: (0, utils_1.userDisplayName)(req) });
}
exports.DisplayAboutPage = DisplayAboutPage;
;
function DisplayProjectsPage(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects', displayName: (0, utils_1.userDisplayName)(req) });
}
exports.DisplayProjectsPage = DisplayProjectsPage;
;
function DisplayServicesPage(req, res, next) {
    res.render('index', { title: 'Services', page: 'services', displayName: (0, utils_1.userDisplayName)(req) });
}
exports.DisplayServicesPage = DisplayServicesPage;
;
function DisplayContactPage(req, res, next) {
    res.render('index', { title: 'Contact me', page: 'contact', displayName: (0, utils_1.userDisplayName)(req) });
}
exports.DisplayContactPage = DisplayContactPage;
;
//# sourceMappingURL=index.js.map