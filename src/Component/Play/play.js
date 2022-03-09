import react,{Component} from "react";
import './play.css'
const color = ['red','blue','orange','pink','magenta','brown','yellow']

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
    stChange = (event) => {
        this.setState({data:event.target.id})
    }
    render(){
        console.log('render')
        return(
            <div className="container w-50 m-auto">
                <input id='inText' onChange={this.handleText}/>
                <button id="butn" onClick={this.stChange}>ChangeState</button>
            </div>
        )
    }
    componentDidMount() {
        console.log('compDidMount')
    }
}
export default Play