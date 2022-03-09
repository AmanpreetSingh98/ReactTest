import React,{Component} from 'react';
import './list.css';

var n=2;
if(localStorage.getItem('list')){
    var arr = [];
    arr = JSON.parse(localStorage.getItem('list'));
    var n = arr.length+1;
    console.log(arr)
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
            // var lst = JSON.parse(localStorage.getItem('list'))
            return this.state.data.map((item) => {
                return(
                    <div id={item.id} className='mb-2'>
                        <input type="checkbox" onChange={this.strike} id={item.id} className='form-check-input cbox'></input>
                        <textarea onKeyDown={this.createField} id={item.id} className='ibox' defaultValue={item.note}></textarea>
                        <button onClick={this.removeNote} className='cross' id={item.id}>&#10005;</button>
                    </div>
                )
            })
        }
        else{
            return(
                <div id="1" className='mb-2'>
                    <input type="checkbox" onChange={this.strike} id="1" className='form-check-input cbox'></input>
                    <textarea onKeyDown={this.createField} id='1' className='ibox'></textarea>
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
        if(event.code == 'Enter' || event.code == 'NumpadEnter' || event.keyCode == 13){
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
                btn.appendChild(document.createTextNode("✕"));
                box.appendChild(check);
                box.appendChild(field);
                box.appendChild(btn);
                console.log(box)
                document.getElementById('list-box').appendChild(box);
                n++;
                document.getElementById(event.target.id).nextSibling.children[1].focus();
                document.getElementById(event.target.id).children[1].value=document.getElementById(event.target.id).children[1].value.replace(/\n/g,'')
                document.getElementById(n-1).children[0].addEventListener('change',this.strike);
                document.getElementById(n-1).children[1].addEventListener('keydown',this.createField);
                document.getElementById(n-1).children[2].addEventListener('click',this.removeNote);
            }
        }
        else{
            console.log('else')
            if(document.getElementById(event.target.id).children[1].value.search('\n') == 0){
                document.getElementById(event.target.id).children[1].value='';
                
            }
            else{
                var d = event.target.id;
                if(arr.length>0){
                    arr.map((item) => {
                        if(item.id==d){
                            item.note=document.getElementById(event.target.id).children[1].value;
                            // console.log('exists')
                        }
                        else{
                            console.log('not')
                            arr.push({id:event.target.id,note:document.getElementById(event.target.id).children[1].value});
                        }
                    })
                }
                else{
                    arr.push({id:event.target.id,note:document.getElementById(event.target.id).children[1].value})
                }
                arr = [...new Map(arr.map(item => [item['id'],item])).values()]
                console.log(arr)
                localStorage.setItem('list',JSON.stringify(arr));
                // this.setState({lt:ob})
            }
        }
    }
    strike = (event) => {
        var check = document.getElementById(event.target.id).children[1].style.textDecoration;
        if(check == '' || check == 'none'){
            document.getElementById('checked').append(document.getElementById(event.target.id))
            document.getElementById(event.target.id).children[1].style.textDecoration='line-through';
        }
        else{
            document.getElementById('list-box').append(document.getElementById(event.target.id))
            document.getElementById(event.target.id).children[1].style.textDecoration='none'
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
                console.log('adfadsf')
                document.getElementById(event.target.id).remove();
            }
        }
        
    }

   
    render(){
        return(
            <div className='container'>
                <div className='row mt-3'>
                    {this.state.lt}
                <input placeholder='Title..&#9999;' value={this.state.title} onChange={this.saveTitle} className='w-75 m-auto'></input>
                    <p id="text"></p>
                    <div id="list-box">
                        {this.renderNote()}
                    </div>
                    <hr/>
                    <div>
                        <p>checked</p>
                        <div id="checked">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        var title = localStorage.getItem('Title')
        var lst = JSON.parse(localStorage.getItem('list'))
        this.setState({data:lst})
        this.setState({title:title})
    }  
}
export default List;