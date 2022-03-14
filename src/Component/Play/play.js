import react,{Component} from "react";
import './play.css'
const color = ['red','blue','orange','pink','magenta','brown','yellow']
var count = 1;
class Play extends Component {
    constructor(){
        super()
        this.state={
            data:''
        }
        console.log('constructor')
    }

    handleText = (event) => {
        var n = color[Math.floor(Math.random()*color.length)]
        console.log(n)
        document.getElementById('inText').style.border=`2px solid ${n}`;
    }
    changeBorder = () => {
        
        if(count==1){
            document.getElementById('box').style.border="5px dotted rgb(7, 189, 7)";
            count++;
        }
        else if(count == 2){
            document.getElementById('box').style.border="5px dashed rgb(7, 189, 7)";
            count++;
        }
        else if(count == 3){
            document.getElementById('box').style.border="5px double rgb(7, 189, 7)";
            count++;
        }
        else if(count == 4){
            document.getElementById('box').style.border="5px groove rgb(7, 189, 7)";
            count++;
        }
        else if(count == 5){
            document.getElementById('box').style.border="5px solid rgb(7, 189, 7)";
            count++;
        }
        else if(count == 6){
            count = 1;
            document.getElementById('box').style.border="5px dotted rgb(7, 189, 7)";
            count++;
        }
    }
    changeHeight = (event) => {
        // console.log(event.target.value)
        document.getElementById('box').style.height=`${event.target.value}vh`;
    }
    render(){
        console.log('render')
        return(
            <div id="box">
                <button onClick={this.changeBorder} className="m-auto w-50 mt-5 btn btn-light" id="bordr">changeBorder</button>
                <input onChange={this.changeHeight}/>
                <input onChange={this.changeHeight} type="range" min="40" max="50" defaultValue='0' className="mt-5 form-range" />
            </div>
            // <div className="container w-50 m-auto">
            //     <input id='inText' onChange={this.handleText}/>
            // </div>
        )
    }
    componentDidMount() {
        console.log('compDidMount')
        document.getElementById('box').style.height='100vh'
    }
}
export default Play