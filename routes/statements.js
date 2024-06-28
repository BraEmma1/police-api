import { Router } from "express";
import { addStatement, deleteStatement, getStatement, getStatements, updatStatement } from "../controllers/statement_controller.js";

// create a route
const statementsRouter = Router();


// define routes
statementsRouter.get('/statement',getStatements);

statementsRouter.post('/statement', addStatement)
statementsRouter.get('/statement/:id', getStatement)
statementsRouter.patch('/statement/:id/:caseStatus', updatStatement)

statementsRouter.delete('/statement/:id', deleteStatement)
export default statementsRouter;