import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Test.css";
import { toast } from "react-toastify";
import axios from "axios"

const Test = () => {
    console.log("hello");
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://127.0.0.1:5005/api/get");
        console.log(response.data);
        setData(response.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div style={{ marginTop: "150px" }}>
            <Link to="/addProduct">
                <div className="centerItem">
                    <button className="btn btn-create">Ürün Oluştur</button>
                </div>
            </Link>
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th style={{ textAlign: "center" }}>No.</th>
                        <th style={{ textAlign: "center" }}>Ürün Adı</th>
                        <th style={{ textAlign: "center" }}>Ürün Tipi</th>
                        <th style={{ textAlign: "center" }}>Şarj Tipi</th>
                        <th style={{ textAlign: "center" }}>Giriş Faz Sayısı</th>
                        <th style={{ textAlign: "center" }}>Max Gerilim</th>
                        <th style={{ textAlign: "center" }}>Max Akım</th>
                        <th style={{ textAlign: "center" }}>Güç</th>
                        <th style={{ textAlign: "center" }}>Çıkış Sayısı</th>
                        <th style={{ textAlign: "center" }}>Çıkış Tipi</th>
                        <th style={{ textAlign: "center" }}>Ödeme Yöntemi</th>
                        <th style={{ textAlign: "center" }}>Versiyon</th>
                        <th style={{ textAlign: "center" }}>Yıl</th>
                        <th style={{ textAlign: "center" }}>Hafta</th>
                        <th style={{ textAlign: "center" }}>Sıra</th>
                        <th style={{ textAlign: "center" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <th scope='row'>{index + 1}</th>
                                <td>{item.name_of_the_product}</td>
                                <td>{item.product_type}</td>
                                <td>{item.charge_type}</td>
                                <td>{item.number_of_input_phases}</td>
                                <td>{item.max_volt}</td>
                                <td>{item.max_current}</td>
                                <td>{item.power}</td>
                                <td>{item.number_of_outputs}</td>
                                <td>{item.output_type}</td>
                                <td>{item.payment_method}</td>
                                <td>{item.version}</td>
                                <td>{item.year}</td>
                                <td>{item.week}</td>
                                <td>{item.order_number}</td>
                                <td>
                                    <Link to={`/update/${item.id}`}>
                                        <button className='btn btn-edit'>Edit</button>
                                    </Link>
                                    <button className="btn btn-delete">Delete</button>
                                    <Link to={`/view/${item.id}`}>
                                        <button className='btn btn-view'>View</button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>

        </div>
    )
}

export default Test;
