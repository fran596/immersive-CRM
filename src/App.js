import React from 'react'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Styles from './styles/app.css'



const App = () => {

    return (
        <div className="container-fluid" >
            <div className="row">
                <div className="col-md-12">
                    <h1>Test:</h1>
                    <button type="button" className="btn btn-primary">Primary</button>
                </div>
            </div>
        </div>
    );
}


export default App