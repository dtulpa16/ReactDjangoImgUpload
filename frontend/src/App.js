// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect,useState } from "react";
import axios from "axios";
// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a FormData object to store the form data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image_url", image);

    try {
      // Send a POST request to the Django backend to create a new image
      const response = await axios.post("http://127.0.0.1:8000/api/images/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Description:
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <br />
      <label>
        Image:
        <input
          type="file"
          onChange={(event) => setImage(event.target.files[0])}
        />
      </label>
      <br />
      <button type="submit">Upload Image</button>
    </form>
  );
}

export default App;
