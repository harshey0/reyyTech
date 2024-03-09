import bcrypt from "bcryptjs"

const users = [
  {
    name: "John Doe",
    email: "john@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Jane Doe",
    email: "jane@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Harshit",
    email: "harshit@email.com",
    password: bcrypt.hashSync("harshit", 10),
    isAdmin: true,
  },
]

export default users
