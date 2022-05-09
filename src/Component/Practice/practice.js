import React,{Component} from 'react';
import './practice.css';

let mcqurl = 'https://formnode.herokuapp.com/addmcq'
// let saveurl = 'http://localhost:9090/data';
// let delurl = 'http://localhost:9090/delete'
class Ptc extends Component {
    constructor(){
        super()
        this.state={
            
        }
    }
    collect = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    sendData = () => {
        if(document.getElementsByName('question')[0].value =='' || document.getElementsByName('options')[0].value =='' || document.getElementsByName('answer')[0].value ==''){
            alert('fill the fields first')
        }
        else{
            this.state.options = this.state.options.split(',')
            fetch(mcqurl, {
                method:'POST', 
                headers:{
                    'accept':'application/json',
                    'content-type':'application/json'
                },
                body:JSON.stringify(this.state)
            })
            .then( res => res.json())
            .then( (data) => {
                console.log(data)
                document.getElementById('ack').innerText=JSON.stringify(data)
            })
        }
    }
    render(){
        return(
            <div className='container pt-3'>
                <h3 className='text-center'>Quiz- add questions</h3>
                
                <div className='d-flex flex-column my-4' onChange={this.collect}>
                    <input type='text' name='question' placeholder='Question.....?'/>
                    <input type='email' name='options' placeholder='option1,option2,option3...' className='my-4' multiple/>
                    <input type='text' name='answer' placeholder='answer'/>
                    <button className='btn btn-primary mt-5' onClick={this.sendData}>Submit</button>
                </div>
                <p id="ack"></p>
            </div>
        )
    }
}
export default Ptc;




 // const device = () => {
    //     let details= navigator.userAgent;
    //     let regexp = /Android/i;
    //     if(regexp.test(details)){
    //         return('This is a Mobile Device')
    //     }
    //     else{
    //         return('This is a Desktop')
    //     } 
    // }
            // {device()}
            // <hr/>
            // {navigator.userAgent.split('(')[1].split(';')[0]}
            // <hr/>
            // {navigator.userAgent}



//          Previous One

            // constructor(){
            //     super()
            //     this.state = {
            //         delAck:''
            //     }
            // }
            
            // resetField = (event) => {
            //     document.querySelector('form').reset()  // reset button form
            //     // event.target.parentElement.reset()
            //     // document.querySelectorAll('input').forEach((i)=>{return i.value=''})
            //     // Array.from(document.querySelectorAll('input')).map((i)=>{return i.value=''})
            // }
        
            // capturedata = (event) => {
            //     this.setState({[event.target.name]:event.target.value})
            // }
        
            // savedata = () => {
            //     if(document.getElementsByName('name')[0].value=='' || document.getElementsByName('city')[0].value==''){
            //     console.log('fill value')
            //     }
            //     else{
            //         delete this.state.delAck
            //         fetch(saveurl, {
            //             method:'POST',
            //             headers:{
            //                 'accept':'application/json',
            //                 'content-type':'application/json'
            //             },
            //             body:JSON.stringify(this.state)
            //         })
            //         .then(res => res.json())
            //         .then(data => {
            //             document.getElementById('deltext').style.opacity='1'
            //             this.setState({delAck:`${JSON.stringify(data)}`})
            //         })
            //     }
            // }
        
            // // delete all data from user(Collection) & ackgment
            // deldata = () => {
            //     fetch(delurl, {method:'DELETE'})
            //     .then(res => res.json())
            //     .then(data => {
            //         document.getElementById('deltext').style.opacity=`1`
            //         this.setState({delAck:`${JSON.stringify(data)}`})
            //         console.log(data)
            //     })
            //     // setTimeout(this.fadeout,2000)
            // }
        
            // // to hide Ackmnt message
            // fadeout = () => {
            //     document.getElementById('deltext').style.opacity=`0`
            // }
        
            // render(){
            //     return(
            //         <div className='container mt-3'>
            //             <div className='out'>
            //                 <div className='tile'>A</div>
            //                 <div className='tile'>B</div>
            //                 <div className='tile'>C</div>
            //             </div>
        
            //             {/* <form method='POST' action='http://localhost:9090/data' target="frame">
                            
            //                 <input type="text" name="name" placeholder="name" required/>
            //                 <input type="text" name="city" placeholder='city' required/>
        
            //                 <input type="submit"/>
            //                 <input type='reset'/>
                            
            //             </form>
            //             <iframe id="frame" name="frame" className='w-100 mt-4 border border-dark'></iframe> */}
                        
            //             <div onChange={this.capturedata} className='form'>
            //                 <p id='warning'></p>
        
            //                 <input type='text' name='name' placeholder='name' required/>
            //                 <input type='text' name='city' placeholder='city' required/>
        
            //                 <button onClick={this.resetField}>sd</button>
            //                 <button onClick={this.savedata}>submit</button>
        
            //             </div>
        
            //             <iframe id="frame" name="frame" className='w-100 mt-4 border border-dark'>
        
            //             </iframe>
        
            //             <button onClick={this.deldata}>DELETE</button>
                        
            //             <p id="deltext" style={{background:'red',color:'white',transition:'1s',padding:'10px',marginTop:'10px'}}>
            //                 {this.state.delAck}
            //             </p>
        
            //             <div style={{overflow:'hidden',border:'1px solid black'}}>
                        
            //                 <div id='one'>
                                
            //                 </div>
            //                 <div id='two'>
                                
            //                 </div>
            //             </div>
            //         </div>
            // )}


            //////------> Quiz ----------------

            