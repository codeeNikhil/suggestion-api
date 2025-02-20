
## Overview
This project provides a real-time search suggestion API optimized for low-latency response times. 
It supports prefix-based auto-completion and utilizes caching to enhance performance.

## Tech Stack
- **Node.js**
- **Express.js**
- **Sequelize (for use MySQL)**
- **node-caching (for caching)**

## Installation and Setup



### Prerequisites

Ensure you have the following installed on your system:
- **Node.js (v14 or later)**
- **MySQL database**

### Steps to Setup

1. **Clone the repository:**

   git clone <repository-url>
   cd <project-folder>
   ```

2.navigate to server  {cd server}
 **Install dependencies:**
  
   npm i
```

3. **Configure the the config.json**

   replace the db config based on your configs
  
   ```

4. **Run database migrations: on server directory**
 
   npx sequelize db:migrate --env main
   ```

5. **add the data in user table using script by default it will insert 100K data**
   
   node scripts/addUser.js
   ```

6. **Start the server:**
    currently server will run on 3000 port if this port is not avl then change in index.js file 
   npm start
   The server will be running at `http://localhost:3000`.

## Author
Nikhil goyal
goyalnikhil416@gmail.com  
20 feb 2025
