// Nerdplay Main script
var http = require("http");
var fs = require("fs");
var page = `<html>
<head>
<title>Nerdplay!</title>
</head>
<body>

</body>
</html>
`

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   response.writeHead(200, {'Content-Type': 'text/html'});
   response.end(page);
}).listen(3000);

console.log("Now you can access Nerdplay through port 3000 and localhost or device IP (device that runs Nerdplay)");
