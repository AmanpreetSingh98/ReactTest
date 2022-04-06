import React from 'react';
import './practice.css'

const Ptc = () => {
    const device = () => {
        let details= navigator.userAgent;
        return details.split('(')[1].split(';')[0]
    }
    return(
        <div className='container mt-3'>
            <div className='out'>
                <div className='tile'>A</div>
                <div className='tile'>B</div>
                <div className='tile'>C</div>
                
            </div>
            {device()}
            <hr/>
            {navigator.userAgent}
        </div>
    )
}
export default Ptc;