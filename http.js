const http = require('http');

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.write("As-salamu Alaikum. ");
        res.write("Jajhakallahu Khoiraa");
        res.end();
    } else if(req.url === '/about'){
        res.write("Ahlan Wa Sahlan.");
        res.end();
    } else{
        res.write("Afwan.");
        res.end();
    }
});

server.listen(3000);

console.log('listening on port 3000');

//zisan