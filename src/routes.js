import React from 'react'
import Landing from './components/Landing/Landing.jsx'
import About from './components/About/About'
import {Switch, Route} from 'react-router-dom'

export default (
    <Switch>
        <Route exact path="/"       component={Landing}/>
        <Route       path="/about"  component={About}/>
    </Switch>
)