
import React, { Component } from 'react';
import { BrowserRouter as Router,  Route } from 'react-router-dom';

/* class RouteComp extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        {this.props.children}
                        <Route exact path='/'  />
                        <Route exact path='/Repo'  />
                    </div>
                </Router>
            </div>
        )
    }
}
 */
const RouteComp = (props) => <div>
    <Router>
        <div>
            {props.children}
            <Route exact path='/' />
            <Route exact path='/Repo' />
        </div>
    </Router>
</div>;


export default RouteComp;

