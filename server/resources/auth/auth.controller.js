const checkIfUserExists = require("../../utils/checkIfUserExists");
const fetchUsers = require("../../utils/fetchUsers");
const saveUsers = require("../../utils/saveUsers");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  let { email, password } = req.body;
  email = email.toLowerCase();

  const userExists = await checkIfUserExists(req.body);
  if (userExists) {
    return res.status(200).json("This email already exists");
  }
  const users = await fetchUsers();
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    email,
    password: hashedPassword,
  };

  users.push(newUser);
  await saveUsers(users);
  res.status(200).json("Account created");
};

const login = async (req, res) => {
  const { password } = req.body;
  const userExists = await checkIfUserExists(req.body);
  if (!userExists) {
    return res.status(400).json("This user doesn't exist");
  }

  if (!(await bcrypt.compare(password, userExists.password))) {
    return res.status(400).json("Wrong password");
  }

  req.session.user = userExists;
  res.status(200).json(userExists);
};

const authorize = (req, res) => {
  if (!req.session.user) {
    return res.status(400).json("No session found");
  }
  res.status(200).json(req.session.user.email);
};

const logout = (req, res) => {
  req.session = null;
  res.status(200).json("Logged out");
};

module.exports = { createUser, login, authorize, logout };
