import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SideBarCompanyContainer from './SideBarCompanyContainer'
import SideBarContactContainer from './SideBarContactContainer'


const SideBarContainer = () => {
    return (
        <nav className="col-md-2-New d-none d-md-block sidebar ">
            <div className="sidebar-sticky ">
                
                    <Switch>
                        <Route exact path='/Company' component={SideBarCompanyContainer} />
                        <Route path='/Contact' component={SideBarContactContainer} />
                    </Switch>
               
            </div>
        </nav>
    );
}

export default SideBarContainer