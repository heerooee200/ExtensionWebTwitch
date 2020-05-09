import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Home from './home'
import ComboWindow from './comboWindow'
const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component = {Home}/>
            <Route exact path='/combo' component = {ComboWindow}/>
        </Switch>
    )
}
export default Routes;