import React,{Component} from 'react';
import './carousel.css'

class carousel extends Component{
    moveup = () => {
        console.log('dfd')
        var element = document.getElementsByClassName('imgvis');
        if(document.getElementById('car-box').lastChild == element[0]){
            element[0].classList.remove('imgvis')
            document.getElementsByClassName('imgbox')[0].classList.add('imgvis')
        }
        else{
            element[0].nextSibling.classList.add('imgvis')
            element[0].classList.remove('imgvis')
        }
    }
    start = () => {
        this.img=setInterval(this.moveup,3000)
    }
    stop = () => {
        clearInterval(this.img)
    }
    render(){
        return(
            <div className='container mt-4'>
                <div id='car-box' onMouseOver={this.stop} onMouseLeave={this.start} >
                    <div className='imgbox imgvis'>
                        <img src='https://i.ibb.co/YZVf0cM/waterdrop.jpg' className='iset' alt="img"/>    
                    </div>
                    <div className='imgbox'>
                        <img src='https://i.ibb.co/7YXtBx1/shoperia.jpg' className='iset' alt="img"/>
                    </div>
                    <div className='imgbox'>
                        <img src='https://i.ibb.co/vjz1rJS/lightangle.jpg' className='iset' alt="img"/>    
                    </div>
                    <div className='imgbox'>
                        <img src='https://i.ibb.co/MfwGGj6/radlig.jpg' className='iset' alt="img"/>    
                    </div>
                    <div className='imgbox'>
                        <img src='https://i.ibb.co/v41PGdY/c1.jpg' className='iset' alt="img"/>    
                    </div>
                </div>
                
            </div>
        )
    }
    componentDidMount(){
        this.start();
    }
    componentWillUnmount(){
        this.stop()
    }
}
export default carousel