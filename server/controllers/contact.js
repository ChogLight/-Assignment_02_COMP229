"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactListPage = void 0;
const contact_1 = __importDefault(require("../models/contact"));
function DisplayContactListPage(req, res, next) {
    contact_1.default.find(function (err, contactCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        console.log(contactCollection);
        res.render('index', { title: 'Contact List', page: 'contacts/contact-list', contact: contactCollection });
    });
}
exports.DisplayContactListPage = DisplayContactListPage;
;
//# sourceMappingURL=contact.js.map