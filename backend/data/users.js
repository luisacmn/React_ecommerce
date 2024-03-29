import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "John User",
    email: "john@example.com",
    password: bcrypt.hashSync("12345", 10),
  },
  {
    name: "Jane User",
    email: "jane@example.com",
    password: bcrypt.hashSync("12345", 10),
  },
];

export default users;
