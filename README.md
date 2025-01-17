
# **Product Gallery App**

A full-stack MERN (MongoDB, Express, React, Node.js) application to manage a product gallery. The app allows users to perform CRUD operations on a collection of products, including adding, viewing, editing, and deleting products.

---

## **Features**
- **Frontend**: Developed using React for a dynamic and responsive user interface.
- **Backend**: Built with Node.js and Express for RESTful API development.
- **Database**: MongoDB to store product data efficiently.
- **CRUD Operations**:
  - Add new products.
  - View a list of all products.
  - View detailed information for each product.
  - Edit or delete products.

---

## **Technologies Used**
### **Frontend**
- React
- React Router DOM
- Axios

### **Backend**
- Node.js
- Express.js

### **Database**
- MongoDB (via Mongoose)

---

## **Installation and Setup**

### **1. Clone the Repository**
```bash
git clone https://github.com/username/product-gallery.git
cd product-gallery
```

### **2. Backend Setup**
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables by creating a `.env` file:
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/product-gallery
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

### **3. Frontend Setup**
1. Navigate to the `frontend` directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the `.env` file in the `frontend` directory:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api/products
   ```

4. Start the React development server:
   ```bash
   npm start
   ```

---

## **Usage**
1. Open your browser and navigate to `http://localhost:3000`.
2. Explore the product gallery:
   - View the list of products.
   - Add new products by navigating to the "Add Product" page.
   - Click on a product to view its details or edit it.
   - Delete products directly from the list.

---

## **Project Structure**
```
product-gallery/
├── backend/                     # Backend code
│   ├── models/                  # Mongoose models
│   ├── controllers/             # Controller logic
│   ├── routes/                  # API routes
│   ├── config/                  # Configuration (e.g., database connection)
│   ├── server.js                # Main server file
│   └── .env                     # Environment variables
├── frontend/                    # Frontend code
│   ├── components/              # Reusable components
│   ├── pages/                   # Page-level components
│   ├── services/                # Axios services for API calls
│   ├── App.js                   # Main app component
│   └── .env                     # Environment variables
├── README.md                    # Documentation
└── .gitignore                   # Git ignored files
```

---

## **Future Improvements**
- Add authentication and authorization for product management.
- Implement file uploads for product images.
- Enhance UI with additional styling and responsiveness.
- Deploy the application on a cloud platform (e.g., AWS, Vercel).


---

## **Contributing**
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Description of feature"`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## **Contact**
For questions or feedback, please contact:
- **Name**: Samarth Pansare  
- **Email**: samarth.pansare2002@gmail.com  
- **GitHub**: [Samarth Pansare](https://github.com/SamarthPansare)

---
