let express = require("express");
var bodyParser = require("body-parser");

let myServer = express();

myServer.use(bodyParser.urlencoded({ extended: false }));
myServer.use(bodyParser.json());

myServer.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>Server</title>
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    </head>
    <body class="bg-gray-200">
    <div class="m-32 md:w-1/2 md:m-auto md:mt-32">
    <h1 class="text-center my-6 text-2xl"> What is the color of grass?</h1>
    <form method="POST" action="/answer" class="outline-0 border border-transparent border-grey-400 flex">
    <input nameColor="green" autocomplete="off" class="border shadows:inset px-3 rounded w-full py-2" type="text" placeholder="Type here">
      <button class="px-4 ml-2 rounded py-2 bg-green-500 hover:bg-green-700 text-white font-bold shadow-lg">Submit</button>
    </form>
    </div>
    </body>
  </html>    
`);
});

myServer.post("/answer", (req, res) => {
  console.log(req.body);
  if (req.body.nameColor === "green") {
    res.send("You are right!");
  } else {
    res.send("Sorry, not the correct answer");
  }
});

myServer.get("/answer", (req, res) => {
  res.send("Are you lost or something?");
});

myServer.listen(3000);
