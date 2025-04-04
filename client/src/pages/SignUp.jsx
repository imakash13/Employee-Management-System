import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [user, setUser] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await axios.post("http://localhost:5000/api/auth/register", user);
            alert("Registration successful. You can now login.");
            navigate("/login");
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="auth-container">
            <h2>Signup</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={user.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} required />
                <button type="submit">Signup</button>
            </form>
            <p>Already have an account? 
            <button className="btn-primary" onClick={() => navigate("/login")}>Login</button></p>
        </div>
    );
};

export default Signup;
