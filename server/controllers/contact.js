"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecuteDelete = exports.ExecuteAdd = exports.ExecuteEdit = exports.DisplayEditPage = exports.DisplayAddPage = exports.DisplayListPage = void 0;
const contact_1 = __importDefault(require("../models/contact"));
const utils_1 = require("../utils");
function DisplayListPage(req, res, next) {
    contact_1.default.find(function (err, contactCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        console.log(contactCollection);
        res.render('index', { title: 'Contact List', page: 'contact/contact-list', contact: contactCollection, displayName: (0, utils_1.userDisplayName)(req) });
    });
}
exports.DisplayListPage = DisplayListPage;
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'Add Contact', page: 'contact/contact-edit', item: '', displayName: (0, utils_1.userDisplayName)(req) });
}
exports.DisplayAddPage = DisplayAddPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    contact_1.default.findById(id, {}, {}, (err, contactItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        ;
        console.log(contactItemToEdit);
        res.render('index', { title: 'Contact Edit', page: 'contact/contact-edit', item: contactItemToEdit, displayName: (0, utils_1.userDisplayName)(req) });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function ExecuteEdit(req, res, next) {
    let id = req.params.id;
    let updatedItem = new contact_1.default({
        "_id": id,
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "email": req.body.email
    });
    console.log(updatedItem);
    contact_1.default.updateOne({ _id: id }, updatedItem, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact/list');
    });
}
exports.ExecuteEdit = ExecuteEdit;
function ExecuteAdd(req, res, next) {
    let newItem = new contact_1.default({
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "email": req.body.email
    });
    contact_1.default.create(newItem, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        ;
        res.redirect('/contact/list');
    });
}
exports.ExecuteAdd = ExecuteAdd;
function ExecuteDelete(req, res, next) {
    let id = req.params.id;
    contact_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact/list');
    });
}
exports.ExecuteDelete = ExecuteDelete;
//# sourceMappingURL=contact.js.map