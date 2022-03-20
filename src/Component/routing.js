import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home/home';
import List from './List/list';
import Play from './Play/play';
import Form from './Form/form';
import Record from './Form/record'

const Routing = () => {
    return(
        <BrowserRouter>
            <Route exact path='/' component={Home}/>
            <Route path='/list' component={List}/>
            <Route path='/play' component={Play}/>
            <Route path='/form' component={Form}/>
            <Route path='/record' component={Record}/>
        </BrowserRouter>
    )
}
export default Routing;