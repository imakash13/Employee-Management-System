const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes);


//mongodb connection
mongoose.connect(process.env.MONGO_URI).then(()=>console.log("MongoDB connected"))
.catch((err)=>console.log(err));

//router
const employeeRoutes = require('./routes/employeeRoutes');
app.use('/api/employees',employeeRoutes);

app.listen(5000,()=>console.log("Server running on port 5000"));