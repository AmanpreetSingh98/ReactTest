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
            document.getElementById('box').style.border="3px dotted rgb(7, 189, 7)";
            count++;
        }
        else if(count == 2){
            document.getElementById('box').style.border="3px dashed rgb(7, 189, 7)";
            count++;
        }
        else if(count == 3){
            document.getElementById('box').style.border="3px double rgb(7, 189, 7)";
            count++;
        }
        else if(count == 4){
            document.getElementById('box').style.border="3px groove rgb(7, 189, 7)";
            count++;
        }
        else if(count == 5){
            document.getElementById('box').style.border="3px solid rgb(7, 189, 7)";
            count++;
        }
        else if(count == 6){
            count = 1;
            document.getElementById('box').style.border="3px dotted rgb(7, 189, 7)";
            count++;
        }
    }
    render(){
        console.log('render')
        return(
            <div id="box">
                <button onClick={this.changeBorder} className="w-25 mt-5 m-auto btn btn-light" id="bordr">changeBorder</button>
            </div>
            // <div className="container w-50 m-auto">
            //     <input id='inText' onChange={this.handleText}/>
            // </div>
        )
    }
    componentDidMount() {
        console.log('compDidMount')
    }
}
export default Play