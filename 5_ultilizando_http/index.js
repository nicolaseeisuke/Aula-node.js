const {createServer} = require('http');

let server = createServer((request,response) => {
    response.writeHead(200, {"content-Type": "text/html"});
    response.write(`
    <h1>Hello word</h1>
    <p>Primeira página com node.js</p>
    `)

    response.end
})


server.listen(8000);
console.log("Ouvindo a porta 8000");