import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";


import { Routes, Route } from "react-router-dom";
import loading from "./components/Loading";

import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loadind, setLoading] = (useState = null);
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

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home users={users} loading={loading} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
