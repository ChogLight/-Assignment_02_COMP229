import express from 'express';
import contactModel from '../models/contact'
export function DisplayContactListPage(req:express.Request, res:express.Response, next:express.NextFunction) {
    contactModel.find(function(err, contactCollection){
        if(err){
            console.error(err);
            res.end(err);
        }
        console.log(contactCollection);
        res.render('index', {title:'Contact List', page: 'contacts/contact-list', contact: contactCollection})
    })
};