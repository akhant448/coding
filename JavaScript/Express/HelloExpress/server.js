const express = require("express");
const app = express();
const port = 8000;

const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" }
];

// req is short for request
// res is short for response
// app.use( express.json() );
// app.use( express.urlencoded({ extended: true }) );

app.get("/api/users", (req, res) => {
  res.json(users);
});

// app.post("/api/users", (req, res) => {
//   // req.body will contain the form data from Postman or from React
//   console.log(req.body);
//   // we can push it into the users array for now...
//   // later on this will be inserted into a database
//   users.push(req.body);
//   // we always need to respond with something
//   res.json( { status: "ok" } );
// });

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );