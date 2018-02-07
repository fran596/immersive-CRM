import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ContactContainer from './Contact/ContactContainer'
import ContactView from './Contact/ContactView'
import ContactNew from './Contact/ContactNew'
import HeaderContainer from './Header/HeaderContainer'
import SideBarContainer from './SideBar/SideBarContainer'
import CompanyRouter from './Company/CompanyRouter'
import CompanyContainer from './Company/CompanyContainer'
import CompanyView from './Company/CompanyView'
import ContactRouter from './Contact/ContactRouter'
import HomeContainer from './Home/HomeContainer'
import CompanyNew from './Company/CompanyNew'



const App = () => {
    return (
        <div>
            <HeaderContainer />
            <div className="container-fluid" >
                <div className="row">
                    <SideBarContainer />
                    <Switch>
                        <Route exact path='/' component={HomeContainer} />
                        <Route exact path='/Company' component={CompanyContainer} />
                        {/* {CompanyRouter} */}
                        {/* {ContactRouter} */}
                        <Route exact path="/Company/viewCompany" component={CompanyView} />
                        <Route exact path="/Company/newCompany" component={CompanyNew} />
                        <Route exact path='/Contact' component={ContactContainer} />
                        <Route exact path='/Contact/newContact' component={ContactNew} />
                        <Route exact path='/Contact/viewContact' component={ContactView} />
                    </Switch>
                </div>
            </div>
        </div>
    );
}


export default App