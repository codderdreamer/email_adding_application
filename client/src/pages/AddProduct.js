import React, {useState,useEffect} from 'react'
import { useHistory, useParams, Link } from "react-router-dom";
import "./AddProduct.css";
import axios from 'axios';
import {toast} from "react-toastify"

const AddProduct = () => {
  return (
    <div>
      <h2>Add Product</h2>
      <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, ex. Impedit consequuntur ut pariatur voluptates eligendi voluptatum esse mollitia assumenda, cumque architecto doloremque eveniet, at et temporibus amet tempore nesciunt?</div>
    </div>
  )
}

export default AddProduct
