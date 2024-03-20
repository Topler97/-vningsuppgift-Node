
const http = require("http");



const server2 = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-type", "text/plain");
    res.end("Hello Ovning 2");

});

const PORT = 3000
server2.listen(PORT, () => {
    console.log(`server lyssnar på port ${PORT}`);
});

console.log("server2", server2);

module.exports = {
server2,
}