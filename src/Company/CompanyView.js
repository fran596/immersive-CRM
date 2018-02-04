import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateCompany } from './CompanyActions'
import { fetchContact, updateContactsCompany } from '../Contact/ContactActions'
import CompanyContactsTable from './CompanyContacts/CompanyContactsTable'

class CompanyView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            companyName: this.props.location.state.element.name,
            item: this.props.location.state.element,
            contacts: []
        },
            this.onUpdateCompany = this.onUpdateCompany.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onAddressChange = this.onAddressChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
    }

    componentDidMount() {
        if (this.props.contacts === {}) {
            this.props.fetchContact()
        }
    }

    onNameChange(ev) {
        let el = this.state.item
        el.name = ev.target.value
        this.setState({ item: el })
    }

    onAddressChange(ev) {
        let el = this.state.item
        el.address = ev.target.value
        this.setState({ item: el })
    }

    onPhoneChange(ev) {
        let el = this.state.item
        el.phone = ev.target.value
        this.setState({ item: el })
    }

    onUpdateCompany() {
        // let newContacts = this.props.contacts
        // this.setState({contacts: newContacts})
        let companyName = this.state.item.name
        let newContacts = this.props.contacts.map(function (el) {
            el.company = companyName
            return el
        })
        console.log(newContacts)
        try {
            this.props.updateContactsCompany(newContacts)
            this.props.updateCompany(this.state.item)
        } catch (error) {
            console.log(error)
        }


    }

    render() {
        let element = this.props.location.state.element;
        return (
            <div className="col-md-10 class-container">
                <div className="card-table card-edit">
                    <h3>Edit Company</h3>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input className="form-control" type="text" value={element.name} id="name" onChange={this.onNameChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input className="form-control" type="text" value={element.address} id="address" onChange={this.onAddressChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input className="form-control" type="text" value={element.phone} id="phone" onChange={this.onPhoneChange} />
                    </div>
                    <button className="btn btn-primary card-button" onClick={this.onUpdateCompany}>Save</button>
                    <button type="submit" className="btn btn-primary card-button btn-danger">Delete</button>
                </div>
                <div className="row class-container">
                    <div className="col-md-10">
                        <h1>List of Company Contacts</h1>
                        <CompanyContactsTable company={this.state.companyName} contacts={this.props.contacts} />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        companies: state.company.companies,
        contacts: state.contact.contacts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateCompany: element => dispatch(updateCompany(element)),
        fetchContact: dispatch(fetchContact()),
        updateContactsCompany: contacts => dispatch(updateContactsCompany(contacts))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CompanyView);


