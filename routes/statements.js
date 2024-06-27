import { Router } from "express";
import { addStatement } from "../controllers/statement_controller.js";

// create a route
const statementsRouter = Router();


// define routes
// statementsRouter.get('/', (req, res ) => {
//     res.json( "All statements")
// });

statementsRouter.post('/statement', addStatement)

export default statementsRouter;