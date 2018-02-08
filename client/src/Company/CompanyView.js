import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateCompany, deleteCompany } from './CompanyActions'
import { updateContactsCompany, fetchContact, deleteContactsCompany } from '../Contact/ContactActions'
import CompanyContactsTable from './CompanyContacts/CompanyContactsTable'

class CompanyView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            companyName: this.props.location.state.element.name,
            item: this.props.location.state.element
        },
        this.onUpdateCompany = this.onUpdateCompany.bind(this);
        this.onDeleteCompany = this.onDeleteCompany.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onAddressChange = this.onAddressChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
    }

    componentDidMount() {
        if (this.props.contacts === []) {
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
        let companyName = this.state.item.name
        this.setState({companyName: companyName})
        let companyID = this.state.item._id
        //console.log(companyID)
        let newContacts = this.props.contacts.map(function (el) {
            el.company = companyName
            el.company_id = companyID
            //console.log(el)
            return el
        })
        let test = {old: this.state.companyName, new: companyName}
        // console.log(test)
        try {
            this.props.updateContactsCompany(newContacts,test)
            this.props.updateCompany(this.state.item)
        } catch (error) {
            // console.log(error)
        }
    }

    onDeleteCompany(){
        let company = this.props.location.state.element;
        this.props.deleteCompany(company._id)
        this.props.deleteContactsCompany(company.name)
        this.props.history.push({
            pathname: '/Company',
            search: '',
            state: {}
        });
    }

    render() {
        let element = this.props.location.state.element;
        // console.log(element)
        return (
            <div className="col-md-10 class-container ">
                <div className="card-table card-edit animated fadeIn">
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
                    <button type="submit" className="btn btn-primary card-button btn-danger" onClick={this.onDeleteCompany}>Delete</button>
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

CompanyView.propTypes = {
    contacts: PropTypes.array,
    updateContactsCompany: PropTypes.func,
    updateCompany: PropTypes.func,
    deleteCompany: PropTypes.func,
    deleteContactsCompany: PropTypes.func,
    fetchContact: PropTypes.func,
    location: PropTypes.any,
    history: PropTypes.object
}

CompanyView.defaultProps = {
    contacts: [],
    updateContactsCompany: () => {},
    updateCompany: () => {},
    deleteCompany: () => {},
    deleteContactsCompany: () => {},
    fetchContact: () => {},
    location: null,
    history: null
}

function mapStateToProps(state) {
    return {
        companies: state.company.companies,
        contacts: state.contact.contacts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchContact: dispatch(fetchContact()),
        updateCompany: element => dispatch(updateCompany(element)),
        updateContactsCompany: (contacts, names) => dispatch(updateContactsCompany(contacts, names)),
        deleteCompany: id => dispatch(deleteCompany(id)),
        deleteContactsCompany: name => dispatch(deleteContactsCompany(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyView);


