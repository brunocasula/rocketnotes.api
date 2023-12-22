const { Router } = require("express")
const multer = require("multer");
const UsersController = require("../controllers/users.controller")
const UserAvatarController = require("../controllers/userAvatar.controller")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const uploadConfig = require("../configs/upload");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);


/* middleware */

// function myMiddleware(request, response, next) {
//   console.log("Você passou pelo Middleware");
//   console.log(request.body)

//   const { isAdmin } = request.body;

//   if (!isAdmin) {
//     return response.json({ message: "user unauthorized" })
//   }

//   next();
// }


const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

usersRoutes.get('/', usersController.show)
usersRoutes.post('/', usersController.create)
usersRoutes.put('/', ensureAuthenticated, usersController.update)
usersRoutes.patch('/avatar', ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes;

/* params: /users/:id/:name */
/* query: /users?id=0&name=seunome */