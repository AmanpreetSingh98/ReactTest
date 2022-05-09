import React,{Component} from 'react';
import './quiz.css'

let url = 'https://formnode.herokuapp.com/mcq'
let ans = [];
let count=0;

class Quiz extends Component {
    constructor(){
        super()
        this.state={
            data:''
        }
    }
    saveAns = (event) => {
        ans.push(event.target)
        event.target.classList.toggle('green')
        event.target.parentElement.style.pointerEvents='none'
        if(ans.length==this.state.data.length){
            document.getElementsByClassName('sub-btn')[0].style.pointerEvents='all';
            document.getElementsByClassName('sub-btn')[0].style.opacity='1'
        }
    }
    validate = () => {
        ans.map((data, i) => {
            if(data.innerText==this.state.data[i].answer){
                count++;
            }
            else{
                data.style.background='red'
                data.parentElement.parentElement.style.background='#ffdddd'
                data.parentElement.innerText=`Correct answer : ${this.state.data[i].answer}`
            }
        })
        document.getElementsByClassName('score')[0].innerText=`You Scored ${count}/${this.state.data.length}`
    }
    
    renderdata = () => {
        if(this.state.data){
            return this.state.data.map((data, i) => {
                return(
                    <div className='mt-3 p-3 border-top' key={data._id} id={data.id}>
                    <div className='fs-5'>
                        {i+1}. {data.question}
                    </div>
                    <div className='d-flex mt-4 justify-content-between options'>
                        <span className='border rounded px-2 border-success' onClick={this.saveAns}>{data.options[0]}</span>
                        <span className='border rounded px-2 border-success' onClick={this.saveAns}>{data.options[1]}</span>
                        <span className='border rounded px-2 border-success' onClick={this.saveAns}>{data.options[2]}</span>
                        <span className='border rounded px-2 border-success' onClick={this.saveAns}>{data.options[3]}</span>
                    </div>
                </div>
                )
            })
        }
        else{
            return(
                <h3 className='text-center ani mt-5'>Loading...</h3>
            )
        }
    }
    render(){
        return(
            <div className='container pt-3'>
                <h3 className='text-center'>Quiz</h3>
                {this.renderdata()}
                <div className='my-4'>
                    <button className='btn-primary rounded sub-btn' onClick={this.validate}>Submit</button>
                    <span class='score'></span>
                </div>

            </div>
        )
    }
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then(res => res.json())
        .then(data => {
            this.setState({data:data})
            console.log(this.state.data)
        })
    }
}
export default Quiz;