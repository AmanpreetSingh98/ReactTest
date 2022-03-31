import React from 'react';
import {Link} from 'react-router-dom';
import './home.css'

const home = () => {

    return(
        <>
        {window.innerWidth}/
        {window.innerHeight}
            <div className="container d-flex justify-content-between mt-5">

                <Link to='/list'>
                <div className='img-box'>
                    
                        
                        <img className='image' src='https://i.ibb.co/g9nK0yw/notes.png'/>
                    
                </div>
                </Link>
                <Link to='/form'>
                <div className='img-box'>
                    
                        <img className='image' src='https://i.ibb.co/khZFgsW/form.png'/>
                    
                </div>
                </Link>
                
                <Link to='/play'>
                    <button className='btn btn-light border border-dark mx-2'>Play</button>
                </Link>
                <Link to='/carousel'>
                    <button className='btn btn-light border border-dark mx-2'>Carousel</button>
                </Link>
                <Link to='/spinner'>
                    <button className='btn btn-light border border-dark mx-2'>Spinner</button>
                </Link>
            </div>
        </>
    )
}
export default home;