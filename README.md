# 🎓 Node.js & MongoDB Experiments  

Welcome! This repository contains hands-on **Node.js and MongoDB experiments** demonstrating CRUD operations, MVC architecture, and nested document handling using **Mongoose**. Perfect for learning backend development with real-world examples! 🚀  

---

## 🛠️ Experiment 5.1: CRUD Operations for Product Database Using Mongoose

**🎯 Objective:**  
Learn to implement **Create, Read, Update, Delete (CRUD)** operations on a MongoDB collection using Mongoose in Node.js. Understand schema design, database connectivity, and structured data handling.

**📋 Task Description:**  
- Create a Node.js app connecting to MongoDB with Mongoose.  
- Define a `Product` model with properties: `name`, `price`, `category`.  
- Implement CRUD operations:
  - ➕ Add a new product  
  - 📖 Retrieve all products  
  - ✏️ Update a product by ID  
  - ❌ Delete a product by ID  
- Handle validations and errors gracefully.  

**💻 Expected Output:**  
- Console logs showing successful operations: Added, Updated, Deleted products.  
- Retrieval of all products with correct details.  

**📂 File:** `crudScript.js`

---

## 🎓 Experiment 5.2: Student Management System Using MongoDB & MVC Architecture

**🎯 Objective:**  
Design a **Student Management System** using MVC architecture to manage student data stored in MongoDB. Learn to separate concerns, structure backend logic, and interact with MongoDB using Mongoose.  

**📋 Task Description:**  
- Build a Node.js app with Express.js and MongoDB.  
- Define `Student` model: `name`, `age`, `course`.  
- Implement a **controller** for CRUD operations.  
- Set up **routes** connecting client requests to controller methods.  
- Organize folders:
  - `models/` → Schemas  
  - `controllers/` → CRUD logic  
  - `routes/` → API routes  

**💻 Expected Output:**  
- Console logs: Added, Updated, Deleted students.  
- Display all students from the database correctly.  

**📂 File:** `studentCrudScript.js`

---

## 🛒 Experiment 5.3: E-commerce Catalog with Nested Document Structure in MongoDB

**🎯 Objective:**  
Learn **nested document modeling** in MongoDB to build a real-world e-commerce catalog. Understand flexible schema design and handling complex relationships in a single collection.  

**📋 Task Description:**  
- Create a MongoDB collection for an e-commerce catalog.  
- Each `Product` document includes:
  - `name`, `price`, `category`  
  - Nested `variants` array: `color`, `size`, `stock`  
- Insert sample products demonstrating different variants.  
- Queries to:
  - 📖 Retrieve all products  
  - 🔍 Filter products by category  
  - 🖼️ Project specific variant details (color, stock)  

**💻 Expected Output:**  
- Console logs showing inserted products with variants.  
- Retrieval of all products & filtered results by category.  
- Projection of variant details.  

**📂 File:** `catalogDemo.js`

---

## ⚡ How to Run (Nimbus / Local)

1. **Clone the repo:**  
```bash
git clone <your-repo-url>
cd <repo-folder>
Install dependencies:

bash
Copy code
npm install
Create .env file with MongoDB connection:

env
Copy code
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
PORT=3000
Start the server:

bash
Copy code
npm start
Run experiment scripts in a new terminal:

bash
Copy code
node crudScript.js        # Experiment 5.1
node studentCrudScript.js # Experiment 5.2
node catalogDemo.js       # Experiment 5.3
View database:
Use MongoDB Compass or MongoDB Atlas. 🔎

📂 Repository Structure
bash
Copy code
├── controllers/        # Controllers for MVC
├── models/             # Mongoose schemas
├── routes/             # API routes
├── crudScript.js       # Experiment 5.1
├── studentCrudScript.js# Experiment 5.2
├── catalogDemo.js      # Experiment 5.3
├── app.js              # Main server
├── package.json
├── README.md
└── .env
🌟 Features & Highlights
✅ Hands-on CRUD operations with Mongoose

✅ MVC architecture for structured backend

✅ Nested documents for real-world e-commerce catalog

🚀 Easy to run on Nimbus or local environment

💡 Clear console logs for learning feedback

Made with ❤️ for learning backend development with Node.js & MongoDB.
