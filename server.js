const express = require('express');
const WebSocket = require('ws');
const fs = require('fs');

const app = express();
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });

// Function to handle file reading and streaming
function readFileAndStream(ws, fileName, sectionId) {
  const filePath = `./files/${fileName}`;
  
  // Check if the file exists
  if (fs.existsSync(filePath)) {
    const stream = fs.createReadStream(filePath);
    let wordBuffer = ''; // Buffer to accumulate words
    
    stream.on('data', (chunk) => {
      const words = (wordBuffer + chunk.toString()).split(/\s+/); // Split data into words
      wordBuffer = words.pop(); // Keep the last incomplete word for the next chunk
      
      words.forEach((word, index) => {
        setTimeout(() => {
          ws.send(JSON.stringify({ sectionId, response: word }));
        }, index * 500); // Send each word with a delay of 500ms
      });
    });

    stream.on('end', () => {
      if (wordBuffer) {
        ws.send(JSON.stringify({ sectionId, response: wordBuffer }));
      }
    });
  } else {
    ws.send(JSON.stringify({ sectionId, response: 'File not found' }));
  }
}

// WebSocket connection handling
wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (data) => {
    const { sectionId, fileName } = JSON.parse(data);
    console.log({ sectionId, fileName })
    readFileAndStream(ws, fileName, sectionId);
  });
});

server.listen(8081, () => {
  console.log('Server started on port 8081');
});
