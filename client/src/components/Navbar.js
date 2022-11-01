import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='centerItem'>
            <div className='nav'>
                <ul className='centerItem'>
                    <Link to="/createSeriNo">
                        <li><a className='active'>Seri No Oluştur</a></li>
                    </Link>
                    <Link to="/createDevice">
                        <li><a >Cihaz Oluştur</a></li>
                    </Link>
                    <Link>
                        <li><a >Cihaz Listesi</a></li>
                    </Link>
                    <Link>
                        <li><a >Yazılım Yükle</a></li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
