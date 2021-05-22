const { User } = require("../models");

const userData = [
  {
    username: "zimmybcs",
    password: "test1",
  },
  {
    username: "zimmybcszimmy",
    password: "test2",
  },
  {
    username: "ip",
    password: "test3",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
