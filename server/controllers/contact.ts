
import express from 'express';
import contactModel from '../models/contact';
import { userDisplayName } from '../utils';

//Display page list
export function DisplayListPage(req:express.Request, res:express.Response, next:express.NextFunction) {
    contactModel.find(function(err, contactCollection){
        if(err){
            console.error(err);
            res.end(err);
        }
        console.log(contactCollection);
        res.render('index', {title:'Contact List', page: 'contact/contact-list', contact: contactCollection, displayName: userDisplayName(req)})
    })
}

//Display add page
export function DisplayAddPage(req:express.Request, res:express.Response, next:express.NextFunction){
    res.render('index', {title:'Add Contact', page: 'contact/contact-edit', item:'', displayName: userDisplayName(req)});
}

//Display Edit Page

export function DisplayEditPage(req:express.Request, res:express.Response, next:express.NextFunction){
    let id = req.params.id;
    contactModel.findById(id, {}, {}, (err, contactItemToEdit) => {
        if(err) {
            console.error(err);
            res.end(err);
        };
        console.log(contactItemToEdit);
        res.render('index', {title: 'Contact Edit', page: 'contact/contact-edit', item: contactItemToEdit, displayName: userDisplayName(req)})
    })
}

// Execute Edit Page
export function ExecuteEdit(req: express.Request, res: express.Response, next: express.NextFunction){
    let id = req.params.id;

    let updatedItem = new contactModel({
        "_id": id,
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "email": req.body.email
    });
    console.log(updatedItem);
    contactModel.updateOne({ _id: id }, updatedItem, {}, (err) => {
        if(err) {
            console.error(err);
            res.end(err);
        }

        res.redirect('/contact/list');
    })
}

// Execute Add Page
export function ExecuteAdd(req:express.Request, res:express.Response, next:express.NextFunction): void{

    let newItem = new contactModel({
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "email": req.body.email
    });
    contactModel.create(newItem, (err:any) => {
        if(err){
            console.error(err);
            res.end(err);

        };

        res.redirect('/contact/list');
    })

}

//Execute Delete Page
export function ExecuteDelete(req:express.Request, res:express.Response, next:express.NextFunction){

    let id = req.params.id;

    contactModel.remove({ _id: id }, (err) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/contact/list');
    })
}
