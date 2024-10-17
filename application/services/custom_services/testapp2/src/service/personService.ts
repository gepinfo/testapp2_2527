import { Request, Response } from 'express';
import {personDao} from '../dao/personDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';













let person = new personDao();

export class personService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into personService.ts: Delete')
     let  personId = req.params.id;
     person.Delete(personId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from personService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into personService.ts: Update')
     let  personData = req.body;
     person.Update(personData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from personService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  GetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into personService.ts: GetEntityById')
     let  personId = req.params.id;
     person.GetEntityById(personId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from personService.ts: GetEntityById')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into personService.ts: GetAllValues')
     
     person.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from personService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into personService.ts: Create')
     let  personData = req.body;
     person.Create(personData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from personService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into personService.ts: GetNounCreatedBy')
     let  personData = { created_by: req.query.createdby };
     person.GetNounCreatedBy(personData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from personService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}