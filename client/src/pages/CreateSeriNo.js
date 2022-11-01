import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import "./CreateSeriNo.css";

const CreateSeriNo = () => {
    const [selects, setSelects] = useState();

    const create = () => {
        console.log("created");
        var productName = document.getElementById('productName')
    }


    return (
        <div>
            <Navbar />
            <div id='name'>Sevda</div>
            <div className='centerItem'>
                <div className='container'>
                    <div className='row centerItem'>
                        <span className='text'>Ürün Adı</span>
                        <select id='productName' value={selects} onChange={e => setSelects(e.target.value)}>
                            <option value="EVC">EVC</option>
                        </select>
                    </div>
                    <div className='row centerItem'>
                        <span className='text'>Ürün Tipi</span>
                        <select value={selects} onChange={e => setSelects(e.target.value)}>
                            <option value="">--Seçiniz--</option>
                            <option value="S">Standalone</option>
                            <option value="M">Modüler</option>
                            <option value="P">Paralel</option>
                        </select>
                    </div>
                    <div className='row centerItem'>
                        <span className='text'>Şarj Tipi</span>
                        <select value={selects} onChange={e => setSelects(e.target.value)}>
                            <option value="">--Seçiniz--</option>
                            <option value="A">DC</option>
                            <option value="C">AC</option>
                        </select>
                    </div>
                    <div className='row centerItem'>
                        <span className='text'>Giriş Faz Sayısı</span>
                        <select value={selects} onChange={e => setSelects(e.target.value)}>
                            <option value="">--Seçiniz--</option>
                            <option value="1">1</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className='row centerItem'>
                        <span className='text'>Max Gerilim</span>
                        <input type="text" />
                    </div>
                    <div className='row centerItem'>
                        <span className='text'>Max Akım</span>
                        <input type="text" />
                    </div>
                    <div className='row centerItem'>
                        <span className='text'>Güç</span>
                        <input type="text" />
                    </div>
                    <div className='row centerItem'>
                        <span className='text'>Çıkış Sayısı</span>
                        <select value={selects} onChange={e => setSelects(e.target.value)}>
                            <option value="">--Seçiniz--</option>
                            <option value="S">1 Çıkış</option>
                            <option value="D">2 Çıkış</option>
                            <option value="T">3 Çıkış</option>
                            <option value="Q">4 Çıkış</option>
                        </select>
                    </div>
                    <div className='row centerItem'>
                        <span className='text'>Çıkış Tipi</span>
                        <select value={selects} onChange={e => setSelects(e.target.value)}>
                            <option value="">--Seçiniz--</option>
                            <option value="0">Soketsiz</option>
                            <option value="1">CCS1</option>
                            <option value="2">CCS2</option>
                            <option value="3">Pantograf</option>
                            <option value="4">Type 1</option>
                            <option value="5">Type 2</option>
                            <option value="6">CHAdeMO</option>
                            <option value="7">GB-T</option>
                        </select>
                    </div>
                    <div className='row centerItem'>
                        <span className='text'>Ödeme Yöntemi</span>
                        <select value={selects} onChange={e => setSelects(e.target.value)}>
                            <option value="">--Seçiniz--</option>
                            <option value="0">Mobil Uygulama</option>
                            <option value="1">RFID</option>
                            <option value="2">Kredi Kartı</option>
                            <option value="3">RFID+KK</option>
                        </select>
                    </div>
                    <div className='row centerItem'>
                        <span className='text'>Versiyon</span>
                        <input type="text" />
                    </div>
                    <div className='row centerItem'>
                        <span className='text'>Yıl</span>
                        <input type="text" />
                    </div>
                    <div className='row centerItem'>
                        <span className='text'>Hafta</span>
                        <input type="text" />
                    </div>
                    <div className='row centerItem'>
                        <span className='text'>Sıra</span>
                        <input type="text" />
                    </div>
                    <div className='action centerItem'>
                        <button className='btn btnred'>Vazgeç</button>
                        <button className='btn' onClick={create}>Oluştur</button>
                    </div>
                </div>

            </div>

        </div>
    )
}


export default CreateSeriNo
