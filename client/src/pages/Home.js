import React from 'react'
import Navbar from '../components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import CreateSeriNo from './CreateSeriNo';

const Home = () => {
    return (
        <div>
            <CreateSeriNo />
        </div>
    )
}

export default Home
