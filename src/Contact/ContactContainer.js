import React from 'react'
import ContactTable from './ContactTable'

class ContactContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:2000/Contact').then((data) => {
            //console.log(data)
            return data.json()
          }).then((contact) => {
            //console.log(todos)
            this.setState({ contacts: contact })
          })
    }


    render() {
        return (
            <div>
                <h1>Contacts</h1>
                <ContactTable contacts={this.state.contacts} />
            </div>
        );
    }
}

export default ContactContainer;