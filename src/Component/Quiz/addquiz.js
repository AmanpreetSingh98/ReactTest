import React,{Component} from 'react';

let mcqurl = 'https://formnode.herokuapp.com/addmcq'

class AddQuiz extends Component {
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
export default AddQuiz;