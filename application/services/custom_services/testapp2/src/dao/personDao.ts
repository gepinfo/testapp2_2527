import * as mongoose from 'mongoose';
import personModel from '../models/daomodels/person';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class personDao {
    private person = personModel;

    

    constructor() { }
    
    public async Delete(personId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into personDao.ts: Delete');

    

    
    
    
    this.person.findByIdAndRemove(personId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from personDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(personData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into personDao.ts: Update');

    

    
    
    
    this.person.findOneAndUpdate({ _id: personData._id }, personData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from personDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetEntityById(personId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into personDao.ts: GetEntityById');

    

    
    
    
    this.person.findById(personId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from personDao.ts: GetEntityById');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into personDao.ts: GetAllValues');

    

    
    
    
    this.person.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from personDao.ts: GetAllValues');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(personData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into personDao.ts: Create');

    let temp = new personModel(personData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from personDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(personData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into personDao.ts: GetNounCreatedBy');

    

    
    
    
    this.person.aggregate(([
                        { $match: { $and: [{ created_by: personData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from personDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}