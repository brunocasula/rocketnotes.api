const { Router } = require("express")
const NotesController = require("../controllers/notes.controller");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const notesRoutes = Router();

/* middleware */

// function myMiddleware(request, response, next) {
//   console.log("Você passou pelo Middleware");
//   console.log(request.body)

//   next();
// }

const notesController = new NotesController();

notesRoutes.use(ensureAuthenticated);

notesRoutes.get('/', notesController.index)
notesRoutes.post('/', notesController.create)
notesRoutes.get('/:id', notesController.show)
notesRoutes.delete('/:id', notesController.delete)

module.exports = notesRoutes;

/* params: /users/:id/:name */
/* query: /users?id=0&name=seunome */