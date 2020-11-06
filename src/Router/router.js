import React from 'react';
import { BrowserRouter as Router, Route,} from "react-router-dom";
import CardRouter from '../Containers/item/item';
import FooClass from '../Containers/Home Page/Home'

class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path='/' component={FooClass}/>
                <Route exact path='/item' component={CardRouter}/>
            </Router>
        )
    }
}

export default AppRouter;