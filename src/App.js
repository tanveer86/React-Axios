import React from 'react';
import Nav from './components/Nav';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Students from './components/Students';
import StudentDetails from './components/StudentDetails';

function App(){
    return(
        <BrowserRouter>
            <Nav />
            <Route path="/" exact component={Home} />
            <Route path="/students" exact component={Students} />
            <Route path="/students/:id" exact component={StudentDetails} />
        </BrowserRouter>
    )
}

export default App;