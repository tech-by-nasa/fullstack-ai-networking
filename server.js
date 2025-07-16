const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3001 });

console.log('WebSocket server running on ws://localhost:3001');

setInterval(() => {
  const vehicles = [
    { id: 1, type: 'car', lat: 12.9716 + Math.random() / 1000, lng: 77.5946 + Math.random() / 1000 },
    { id: 2, type: 'bike', lat: 12.972 + Math.random() / 1000, lng: 77.595 + Math.random() / 1000 },
  ];
  const payload = JSON.stringify({ vehicles });
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(payload);
    }
  });
}, 2000);
