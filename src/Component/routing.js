import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home/home';
import List from './List/list';
import Play from './Play/play';
import Form from './Form/form';
import Record from './Form/record';
import Carousel from './Carousel/carousel';
import Spinner from './Spinner/spinner';
import Login from './Login/login';
import Ptc from './Practice/ptc';
import Header from './Header/header'

const Routing = () => {
    return(
        <BrowserRouter>
        <Header/>
            <Route exact path='/' component={Home}/>
            <Route path='/list' component={List}/>
            <Route path='/play' component={Play}/>
            <Route path='/form' component={Form}/>
            <Route path='/record' component={Record}/>
            <Route path='/carousel' component={Carousel}/>
            <Route path='/spinner' component={Spinner}/>
            <Route path='/login' component={Login}/>
            <Route path='/practice' component={Ptc}/>
        </BrowserRouter>
    )
}
export default Routing;