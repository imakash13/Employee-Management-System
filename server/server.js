const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//mongodb connection
mongoose.connect(process.env.MONGO_URI).then(()=>console.log("MongoDB connected"))
.catch((err)=>console.log(err));

//router
const employeeRoutes = require('./routes/employeeRoutes');
app.use('/api/employees',employeeRoutes);

app.listen(5000,()=>console.log("Server running on port 5000"));