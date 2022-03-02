import React,{Component} from 'react';
import './list.css';

var n=2;

class List extends Component {
    constructor(){
        super()
        this.state= {
            title:'',
            data:'ok'
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
            if(document.getElementById(event.target.id).children[1].value.search('\n') == 0){
                document.getElementById(event.target.id).children[1].value=''
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
        if(event.target.id=="1"){
        }
        else{
            document.getElementById(event.target.id).remove();
        }
    }
   
    render(){
        return(
            <div className='container'>
                <div className='row mt-3'>
                <input placeholder='Title..&#9999;' value={this.state.title} onChange={this.saveTitle} className='w-75 m-auto'></input>
                    <p id="text"></p>
                    <div id="list-box">
                        <div id="1" className='mb-2'>
                            <input type="checkbox" onChange={this.strike} id="1" className='form-check-input cbox'></input>
                            <textarea onKeyDown={this.createField} id='1' className='ibox'>

                            </textarea>
                            <button className='cross' id="1">&#10005;</button>
                        </div>
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
        this.setState({title:title})
    }  
}
export default List;