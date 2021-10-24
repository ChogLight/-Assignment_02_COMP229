import {Request} from 'express';
export function userDisplayName(req: Request){
    if(req.user){
        let user = req.user as UserDocument;
        return user.displayName.toString();
    }
}