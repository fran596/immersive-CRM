import React from 'react'
import ContactTable from './CompanyTable'

class CompanyContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            companies: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:2000/Company').then((data) => {
            //console.log(data)
            return data.json()
          }).then((company) => {
            //console.log(todos)
            this.setState({ companies: company })
          })
    }


    render() {
        return (
            <div>
                <h1>Companies</h1>
                <ContactTable companies={this.state.companies} />
            </div>
        );
    }
}

export default CompanyContainer;