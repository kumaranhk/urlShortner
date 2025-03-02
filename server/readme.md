# URL Shortener Backend

This is the backend service for the URL Shortener application. It provides API endpoints to shorten URLs, redirect users, and authenticate using Google SSO.

## Features

- Shorten long URLs
- Redirect to the original URL using the shortened version
- Google Authentication (SSO)
- User session management
- MongoDB database for storing URLs and users

## Installation

### Prerequisites
- Node.js
- npm
- MongoDB (Local or Cloud)

### Setup

1. **Clone the repository:**
    ```sh
    git clone https://github.com/kumaranhk/urlShortner.git
    ```
2. **Navigate to the backend directory:**
    ```sh
    cd urlShortener/backend
    ```
3. **Install dependencies:**
    ```sh
    npm install
    ```
4. **Create a `.env` file** in the root directory and add your environment variables:
    ```sh
    touch .env
    nano .env
    ```
    Add the following details:
    ```sh
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    SESSION_SECRET=your_session_secret
    FRONTEND_URL=your_frontend_url
    GOOGLE_CALLBACK_URL=your_google_callback_url
    PORT=4000
    SERVER_URL=backend_url
    NODE_ENV=production || dev
    MONGOOSE_URI=mongodb://127.0.0.1:27017/your_db_name
    ```

5. **Start the server:**
    ```sh
    npm start
    ```

## Technologies Used
- Node.js
- Express.js
- MongoDB (Mongoose)
- Passport.js (Google SSO)

---

For frontend setup, check the frontend `README.md` in the respective directory.
