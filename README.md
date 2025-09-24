This repository contains a Next.js application developed for a technical talk with WhiteAway.
It consists of two parts: a server and a client.

## Preparation
Clone this repository and make sure it contains both the server and client folders.

Install dependencies for each project:

### Server

```bash
cd server
npm install
```
Go back to the root and install client dependencies:
```bash
..cd
```

### Client
```bash
cd client
npm install
```
#### Environment Setup

Before running the project, you’ll need to create a `.env` file in the root of the client folder.

Add the following line to your `.env` file:

```env
API_BASE_URL=http://localhost:5001
```

## Getting Started

### Server Start
Open a fresh terminal in the root folder, and start the server:
```bash
cd server
npm run dev
```
The Server API will be available at:
[http://localhost:5001](http://localhost:5001)


### Client Start
Open a fresh terminal in the root folder, and start the Client:

```bash
cd client
npm run dev
```

The Client will be available at:
[http://localhost:3000](http://localhost:3000)
