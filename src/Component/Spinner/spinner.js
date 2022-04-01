import React,{Component} from 'react';
import './spinner.css'

class Spinner extends Component{
    reset = () => {
        document.getElementsByClassName('border-solid')[0].style.border='5px solid rgb(239 239 239)';
        document.getElementsByClassName('border-solid')[0].style.borderRight='5px solid blue'
    }

    changeborderR = (event) => {
        document.getElementsByClassName('border-solid')[0].style.borderRight=`5px ${event.target.value} blue`
    }

    changeborder = (event) => {
        if(event.target.value== 'none'){
            document.getElementsByClassName('border-solid')[0].style.border='5px solid rgb(239 239 239)'
        }
        else{
            document.getElementsByClassName('border-solid')[0].style.border=`5px ${event.target.value} blue`
        }
    }
    render(){
        return(
            <div className='container mt-3'>
                <button className="btn btn-primary btn-sm" value="reset" onClick={this.reset}><i className="bi bi-reply-all-fill"></i></button>

                <div onChange={this.changeborderR}>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="solid" name="r" id="c1"/>
                        <label className="form-check-label" htmlFor="c1">solid</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="double" name="r" id="c2"/>
                        <label className="form-check-label" htmlFor="c2">double</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="dashed" name="r" id="c3"/>
                        <label className="form-check-label" htmlFor="c3">dashed</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="dotted" name="r" id="c4"/>
                        <label className="form-check-label" htmlFor="c4">dotted</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="groove" name="r" id="c5"/>
                        <label className="form-check-label" htmlFor="c5">groove</label>
                    </div>
                </div>
                ----------
                <div onChange={this.
                    changeborder}>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="none" name="b" id="r0"/>
                        <label className="form-check-label" htmlFor="r0">none</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="solid" name="b" id="r1"/>
                        <label className="form-check-label" htmlFor="r1">solid</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="double" name="b" id="r2"/>
                        <label className="form-check-label" htmlFor="r2">double</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="dashed" name="b" id="r3"/>
                        <label className="form-check-label" htmlFor="r3">dashed</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="dotted" name="b" id="r4"/>
                        <label className="form-check-label" htmlFor="r4">dotted</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="groove" name="b" id="r5"/>
                        <label className="form-check-label" htmlFor="r5">groove</label>
                    </div>
                </div>
                
                <div id="spin-box">

                    <div className="border-solid">
                    </div>

                    <div className="border-dotted ms-3">
                    </div>

                    <div className="border-solid-dual ms-3">
                    </div>

                    <div className="border-double ms-3">
                    </div>

                    <div className="border-mix ms-3">
                    </div>
                </div>  


                <div className="d-flex justify-content-around mt-5">
                    
                    <div id="spinner1">
                        <div></div>                
                    </div>
                    <div id="spinner2">
                        <div></div>
                    </div>
                </div>

                <div id="spinner-dotted" className="mt-5">
                    <div></div>
                </div>
                &nbsp;

                <div className="spinner-dot">
                    <div></div>
                </div>

                <div className="spinner-wheel">
                    <div></div>
                </div>

                <div className='water-fill'>
                <div className='water-fill2'>
                <div className='water-fill3'>
                    
                    </div>
                    </div>
                </div>

                <div className="my-4 box-cont">
                    <div className="box-bg"></div>
                    <div className="box-white">
                    </div>
                </div>
            </div>
        )
    }
}
export default Spinner