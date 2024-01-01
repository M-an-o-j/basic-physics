import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className='flex justify-between'>
                <div className='text-2xl'>
                    <h1 className='font-bold'>CakeShop</h1>
                </div>
                <div className='flex list-none gap-10 font-semibold'>
                    <li>Home</li>
                    <li>Cakes</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </div>
            </div>
        </>
    )
}

export default Header