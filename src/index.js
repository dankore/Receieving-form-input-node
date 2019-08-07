let http = require("http");

let myServer = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(
      `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Server</title>
          <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body>
        <form method="POST" action="/answer" class="m-32 md:m-auto md:mt-32 outline-0 md:w-1/2 border border-transparent border-grey-400 flex">
        <input class="border shadows:inset px-3 rounded w-full py-2" type="text" placeholder="Type here">
          <button class="px-4 ml-2 rounded py-2 bg-green-500 hover:bg-green-700 text-white font-bold shadow-lg">Submit</button>
        </form>
        </body>
      </html>    
      `
    );
  } else if (req.url === "/about") {
    res.end("Thank you for wanting to know more about us");
  } else {
    res.end("I am sorry, not a valid link");
  }
});

myServer.listen(3000);
