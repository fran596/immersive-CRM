import React from 'react'
import CompanyContainer from './Company/CompanyContainer'
import ContactContainer from './Contact/ContactContainer';
import HeaderContainer from './Header/HeaderContainer'



const App = () => {

    return (
        <div>
            <HeaderContainer />
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-lg-6">
                        <CompanyContainer />
                    </div>
                    <div className="col-lg-6">
                    <ContactContainer />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App