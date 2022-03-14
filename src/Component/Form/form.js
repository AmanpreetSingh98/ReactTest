import React,{Component} from 'react';
import './form.css';

var c = 0;

class Form extends Component {
    gender = (event) => {
        if(event.target.alt=='male'){
            document.getElementsByClassName('gender')[1].style.boxShadow='none'
            event.target.style.boxShadow='0px 0px 5px grey'
            console.log('male')
        }
        else{
            document.getElementsByClassName('gender')[0].style.boxShadow='none'
            event.target.style.boxShadow='0px 0px 5px grey'
            console.log('female')
        }
    }
    next = (event) => {
        event.target.parentElement.parentElement.style.display='none';
        event.target.parentElement.parentElement.nextSibling.style.display='flex';
        
    }
    back = (event) => {
        event.target.parentElement.parentElement.style.display='none';
        event.target.parentElement.parentElement.previousSibling.style.display='flex';
    }
    showAge = (event) => {
        event.target.nextSibling.innerText=event.target.value
    }
    render(){
        return(
            <div className='container'>
                <div className='form-cont'>
                    <div className='form-box'>
                        <div>
                            <p className='questn'>Enter your Name, email</p>
                            <input type='text' id='name' placeholder='full Name'/>
                            <input type='email' id='name' placeholder='email' className='d-block mt-3'/>
                        </div>
                        <div id="btn-box">
                            <button onClick={this.next} className='btn btn-light border border-primary btn-sm ms-4 px-3'> Next &rarr;</button>
                        </div>
                    </div>
                    <div className='form-box'>
                        <div>
                            <p className='questn'>Are you</p>
                            <div id="gender-box">
                                <img src="https://i.ibb.co/wwWKL84/male.png" className='gender' alt="male" onClick={this.gender}/>
                                <img src="https://i.ibb.co/cy3q2K8/female.png" className='ms-3 gender' alt="female" onClick={this.gender}/>
                            </div>
                            <div>
                                <input type='range' className='mt-4 w-50' onChange={this.showAge} defaultValue='18' min='18' max='30'/><span>18</span>
                            </div>
                        </div>
                        <div id="btn-box">
                            <button onClick={this.back} className='btn btn-light border border-primary btn-sm px-3'>&larr; Back</button>
                            <button onClick={this.next} className='btn btn-light border border-primary btn-sm ms-4 px-3'> Next &rarr;</button>
                        </div>
                    </div>
                    <div className='form-box'>
                        <div>
                            <p className='questn'>Select the city you live in</p>
                            <div>
                                <select className='w-50 form-select'>
                                    <option>Delhi</option>
                                    <option>Mumbai</option>
                                    <option>Kolkata</option>
                                    <option>Punjab</option>
                                    <option>Rajasthan</option>
                                    <option>Maharashtra</option>
                                </select>
                            </div>
                        </div>
                        <div id="btn-box">
                            <button onClick={this.back} className='btn btn-light border border-primary btn-sm px-3'>&larr; Back</button>
                            <button onClick={this.next} className='btn btn-light border border-primary btn-sm ms-4 px-3'> Next &rarr;</button>
                        </div>
                    </div>
                    <div className='form-box'>
                        <div>
                            <p className='questn'>Select Highest Level of Education that you received</p>
                            <div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name='education' id="e1"/>
                                    <label htmlFor='e1'>Matriculation</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name='education' id="e2"/>
                                    <label htmlFor='e2'>Graduation</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name='education' id="e3"/>
                                    <label htmlFor='e3'>Post Graduation</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name='education' id="e4"/>
                                    <label htmlFor='e4'>Doctors Phd</label>
                                </div>
                            </div>
                        </div>
                        <div id="btn-box">
                            <button onClick={this.back} className='btn btn-light border border-primary btn-sm px-3'>&larr; Back</button>
                            <button onClick={this.next} className='btn btn-light border border-primary btn-sm ms-4 px-3'> Next &rarr;</button>
                        </div>
                    </div>
                    <div className='form-box'>
                        <div>
                            <p className='questn'>Which range best describes your Annual income</p>
                            <div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name='income' id="s1"/>
                                    <label htmlFor='s1'>less than - 20,000</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name='income' id="s2"/>
                                    <label htmlFor='s2'>20,000 - 30,000</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name='income' id="s3"/>
                                    <label htmlFor='s3'>40,000 - 50,000</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name='income' id="s4"/>
                                    <label htmlFor='s4'>50,000 - 60,000</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name='income' id="s5"/>
                                    <label htmlFor='s5'>more than - 60,000</label>
                                </div>
                            </div>
                        </div>
                        <div id="btn-box">
                            <button onClick={this.back} className='btn btn-light border border-primary btn-sm px-3'>&larr; Back</button>
                            <button onClick={this.next} className='btn btn-light border border-primary btn-sm ms-4 px-3'> Next &rarr;</button>
                        </div>
                    </div>
                    <div className='form-box'>
                        <div>
                            <p className='questn'>How much Time do you spend on Smartphone Daily</p>
                            <div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name='time' id="t1"/>
                                    <label htmlFor='t1'>2 - 4 hours</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name='time' id="t2"/>
                                    <label htmlFor='t2'>4 - 6 hours</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name='time' id="t3"/>
                                    <label htmlFor='t3'>more than 6 hours</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='questn'>Do you Exercise Daily</p>
                            <div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name='exercise' id="ex1"/>
                                    <label htmlFor='ex1'>Yes</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name='exercise' id="ex2"/>
                                    <label htmlFor='ex2'>No</label>
                                </div>
                            </div>
                        </div>
                        <div id="btn-box">
                            <button onClick={this.back} className='btn btn-light border border-primary btn-sm px-3'>&larr; Back</button>
                            <button className='btn btn-success btn-sm ms-4 px-3'> Submit</button>
                        </div>
                    </div>
                                        

                </div>
            </div>
        )
    }
   
}
export default Form