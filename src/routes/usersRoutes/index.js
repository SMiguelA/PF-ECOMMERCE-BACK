const { Router } = require("express");
const jwt = require("jsonwebtoken");
const getHandlerUsers = require("./handlers/getHandlerUsers");
const postHandlerUsers = require("./handlers/postHandlerUsers");
const deleteHandlerUsers = require("./handlers/deleteHandlerUsers");
const getIdHandlerUsers = require("./handlers/getIdHandlerUsers");
const putHandlerUsers = require("./handlers/putHandlerUsers");
const signupHandlerUsers = require("./handlers/signupHandlerUsers");
const loginHandlerUsers = require("./handlers/loginHandlerUsers");
const getIdOrdersHandlerUsers = require("./handlers/getIdOrdersHandlerUsers");
const checkGoogleEmailHandler = require("./handlers/loginGoogle");

const User = require("../../db/models/User");

const api = Router();

/**
 * @openapi
 * /users:
 *   get:
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
api.get("/", getHandlerUsers);

// ? Ruta GET por id para Users
api.get("/:id", getIdHandlerUsers);

// ? Ruta POST Para Users
api.post("/", postHandlerUsers);

api.get("/:id/orders", getIdOrdersHandlerUsers);

// ? Ruta PUT para Users
api.put("/:id", putHandlerUsers);

// ? Ruta DELETE para Users
api.delete("/:id", deleteHandlerUsers);

// Ruta para sign up
api.post("/signup", signupHandlerUsers);

// Ruta para login
api.post("/login", loginHandlerUsers);

//Ruta de Google
api.post("/check-google-email", checkGoogleEmailHandler);

// //get friends
// api.get("/friends/:userId", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.userId);
//     const friends = await Promise.all(
//       user.followings.map((friendId) => {
//         return User.findById(friendId);
//       })
//     );
//     let friendList = [];
//     friends.map((friend) => {
//       const { _id, name, profilePicture } = friend;
//       friendList.push({ _id, name, profilePicture });
//     });
//     res.status(200).json(friendList);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = api;
