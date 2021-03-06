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
import Ptc from './Practice/practice';
import Header from './Header/header';
import Quiz from './Quiz/quiz';
import Addquiz from './Quiz/addquiz'

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
            <Route path='/quiz' component={Quiz}/>
            <Route path='/addquiz' component={Addquiz}/>
        </BrowserRouter>
    )
}
export default Routing;