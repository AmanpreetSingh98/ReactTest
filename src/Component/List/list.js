import React from 'react';
import './list.css';

var n=2;

const List = () => {

    const saveTitle = (event) => {
        localStorage.setItem('Title',event.target.value)
    }

    const createField = (event) => {
        document.getElementById('text').innerText=event.keyCode;
        if(event.code == 'Enter' || event.code == 'NumpadEnter' || event.keyCode == 13){
            
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
            var btn = document.createElement('button');
            btn.className='cross';
            btn.appendChild(document.createTextNode("✕"));
            box.appendChild(check);
            box.appendChild(field);
            box.appendChild(btn);
            document.getElementById('list-box').appendChild(box);
            document.getElementById(Number(event.target.id)+1).children[1].focus();
            document.getElementById(n).children[0].addEventListener('change',strike);
            document.getElementById(n).addEventListener('keydown',createField);
            document.getElementById(n).children[2].addEventListener('click',removeNote);
            n++;
        }
    }
    const strike = (event) => {
        var check = document.getElementById(event.target.id).children[1].style.textDecoration;
        if(check == '' || check == 'none'){
            document.getElementById('checked').append(document.getElementById(event.target.id))
            document.getElementById(event.target.id).children[1].style.textDecoration='line-through'
        }
        else{
            document.getElementById('list-box').append(document.getElementById(event.target.id))
            document.getElementById(event.target.id).children[1].style.textDecoration='none'
        }
    }
    const removeNote = (event) => {
        console.log(event.path[1].id)
        document.getElementById('list-box').removeChild(document.getElementById(`${event.path[1].id}`))
    }
    const drag = (event) => {

    }
    return(
        <div className='container'>
            <div className='row mt-3'>
                <input placeholder='Title..&#9999;' onChange={saveTitle} className='w-75 m-auto'></input>
                <p id="text"></p>
                <div id="list-box">
                    <div id="1" className='mb-2' draggable="true" onDragStart={drag}>
                        <input type="checkbox" onChange={strike} id="1" className='form-check-input cbox'></input>
                        <input onKeyDown={createField} id='1' className='ibox'></input>
                        <button className='cross' onClick={removeNote}>	&#10005;</button>
                    </div>
                </div>
                <div id="checked">
                    <hr/>
                    <p>checked</p>

                </div>
            </div>
        </div>
    )
}
export default List