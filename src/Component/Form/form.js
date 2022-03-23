import React,{Component} from 'react';
import './form.css';

var url = 'https://formnode.herokuapp.com/post'
var localurl = 'http://localhost:4546/post'

var c = 0;
class Form extends Component {
    constructor() {
        super()
        this.state={

        }
    }
    gender = (event) => {
        if(event.target.alt=='male'){
            document.getElementsByClassName('gender')[1].style.boxShadow='none'
            event.target.style.boxShadow='0px 0px 5px grey'
            this.setState({[event.target.name]:event.target.alt})
            console.log(this.state)
        }
        else{
            document.getElementsByClassName('gender')[0].style.boxShadow='none'
            event.target.style.boxShadow='0px 0px 5px grey'
            this.setState({[event.target.name]:event.target.alt})
            console.log(this.state)
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
        this.setState({[event.target.name]:event.target.value})
    }
    handleData = (event) => {
        this.setState({[event.target.name]:event.target.value})
        console.log(this.state)
    }
    show = () => {
        console.log(this.state)
    }
    sendData = () => {
        var obj = JSON.stringify(this.state);
        console.log(obj);
        fetch(url, {
            method:'POST',
            headers:{
              'accept':'application/json',
              'content-type':'application/json'  
            },
            body:obj
        })
        .then(console.log('ok'))
        this.props.history.push('/record')
        
    }
    moveup = (event) => {
        console.log("rnnind")
        var lth = document.getElementsByClassName('imgbox').length-1;
        if(c==lth){
            c=0;
            for(var i=0; i<lth; i++){
                document.getElementsByClassName('imgbox')[i].style.marginTop='0px';
                // document.getElementsByClassName('imgbox')[i].style.transform='scale(1)'
            }
        }
        else{
            // document.getElementsByClassName('imgbox')[c].style.transform='scaleX(.1)'
            document.getElementsByClassName('imgbox')[c].style.marginTop='-300px';
            c++;
        }
        

        
        // if(event.target.parentElement == document.getElementById('car-box').lastChild){
        //     event.target.parentElement.style.marginTop='-300px'
        //     var lth = document.getElementsByClassName('imgbox').length;
        //     console.log(lth)
        //     for(var i=0; i<lth; i++){
        //         document.getElementsByClassName('imgbox')[i].style.marginTop='0px';
        //     }
        // }
        // else{
        //     event.target.parentElement.style.marginTop='-300px'
        // }
    }
    start = () => {
        this.a=setInterval(this.moveup,2000)
    }
    stop = () => {
        clearInterval(this.a)
        console.log('pause')
    }
    render(){
        return(
            <div className='container'>
                {this.start()}
                
                <div id='car-box' onMouseOver={this.stop} onMouseLeave={this.start}>
                    <div className='imgbox'>
                        <img onClick={this.moveup} src='https://i.ibb.co/YZVf0cM/waterdrop.jpg' className='iset' alt="img"/>    
                    </div>
                    <div className='imgbox'>
                        <img onClick={this.moveup} src='https://i.ibb.co/7YXtBx1/shoperia.jpg' className='iset' alt="img"/>    
                    </div>
                    <div className='imgbox'>
                        <img onClick={this.moveup} src='https://i.ibb.co/vjz1rJS/lightangle.jpg' className='iset' alt="img"/>    
                    </div>
                    <div className='imgbox'>
                        <img onClick={this.moveup} src='https://i.ibb.co/MfwGGj6/radlig.jpg' className='iset' alt="img"/>    
                    </div>
                </div> 
                <button onClick={this.moveup} id='prev'>prev</button>
                <button className='mt-5' onClick={this.show}>chk</button>
                <div className='form-cont'>
                    <div className='form-box'>
                        <div>
                            <p className='questn'>Enter your Name, email</p>
                            <input type='text' id='name' name='name' onChange={this.handleData} placeholder='full Name'/>
                            <input type='email' id='name' name='email' onChange={this.handleData} placeholder='email' className='d-block mt-3'/>
                        </div>
                        <div id="btn-box">
                            <button onClick={this.next} className='btn btn-light border border-primary btn-sm ms-4 px-3'> Next &rarr;</button>
                        </div>
                    </div>
                    <div className='form-box'>
                        <div>
                            <p className='questn'>Are you</p>
                            <div id="gender-box">
                                <img src="https://i.ibb.co/wwWKL84/male.png" className='gender' alt="male" name="gender" onClickCapture={this.gender}/>
                                <img src="https://i.ibb.co/cy3q2K8/female.png" className='ms-3 gender' alt="female" name="gender" onClick={this.gender}/>
                            </div>
                            <div>
                                <input type='range' className='mt-4 w-50' onChange={this.showAge} defaultValue='18' min='18' max='30' name="age"/><span>18</span>
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
                                <select className='w-50 form-select' name="city" onChange={this.handleData}>
                                    <option value='Delhi'>Delhi</option>
                                    <option value='Mumbai'>Mumbai</option>
                                    <option value='Kolkata'>Kolkata</option>
                                    <option value='Punjab'>Punjab</option>
                                    <option value='Rajasthan'>Rajasthan</option>
                                    <option value='Maharashtra'>Maharashtra</option>
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
                            <p className='questn'>Select Highest Level of Education that you have received</p>
                            <div onChange={this.handleData}>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name='education' id="e1" value='Matriculation'/>
                                    <label htmlFor='e1'>Matriculation</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name='education' id="e2" value='Graduation'/>
                                    <label htmlFor='e2'>Graduation</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name='education' id="e3" value='Post Graduation'/>
                                    <label htmlFor='e3'>Post Graduation</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name='education' id="e4" value='Doctor'/>
                                    <label htmlFor='e4'>Doctor</label>
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
                            <p className='questn'>Which range best describes your Monthly income</p>
                            <div onChange={this.handleData}>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name='income' id="s1" value='10-20'/>
                                    <label htmlFor='s1'>less than - 20,000</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name='income' id="s2" value='20-30'/>
                                    <label htmlFor='s2'>20,000 - 30,000</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name='income' id="s3" value='40-50'/>
                                    <label htmlFor='s3'>40,000 - 50,000</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name='income' id="s4" value='50-60'/>
                                    <label htmlFor='s4'>50,000 - 60,000</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name='income' id="s5" value='60-100'/>
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
                            <div onChange={this.handleData}>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name='sotMobile(h)' id="t1" value='2-4'/>
                                    <label htmlFor='t1'>2 - 4 hours</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name='sotMobile(h)' id="t2" value='4-6'/>
                                    <label htmlFor='t2'>4 - 6 hours</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name='sotMobile(h)' id="t3" value='6-10'/>
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
                            <button className='btn btn-success btn-sm ms-4 px-3' onClick={this.sendData}>Submit</button>
                        </div>
                    </div>
                </div>
                {window.onload=() => this.st()}
            </div>
        )
    }
   
}
export default Form