import React from 'react'
import testimalion3 from "../../images/testimalion3.jpg"
import { Link } from 'react-router-dom'

const User = () => {
    return (
        <div className='User my-2'>
            <div className="logo">
                <img src={testimalion3} alt="testimalion3" />
            </div>
            <div className='info'>
                <p>Ali</p>
                <Link to="/">Logout</Link>
            </div>
        </div>
    )
}

export default User