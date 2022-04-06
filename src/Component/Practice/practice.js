import React from 'react';
import './practice.css'

const Ptc = () => {
    const device = () => {
        let details= navigator.userAgent;
        // return details.split('(')[1].split(';')[0]
        let regexp = /Android/i;
        if(regexp.test(details)){
            return('This is a Mobile Device')
        }
        else{
            return('This is a Desktop')
        } 
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
            {navigator.userAgent.split('(')[1].split(';')[0]}
            <hr/>
            {navigator.userAgent}
        </div>
    )
}
export default Ptc;