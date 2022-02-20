import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home/home';
import List from './List/list'

const Routing = () => {
    return(
        <BrowserRouter>
            <Route exact path='/' component={Home}/>
            <Route path='/list' component={List}/>
        </BrowserRouter>
    )
}
export default Routing;