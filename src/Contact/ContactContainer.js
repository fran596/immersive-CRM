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
        // fetch('http://localhost:2000/Contact').then((data) => {
        //     return data.json()
        //   }).then((contact) => {
        //     this.props.fetchContact(contact)
        //   })
        this.props.loadData()
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
    loadData: PropTypes.func
}

ContactContainer.defaultProps = {
    contacts: [],
    loadData: () => { }
}

function mapStateToProps(state) {
    return {
        contacts: state.contact.contacts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => {
            dispatch(fetchContact())
          }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer) ;