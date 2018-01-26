import React from 'react'
import CompanyContainer from './Company/CompanyContainer.js'
import ContactContainer from './Contact/ContactContainer.js';
import HeaderContainer from './Header/HeaderContainer.js'



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