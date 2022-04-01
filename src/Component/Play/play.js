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
        document.getElementById('box').style.height=`${event.target.value}vh`;
    }
    render(){
        console.log('render')
        return(
            <div className="container" id="box">
                <button onClick={this.changeBorder} className="btn btn-warning w-50 mt-5" id="bordr">changeBorder</button>
                <input onChange={this.changeHeight} type="range" min="30" max="100" defaultValue='0' className="mt-5 form-range" />
            </div>
        )
    }
    componentDidMount() {
        console.log('compDidMount')
        document.getElementById('box').style.height='100vh'
    }
}
export default Play