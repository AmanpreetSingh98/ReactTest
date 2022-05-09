import React from 'react';
import {Link} from 'react-router-dom';
import './home.css'

const home = () => {

    return(
        <>
            <div className="container">
                <div className='row mt-4 gy-3'>
                    <Link to='/list' className='col-3 col-lg-2 text-decoration-none'>
                        <div className='img-box'>
                            <img className='image' src='https://i.ibb.co/g9nK0yw/notes.png' alt='notes'/>
                        </div>
                        <h6 className='text-center'>Notes</h6>
                    </Link>
                    <Link to='/form' className='col-3 col-lg-2 text-decoration-none'>
                        <div className='img-box'>
                            <img className='image' src='https://i.ibb.co/khZFgsW/form.png' alt='form'/>
                        </div>
                        <h6 className='text-center'>Form</h6>
                    </Link>
                    <Link to='/carousel' className='col-3 col-lg-2 text-decoration-none'>
                        <div className='img-box'>
                            <img className='image' src='https://i.ibb.co/3FFdj0f/carousel.png' alt='carousel'/>
                        </div>
                        <h6 className='text-center'>Carousel</h6>
                    </Link>
                    <Link to='/spinner' className='col-3 col-lg-2 text-decoration-none'>
                        <div className='img-box'>
                            <img className='image' src='https://i.ibb.co/f2bY5BR/loaderdf.gif' alt='loader'/>
                        </div>
                        <h6 className='text-center'>Spinner</h6>
                    </Link>
                    <Link to='/play' className='col-3 col-lg-2 text-decoration-none'>
                        <div className='img-box'>
                            <img className='image' src='https://i.ibb.co/7tXwYRm/playbg.png'/>
                        </div>
                        <h6 className='text-center'>Play</h6>
                    </Link>
                    <Link to='/login' className='col-3 col-lg-2 text-decoration-none'>
                        <div className='img-box'>
                            <img className='image' src='https://i.ibb.co/PWjwXSg/lock.png'/>
                        </div>
                        <h6 className='text-center'>Login</h6>
                    </Link>
                    <Link to='/quiz' className='col-3 col-lg-2 text-decoration-none'>
                        <div className='img-box'>
                            <img className='image' src='https://i.ibb.co/HBqDFBs/quiz.png'/>
                        </div>
                        <h6 className='text-center'>Quiz</h6>
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