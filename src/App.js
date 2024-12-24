import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import UserDetails from "./components/UserDetails"; 

import {
  Routes,
  Route,
} from "react-router-dom";

import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState ( null);
  useEffect(() => {
    async function getUsers() {
      try {
        let { data } = await axios.get("https://api.github.com/users");
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getUsers();
  }, []);

  const fetchUsers = async (query) => {
    if (!query.trim()) {
        // Reset to default users if query is empty
        try {
            setLoading(true);
            const { data } = await axios.get("https://api.github.com/users");
            setUsers(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
        return;
    }

    // Fetch users based on search query
    try {
        setLoading(true);
        const { data } = await axios.get(`https://api.github.com/search/users?q=${query}&per_page=10`);
        setUsers(data.items);
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
};

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home users={users} loading={loading} fetchUsers={fetchUsers} />} />
        <Route path="/user/:username"  element={<UserDetails loading={loading}  />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
