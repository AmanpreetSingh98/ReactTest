import React from 'react';
import './header.css';
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <div className='container'>
            <div className='nav-box'>
                    <Link to='/' className='text-decoration-none'>
                        <div className='nav-brand'>Workspace</div>    
                    </Link>
                    
                    <Link to='/Practice' className='text-decoration-none'>
                        <div className='text-white'>Test</div>
                    </Link>
                </div>
        </div>
    )
}
export default Header