# Next.js Key-Value Store

A simple Next.js application that demonstrates a basic key-value storage system using file-based persistence.

## Installation

Clone the repository and install dependencies:

```bash
git clone <your-repository-url>
cd <project-folder>
npm install
```

## Running the Application

Start the development server:

```bash
npm run dev
```

## Project Structure

```
app/
├── api/test/route.ts    # API routes for GET/POST
└── page.tsx             # Main UI component
```

## API Endpoints

**POST `/api/test`**

- Body: `{ "key": "string", "value": "string" }`
- Response: `{ "message": "OK" }`

**GET `/api/test?key=<key>`**

- Response: `{ "value": "string | null" }`

## Usage

1. Enter a key and value in the input fields
2. Click Set to store the data
3. Enter a key and click Get to retrieve the stored value
