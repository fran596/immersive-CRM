import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ContactTable from './ContactTable'
import { fetchContact } from './ContactActions'

class ContactContainer extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount(){
        fetch('http://localhost:2000/Contact').then((data) => {
            return data.json()
          }).then((contact) => {
            this.props.fetchContact(contact)
          })
    }


    render() {
        return (
            <div>
                <h1>Contacts</h1>
                <ContactTable contacts={this.props.contacts} />
            </div>
        );
    }
}

ContactContainer.propTypes = {
    contacts: PropTypes.array,
    fetchContact: PropTypes.func
}

ContactContainer.defaultProps = {
    contacts: [],
    fetchContact: () => { }
}

function mapStateToProps(state) {
    return {
        contacts: state.contact.contacts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchContact: value => dispatch(fetchContact(value))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer) ;