const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");
const bcrypt = require("bcrypt");

const databasePath = path.join(__dirname, "userData.db");

const app = express();

app.use(express.json());

let database = null;

const initializeDbAndServer = async () => {
  try {
    database = await open({
      filename: databasePath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () =>
      console.log("Server Running at http://localhost:3000/")
    );
  } catch (error) {
    console.log(`DB Error: ${error.message}`);
    process.exit(1);
  }
};

initializeDbAndServer();

// const convertToObject = (object) =>{
//     return{
//         username:object.username,
//         name:object.name,
//         password:object.password,
//         gender:object.gender,
//         location:object.location
//     }
// }

app.post("/register", async (request, response) => {
  const { username, name, password, gender, location } = request.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const selectUserQuery = `select * from user where username='${username}';`;
  const dbUser = await database.get(selectUserQuery);
  if (dbUser === undefined) {
    const createQuery = `insert into user(username,name,password,gender,location) values
        ('${username}','${name}','${hashedPassword}','${gender}','${location}');`;
    if (password.length <= 5) {
      response.status(400);
      response.send("Password is too short");
    } else {
      await database.run(createQuery);

      response.send(" User created successfully");
    }
  } else {
    response.status(400);
    response.send("User already exists");
  }
});

app.post("/login", async (request, response) => {
  const { userName, password } = request.body;
  const selectQuery = `select * from user where username='${userName}';`;
  const dbUser = await database.get(selectQuery);
  if (dbUser === undefined) {
    response.status(400);
    response.send("Invalid user");
  } else {
    const isPasswordCorrect = await bcrypt.compare(password, dbUser.password);
    if (isPasswordCorrect === true) {
      response.status(200);
      response.send("Login success!");
    } else {
      response.status(400);
      response.send("Invalid password");
    }
  }
});

app.put("/change-password", async (request, response) => {
  const { username, oldPassword, newPassword } = request.body;
  const selectQuery = `select * from user where username ='${username}';`;
  const dbuSER = database.get(selectQuery);
  if (dbuSER === undefined) {
    response.status(400);
    response.send("Invalid user");
  } else {
    const isPasswordMatched = await bcrypt.compare(
      oldPassword,
      dbuSER.password
    );
    if (isPasswordMatched == true) {
      if (newPassword.length >= 5) {
        const authenticPass = await bcrypt.hash(newPassword, 10);
        const updatePassQuery = `update user set password = '${authenticPass} where username='${username}';`;
        const user = database.run(updatePassQuery);
        response.send("Password updated");
      } else {
        response.status(400);
        response.send("Password is too short");
      }
    } else {
      response.status(400);
      response.send("Invalid current password");
    }
  }
});

module.exports = app;
