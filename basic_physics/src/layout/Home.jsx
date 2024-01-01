import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import axios, { Axios } from 'axios'
import DataList from '../component/DataList'

const Home = () => {
    const [datas, setdata] = useState([])

    const getdata = async () => {
        axios.defaults.withCredentials = true;
        const cakedata = await axios.get('http://Localhost:4000/data/data')
        setdata(cakedata.data)
        console.log(datas)
    }

    useEffect(() => {
        getdata()
    }, [])
    return (
        <>
            <div className='mx-10'>
                <Header />
                <DataList data={datas} />
            </div>
        </>

    )
}

export default Home