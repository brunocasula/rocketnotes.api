const { Router } = require("express");
const TagsController = require("../controllers/tags.controller");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const tagsRoutes = Router();

/* middleware */

// function myMiddleware(request, response, next) {
//   console.log("Você passou pelo Middleware");
//   console.log(request.body)

//   next();
// }

const tagsController = new TagsController();

tagsRoutes.get("/", ensureAuthenticated, tagsController.index)

module.exports = tagsRoutes;

/* params: /users/:id/:name */
/* query: /users?id=0&name=seunome */