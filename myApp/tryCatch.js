const { response } = require("express");
const express = require("express");
const { request } = require("http");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const app = express();
const dbPath = path.join(__dirname, "goodreads.db");
let db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
  } catch (e) {
    console.log(`DB Error ${e.message}`);
    process.exit(1);
  }
};
initializeDBAndServer();

app.get("/books/", async (request, response) => {
  const getBooks = `
    select * from book where price>=1000 order by book_id;`;
  const booksArray = await db.all(getBooks);
  response.send(booksArray);
});

app.listen(4001, () => {
  console.log("Server is running successfully.");
});
