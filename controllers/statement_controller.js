import { StatementModel } from "../models/statement_model.js";

export const addStatement = async (req,res) => {
    try {
        console.log('request',req.body);
        const addData = await StatementModel.create(req.body);
        res.send("statement added");
    }
    catch (error) {
        console.log(error)
    }
};