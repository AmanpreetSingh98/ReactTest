import React,{Component} from 'react';
import './list.css';

var n=2;
if(localStorage.getItem('list')){
    var arr = [];
    arr = JSON.parse(localStorage.getItem('list'));
    var n = arr.length+1;
}
else{
    var arr = [];
}


class List extends Component {
    constructor(){
        super()
        this.state= {
            title:'',
            data:''
        }
    }

    renderNote = () => {
        if(this.state.data){
            return this.state.data.map((item) => {
                return(
                    <div id={item.id} className='mb-2'>
                        <input type="checkbox" onChange={this.strike} id={item.id} className='form-check-input cbox'></input>
                        <textarea onKeyUp={this.createField} id={item.id} className='ibox' defaultValue={item.note} style={{textDecoration:`${item.tdecor}`}}></textarea>
                        <button onClick={this.removeNote} className='cross' id={item.id}>&#10005;</button>
                    </div>
                )
            })
        }
        else{
            return(
                <div id="1" className='mb-2'>
                    <input type="checkbox" onChange={this.strike} id="1" className='form-check-input cbox'></input>
                    <textarea onKeyUp={this.createField} id='1' defaultValue="" className='ibox'></textarea>
                    <button onClick={this.removeNote} className='cross' id="1">&#10005;</button>
                </div>
            )
        }
    }
    saveTitle = (event) => {
        this.setState({title:event.target.value})
        localStorage.setItem('Title',event.target.value)
    }

    createField = (event) => {
        
        // document.getElementById('txt').innerText=`keyCode: ${event.keyCode} which:${event.which}`;
        if(event.keyCode == '13' || event.code == 'Enter' || event.code == 'NumpadEnter'){
            if(document.getElementById(event.target.id).nextSibling){
                document.getElementById(event.target.id).nextSibling.children[1].focus()
            }
            else{
                var box = document.createElement('div');
                box.id=n;
                box.className="mb-2"
                var check = document.createElement('input');
                check.type="checkbox";
                check.id=n;
                check.className='form-check-input cbox';
                var field = document.createElement('textarea');
                field.id=n;
                field.className='ibox';
                var btn = document.createElement('button');
                btn.className='cross';
                btn.id=n;
                btn.appendChild(document.createTextNode("???"));
                box.appendChild(check);
                box.appendChild(field);
                box.appendChild(btn);
                document.getElementById('list-box').appendChild(box);
                document.getElementById(event.target.id).nextSibling.children[1].focus();
                document.getElementById(event.target.id).children[1].value=document.getElementById(event.target.id).children[1].value.replace(/\n/g,'')
                document.getElementById(n).children[0].addEventListener('change',this.strike);
                document.getElementById(n).children[1].addEventListener('keyup',this.createField);
                document.getElementById(n).children[2].addEventListener('click',this.removeNote);
                n++;
            }
        }
        else{
            
            var d = event.target.id;
            if(arr.length>0){
                arr.map((item) => {
                    if(item.id==d){
                        item.note=document.getElementById(event.target.id).children[1].value;
                    }
                    else{
                        arr.push({id:event.target.id,note:document.getElementById(event.target.id).children[1].value,tdecor:document.getElementById(event.target.id).children[1].style.textDecoration});
                    }
                })
            }
            else{
                arr.push({id:event.target.id,note:document.getElementById(event.target.id).children[1].value,tdecor:document.getElementById(event.target.id).children[1].style.textDecoration})
            }
            arr = [...new Map(arr.map(item => [item['id'],item])).values()]
            localStorage.setItem('list',JSON.stringify(arr));
        }
    }
    strike = (event) => {
        var check = document.getElementById(event.target.id).children[1].style.textDecoration;
        if(check == '' || check == 'none'){
            document.getElementById(event.target.id).children[1].style.textDecoration='line-through';
            arr.map((item) => {
                if(item.id==event.target.id){
                    item.tdecor=document.getElementById(event.target.id).children[1].style.textDecoration;
                }
                else{
                }
            })
            localStorage.setItem('list',JSON.stringify(arr));
        }
        else{
            document.getElementById(event.target.id).children[1].style.textDecoration='none';
            arr.map((item) => {
                if(item.id==event.target.id){
                    item.tdecor=document.getElementById(event.target.id).children[1].style.textDecoration;
                }
                else{
                }
            })
            localStorage.setItem('list',JSON.stringify(arr));
        }
    }
    removeNote = (event) => {
        if(this.state.data){
            if(event.target.id=="1"){
            }
            else{
                arr.map((item, i) => {
                    if(item.id==event.target.id){
                        document.getElementById(event.target.id).remove();
                        arr.splice(i,1)
                    }
                    else{
                    }
                })
            }
            n = arr.length+1
            localStorage.setItem('list',JSON.stringify(arr));
        }
        else{
            if(event.target.id=="1"){
            }
            else{
                document.getElementById(event.target.id).remove();
            }
        }
    }
    reset = () => {
        n = 2;
        this.setState({data:''})
        this.setState({title:''})
        localStorage.removeItem('list')
        localStorage.removeItem('Title')
    }

    render(){
        return(
            <div className='container'>
                <div className='row mt-3'>
                    <input placeholder='Title..&#9999;' value={this.state.title?this.state.title:''} onChange={this.saveTitle}></input>
                    <button onClick={this.reset} className='btn btn-primary w-25 m-auto mt-2'>Reset</button>
                    <div id="list-box">
                        {this.renderNote()}
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        var title = localStorage.getItem('Title')
        var lst = JSON.parse(localStorage.getItem('list'))
        this.setState({title:title})
        this.setState({data:lst})
    }  
}
export default List;