# Note-Yard ✨

A **full-stack note-taking application** built with the **MERN stack** (MongoDB, Express, React, Node.js).  
Note-Yard lets you create, update, and delete notes with a simple and responsive UI. It also demonstrates real-world concepts like **REST APIs**, **rate limiting with Upstash Redis**, and **deployment practices**.

## Screenshots
<img width="1920" height="1080" alt="home" src="https://github.com/user-attachments/assets/22e5186d-abfe-4048-a2f2-bca8688309d1" />
<img width="1920" height="1080" alt="edit page" src="https://github.com/user-attachments/assets/2ad57d5d-c72a-42b1-8bbd-3c8346799d69" />


## Project Structure

```
WEBD/
├── backend/        # Server-side code (API & database logic)
│   └── src/
│       ├── config/
│       ├── middleware/
│       ├── routes/
│       └── server.js
├── frontend/       # Client-side code (React UI)
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.jsx
│       └── main.jsx
├── package.json    # Root scripts for build/start
└── README.md
```
## Dependencies

- Backend: Node.js, Express.js, MongoDB, Mongoose, Redis (Upstash)
- Frontend: React, Vite/CRA, Axios, Tailwind CSS (or similar, depending on implementation)
- Development tools and scripts as defined in package.json
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`

## 🧪 .env Setup

### Backend (`/backend`)

```
MONGO_URI=<your_mongo_uri>

UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>

NODE_ENV=development
```
## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/pukhraj102/Note-Yard.git
   cd Note-Yard
   ```

2. **Set up environment variables:**
   - Copy `.env.example` in `backend/` to `.env` and fill in your MongoDB URI and other settings.

3. **Install dependencies and build frontend:**
   ```sh
   npm run build
   ```

4. **Start the backend server:**
   ```sh
   npm start
   ```

5. **Development (optional):**
   - You can run frontend and backend separately for development:
     ```sh
     # In one terminal
     cd backend
     npm install
     npm run dev

     # In another terminal
     cd ../frontend
     npm install
     npm run dev
     ```

### Authors

Made with ❤️ by [pukhraj102](https://github.com/pukhraj102)
