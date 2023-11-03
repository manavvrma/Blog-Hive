# Blog-Hive

Blog-Hive is a microservices-based blog post project that allows users to create, read, and store blog posts. It leverages a modern microservices architecture to provide a scalable and flexible blogging platform.

## Features

- Create and publish blog posts.
- View and read published blog posts.
- Comment on blog posts for user interaction.

## Technologies Used

- Node.js for server-side logic.
- React.js for the frontend user interface.
- MongoDB as the database for storing blog posts.
- Docker for containerization of microservices.

## Running Locally

### Software Requirements

- An IDE or development environment.
- Node.js installed.

### Installation

If you want to run the application locally, follow these steps:

1. Run `npm install` in each service directory (e.g., `posts-service`, `comments-service`, etc.).
2. Start each service using `npm start`.

Navigate to [http://localhost:3000](http://localhost:3000) to access the application in your browser.

## Running with Docker

If you prefer to use Docker for running the services, follow these steps:

1. Pull the Docker images for each service:
    ```bash
    docker pull manav444/posts-service:latest
    docker pull manav444/comments-service:latest
    docker pull manav444/login-service:latest
    docker pull manav444/event-bus-service:latest
    docker pull manav444/query-service:latest
    docker pull manav444/frontend-service:latest
    ```

2. Run all the services with Docker Compose:
    ```bash
    docker-compose up
    ```

This will start all services and make the application accessible.
