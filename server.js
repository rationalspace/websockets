// server.js
const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8080 })
let i = 0;
wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message => ${message}`)
  })
  let t = setInterval(()=>{
    i++
    ws.send(`Hello! Message From Server!! ${i}`);
  },300);
})