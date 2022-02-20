import React from 'react';
import './list.css';

var n=2;

const List = () => {

    const saveTitle = (event) => {
        localStorage.setItem('Title',event.target.value)
    }

    const createField = (event) => {
        console.log(Number(event.target.id)+1)
        
        if(event.code == 'Enter' || event.code == 'NumpadEnter'){
            
            var box = document.createElement('div');
            box.id=n;
            box.className="mb-2"
            var check = document.createElement('input');
            check.type="checkbox";
            check.id=n;
            check.className='form-check-input cbox';
            var field = document.createElement('input');
            field.id=n;
            field.className='ibox';
            box.appendChild(check);
            box.appendChild(field);
            document.getElementById('list-box').appendChild(box);
            document.getElementById(Number(event.target.id)+1).children[1].focus();
            document.getElementById(n).children[0].addEventListener('change',strike);
            document.getElementById(n).addEventListener('keydown',createField);
            n++;
        }
    }
    const strike = (event) => {
        var check = document.getElementById(event.target.id).children[1].style.textDecoration;
        if(check == '' || check == 'none'){
            document.getElementById(event.target.id).children[1].style.textDecoration='line-through'
        }
        else{
            document.getElementById(event.target.id).children[1].style.textDecoration='none'
        }
    }
    return(
        <div className='container'>
            <div className='row'>
                <input placeholder='Heading' onChange={saveTitle}></input>
                <div id="list-box">
                    <div id="1" className='mb-2'>
                        <input type="checkbox" onChange={strike} id="1" className='form-check-input cbox'></input>
                        <input onKeyDown={createField} id='1' className='ibox'></input>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default List