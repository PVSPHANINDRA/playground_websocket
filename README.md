# WebSocket File Streaming Project

This project demonstrates a simple implementation of WebSocket-based file streaming between a Node.js server and a client.

## Features

- Real-time streaming of text files from the server to the client using WebSocket.
- Ability to request and stream multiple files simultaneously from the client.
- Responsive design allowing for seamless interaction across various devices.

## Prerequisites

- Node.js installed on your machine.
- Basic understanding of WebSocket communication.

## Getting Started

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/PVSPHANINDRA/playground_websocket.git
    ```

2. Checkout the current branch:

   ```
   git checkout handle-multiple-messages
   ```

2. Navigate to the project directory:

    ```bash
    cd playground_websocket
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the server:

    ```bash
    node server.js
    ```

2. Open `client.html` in a web browser to access the client application.

3. Click the "Read File" button to send the file requests to the server. Currently we are reading only one file(dummy.txt in files folder)

4. The server will stream the content of the requested files back to the client, and it will be displayed in real-time in the corresponding section.

## Project Structure

- `server.js`: Backend code for the Node.js server. Sets up a WebSocket server and handles file streaming.
- `client.html`: Frontend code for the client-side application. Establishes WebSocket connection and handles user interactions.
- `files/`: Directory containing the text files that can be streamed by the server in response to client requests.
