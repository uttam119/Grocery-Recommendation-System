import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';

const FrequentlyBought = ({ slug }) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([])

    const fetchData = async () => {
        const res = await axios.get(`${API_URL}/order/frequently-bought/${slug}`)
        console.log("Res is", res)
        setData(res.data)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return <div className='product-container'>
        <h2>Frequently Bought</h2>
        {/* {data.map(data, index => {

        })} */}
    </div>

}

export default FrequentlyBought