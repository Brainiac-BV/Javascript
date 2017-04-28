var net = require('net');
var chatServer = net.createServer();
var clientList = [];

chatServer.on('connection', function (client) {
    client.name = client.remoteAddress + ':' + client.port;
    client.write('Welcome' + client.name + '\n');
    client.write('maybe\n');

    clientList.push(client);

    client.on('data', function (data){
        for(var i=0; i < clientList.length; i+= 1) {
            if(client !== clientList[i]) {
                clientList[i].write(data)
            }

        }
    })

});

chatServer.listen(8123);