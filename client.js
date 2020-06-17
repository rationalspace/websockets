 
const WebSocket = require('ws')
const url = 'ws://localhost:8080'
const connection = new WebSocket(url)
let j = 0; 
connection.onopen = () => {
    setInterval(()=>{
        connection.send(`Message From Client ${j}`) 
        j++;
    },500);
  
}
 
connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`)
}
 
connection.onmessage = (e) => {
  console.log(e.data)
}