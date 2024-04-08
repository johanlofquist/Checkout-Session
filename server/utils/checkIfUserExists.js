const fs = require("fs").promises;

const checkIfUserExists = async (user) => {
  const data = await fs.readFile("./data/users.json");
  const users = JSON.parse(data);
  user.email = user.email.toLowerCase();
  const userExists = users.find((u) => u.email === user.email);
  return userExists;
};

module.exports = checkIfUserExists;
