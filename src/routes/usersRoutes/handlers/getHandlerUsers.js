const getControllerUsers = require("../controllers/getControllerUsers");
const User = require("../../../db/models/User");

const getHandlerUsers = async (req, res) => {
  try {
    console.log("entro users");
    const userId = req.query.userId;
    let users;

    if (userId) {
      users = await User.findById(userId);
      console.log("users es: ", users);
    } else {
      users = await getControllerUsers();
    }

    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getHandlerUsers;
