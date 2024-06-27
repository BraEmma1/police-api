import { Schema, model } from "mongoose";



const statementSchema = new Schema({
     statementId:{type:String},
     incidentType:{enum:['criminal', 'non-criminal']},
     civilianStatus:{enum:['suspect', 'complaint' , 'witness']},
     statement:{type:String},
     caseStatus:{enum:['open','close']},
    //  civilianId:{type:String},
     createdAt:{type:Date, default:Date.now},
     updatedAt:{ type:Date, default:Date.now}


});


export const StatementModel = model ('statement', statementSchema);