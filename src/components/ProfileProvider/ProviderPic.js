import React from 'react'
import o1 from "../../images/o1.png"
import { Link } from 'react-router-dom'

const ProviderPic = () => {
    return (
        <div className='User my-2'>
            <div className="logo">
                <img src={o1} alt="Lamar Engineering office" />
            </div>
            <div className='info'>
                <p>Lamar Engineering office</p>
                <Link to="/">Logout</Link>
            </div>
        </div>
    )
}

export default ProviderPic