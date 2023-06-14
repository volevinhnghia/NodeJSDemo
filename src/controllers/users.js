const dataUser = [
  { id: 1, name: "nguyen van a", age: 23 },
  { id: 2, name: "nguyen van b", age: 23 },
  { id: 3, name: "nguyen van c", age: 23 },
];
const getAllUsers = (req, res) => {
  res.send(dataUser);
};
const getUserByID = (req, res) => {
  const userId = req.params.userId;
  console.log("userId: ", userId);
  res.send({ userId });
};
const getUserByNameAndAge = (req, res) => {
  const { name, age } = req.query;
  console.log("Name: ", name);
  console.log("Age: ", age);
  res.send({
    name,
    age,
  });
};
const createUser = (req, res) => {
  const { username, password, age } = req.body;
  res.send({
    username,
    password,
    age,
  });
};

const createManyUsers = (req, res) => {
  const data = req.body;
  for (let index of data) {
    dataUser.push(index);
  }
  console.log(dataUser);
  res.send(dataUser);
};

module.exports = {
  getAllUsers,
  getUserByID,
  getUserByNameAndAge,
  createUser,
  createManyUsers,
};
