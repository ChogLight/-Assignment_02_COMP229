"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayListPage = void 0;
const contact_1 = __importDefault(require("../models/contact"));
function DisplayListPage(req, res, next) {
    contact_1.default.find(function (err, contactCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Contact List', page: 'contact/contact-list', contact: contactCollection });
    });
}
exports.DisplayListPage = DisplayListPage;
//# sourceMappingURL=contact.js.map