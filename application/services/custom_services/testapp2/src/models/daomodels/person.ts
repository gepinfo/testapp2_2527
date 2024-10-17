
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const personSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   personid: { type: String },
   name: { type: String },
   age: { type: String },
   address: { type: String }
})

const personModel = mongoose.model('person', personSchema, 'person');
export default personModel;
