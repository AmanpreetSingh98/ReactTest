import React from 'react';
import {Link} from 'react-router-dom';
import './home.css'

const home = () => {

    return(
        <>
        
            <div className="container">
                <div className='nav-box'>
                    <div className='nav-brand'>Workspace</div>

                </div>
                <div className='d-flex justify-content-between mt-5'>
                    <Link to='/list' className='text-decoration-none'>
                        <div className='img-box'>
                            <img className='image' src='https://i.ibb.co/g9nK0yw/notes.png' alt='notes'/>
                        </div>
                        <h6 className='text-center'>Notes</h6>
                    </Link>
                    <Link to='/form' className='text-decoration-none'>
                        <div className='img-box'>
                            <img className='image' src='https://i.ibb.co/khZFgsW/form.png' alt='form'/>
                        </div>
                        <h6 className='text-center'>Form</h6>
                    </Link>
                    <Link to='/carousel' className='text-decoration-none'>
                        <div className='img-box'>
                            <img className='image' src='https://i.ibb.co/3FFdj0f/carousel.png' alt='carousel'/>
                        </div>
                        <h6 className='text-center'>Carousel</h6>
                    </Link>
                    <Link to='/spinner' className='text-decoration-none'>
                        <div className='img-box'>
                            <img className='image' src='https://i.ibb.co/f2bY5BR/loaderdf.gif' alt='loader'/>
                        </div>
                        <h6 className='text-center'>Spinner</h6>
                    </Link>
                    <Link to='/play' className='text-decoration-none'>
                        <div className='img-box'>
                            <i className='bi bi-tools fs-1 image'></i>
                        </div>
                        <h6>Play</h6>
                    </Link>
                </div>
                <div className='footer'>
                    W--{window.innerWidth} &nbsp;
                    H--{window.innerHeight}
                </div>
            </div>
        </>
    )
}
export default home;