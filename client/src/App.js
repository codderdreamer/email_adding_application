import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddProduct from "./pages/AddProduct";
import CreateDevice from "./pages/CreateDevice";
import CreateSeriNo from "./pages/CreateSeriNo";
import Home from "./pages/Home";
import Test from "./pages/Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/createDevice" element={<CreateDevice />} />
        <Route path="/createSeriNo" element={<CreateSeriNo />} />
        <Route path="/test" element={<Test />} />
        <Route path="/addProduct" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
