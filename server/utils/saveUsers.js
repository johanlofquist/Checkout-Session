const fs = require("fs").promises;

const saveUsers = async (users) => {
  await fs.writeFile("./data/users.json", JSON.stringify(users, null, 2));
};

module.exports = saveUsers;
