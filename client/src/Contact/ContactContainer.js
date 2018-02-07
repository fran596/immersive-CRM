import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ContactTable from './ContactTable'
import { fetchContact } from './ContactActions'

class ContactContainer extends React.Component {

    constructor(props) {
        super(props);
        this.onViewContact = this.onViewContact.bind(this);
    }

    componentDidMount() {
        this.props.loadData()
    }

    onViewContact(element) {
        // console.log(this.props)
        this.props.history.push({
            pathname: '/Contact/viewContact',
            search: '',
            state: {element}
        });
    }

    render() {
        return (
            <div className="col-md-10 class-container">
                {/* <h1>Contacts</h1> */}
                <div className="card-table">
                    <ContactTable contacts={this.props.contacts} onViewContact={this.onViewContact} />
                </div>
            </div>
        );
    }
}

ContactContainer.propTypes = {
    contacts: PropTypes.array,
    loadData: PropTypes.func,
    history: PropTypes.object
}

ContactContainer.defaultProps = {
    contacts: [],
    loadData: () => { },
    history: null
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



export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer);