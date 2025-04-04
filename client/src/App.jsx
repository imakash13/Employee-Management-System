import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import PrivateRoute from "./components/PrivateRoute";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* Protected Routes */}
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<EmployeeList />} />
                    <Route path="/add" element={<AddEmployee />} />
                    <Route path="/update/:id" element={<UpdateEmployee />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
