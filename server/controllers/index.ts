import express from 'express';
import { userDisplayName } from '../utils';

export function DisplayHomePage(req:express.Request, res:express.Response, next:express.NextFunction) {
    res.render('index', { title: 'Home', page:'home', displayName: userDisplayName(req) })};

export function DisplayAboutPage(req:express.Request, res:express.Response, next:express.NextFunction) {
    res.render('index', { title: 'About me', page:'about', displayName: userDisplayName(req) })};

export function DisplayProjectsPage(req:express.Request, res:express.Response, next:express.NextFunction) {
    res.render('index', { title: 'Projects', page:'projects', displayName: userDisplayName(req) })};


export function DisplayServicesPage(req:express.Request, res:express.Response, next:express.NextFunction) {
    res.render('index', { title: 'Services', page: 'services', displayName: userDisplayName(req) });
  };

export function DisplayContactPage(req:express.Request, res:express.Response, next:express.NextFunction) {
    res.render('index', { title: 'Contact me', page: 'contact', displayName: userDisplayName(req) });
  };
