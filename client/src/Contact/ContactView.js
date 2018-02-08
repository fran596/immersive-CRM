import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {fetchCompany} from '../Company/CompanyActions'
import { updateContact, deleteContact } from './ContactActions'

class ContactView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: this.props.location.state.element
        },
        this.onUpdateContact = this.onUpdateContact.bind(this);
        this.onDeleteContact = this.onDeleteContact.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
        this.onPositionChange = this.onPositionChange.bind(this);
        this.onDropdownClick = this.onDropdownClick.bind(this);
    }

    componentDidMount() {
        if (this.props.companies === []) {
            this.props.fetchCompany()
        }
    }

    onNameChange(ev) {
        let el = this.state.item
        el.name = ev.target.value
        this.setState({ item: el })
    }

    onEmailChange(ev) {
        let el = this.state.item
        el.address = ev.target.value
        this.setState({ item: el })
    }

    onPhoneChange(ev) {
        let el = this.state.item
        el.phone = ev.target.value
        this.setState({ item: el })
    }

    onDropdownClick(ev){
        let el = this.state.item
        el.company = ev.target.getAttribute('value')
        let newCompany = this.props.companies.filter(function(item){
            if(item.name === el.company){
                return item
            }
        })
        el.company_id = newCompany[0]._id
        this.setState({ item: el })
    }

    onPositionChange(ev){
        let el = this.state.item
        el.position = ev.target.value
        this.setState({ item: el })
    }



    onUpdateContact() {
        try {
            // this.props.updateContactsCompany(newContacts)
            this.props.updateContact(this.state.item)
            this.props.history.push({
                pathname: '/Contact',
                search: '',
                state: {}
            });
        } catch (error) {
            // console.log(error)
        }
    }

    onDeleteContact(){
        let contact = this.props.location.state.element;
        this.props.deleteContact(contact._id)
    }

    render() {
        let element = this.props.location.state.element;
        let onDropdownClick = this.onDropdownClick
        return (
            <div className="col-md-10 class-container">
                <div className="card-table card-edit animated fadeIn">
                    <h3>Edit Contact</h3>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input className="form-control" type="text" value={element.name} id="name" onChange={this.onNameChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Email:</label>
                        <input className="form-control" type="text" value={element.email} id="email" onChange={this.onEmailChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input className="form-control" type="text" value={element.phone} id="phone" onChange={this.onPhoneChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Company:</label>
                        {/* <input className="form-control" type="text" value={element.company} id="phone" onChange={this.onCompanyChange} /> */}
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" 
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {/* Select Company */}
                                {element.company}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {
                                    this.props.companies.map(function (item) {
                                        return <div className="dropdown-item" onClick={onDropdownClick} key={item._id} value={item.name} > {item.name} </div >
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Position:</label>
                        <input className="form-control" type="text" value={element.position} id="position" onChange={this.onPositionChange} />
                    </div>
                    <button className="btn btn-primary card-button" onClick={this.onUpdateContact}>Save</button>
                    <button type="submit" className="btn btn-primary card-button btn-danger" onClick={this.onDeleteContact}>Delete</button>
                </div>
            </div>
        );
    }
}

ContactView.propTypes = {
    companies: PropTypes.array,
    contacts: PropTypes.array,
    updateContact: PropTypes.func,
    deleteContact: PropTypes.func,
    location: PropTypes.any,
    fetchCompany: PropTypes.func,
    history: PropTypes.object
}

ContactView.defaultProps = {
    companies: [],
    contacts: [],
    updateContact: () => {},
    deleteContact: () => {},
    location: null,
    fetchCompany: () => {},
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
        fetchCompany: dispatch(fetchCompany()),
        updateContact: element => dispatch(updateContact(element)),
        deleteContact: id => dispatch(deleteContact(id))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ContactView);


