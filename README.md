# Workout App

Welcome to the Workout App repository! This project is designed to help users manage their workouts by providing a platform to add, view, and delete workout details.

## Technologies Used

- **React:** The frontend is built using React, enabling the creation of a dynamic and responsive user interface.

- **Node.js and Express:** The backend utilizes Node.js and Express to create a robust server. Express facilitates routing and handling API requests.

- **MongoDB:** MongoDB serves as the database, storing workout data. Its flexibility allows for easy scaling and modification of data structures.

- **Mongoose:** Mongoose acts as an Object Data Modeling (ODM) library for MongoDB, simplifying database interactions and providing schema enforcement.

- **Fetch API:** The Fetch API is employed to make asynchronous HTTP requests between the frontend and backend. It ensures seamless data retrieval and updates.

- **CSS:** Custom CSS styles are applied to enhance the visual appeal and responsiveness of the user interface.

## Key Features and Technical Insights

### 1. Workout Management

- **How it Works:** Workouts are stored in the MongoDB database. Mongoose is used to define workout schemas and perform CRUD operations. The Fetch API facilitates communication between the React frontend and Node.js backend to retrieve and update workout data.

### 2. Responsive Design

- **How it Works:** Custom CSS styles ensure a responsive and visually appealing design. Media queries are utilized to adapt the layout based on the device's screen size, providing a seamless user experience across various devices.

### 3. Real-time Updates

- **How it Works:** The frontend uses the Fetch API to periodically request updates from the backend. This ensures that any changes, such as adding or deleting a workout, are reflected in real-time without requiring a page refresh.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

