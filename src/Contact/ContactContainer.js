import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ContactTable from './ContactTable'
import { fetchContact } from './ContactActions'

class ContactContainer extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.loadData()
    }


    render() {
        return (
            <div className="col-md-10 class-container">
                {/* <h1>Contacts</h1> */}
                <div className="card-table">
                    <ContactTable contacts={this.props.contacts} />
                </div>
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



export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer);