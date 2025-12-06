# HRPortal

This project provides a rudimentary demonstration of frontend (React/HTML/CSS/JS) and server/backend (Node.js) development. It establishes a basic, routed website and a working API for data exchange, showcasing core full-stack architectural skills without implementing authentication, security, or database persistence.

## Installation

These instructions will get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have **Node.js** installed on your system. It is recommended to use a recent stable version.

### Setup

1.  **Unzip** the project folder to your desired location.
2.  Navigate into the project directory using your terminal:

    ```bash
    cd HRPortal/frontend
    cd HRPortal/backend
    ```

3.  Install the required dependencies (Node packages) using **npm** do in both frontend and backend directory:

    ```bash
    npm install
    ```

---

## Usage

### Development Server

To start the local development server with hot module replacement (HMR):

```bash
cd ../frontend
npm run dev

cd ../backend
node server.js
```

### Testing

You can log into any of the profiles already existing with credential from the backend/data/employees.json file. If you would like to create a new profile, a ceo or manager postion much onboard the user first with their email and name. Then new users can use the email and name combination provided by the ceo or manager to sign up (create a password) and see their profile.
