import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addContact } from './ContactActions'
import {fetchCompany} from '../Company/CompanyActions'


class ContactNew extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id : 0,
            name: '',
            phone: '',
            email: '',
            position: '',
            company: '',
            company_id: '',
        },
        this.onAddContact = this.onAddContact.bind(this);
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
        this.setState({ name: ev.target.value })
    }

    onDropdownClick(ev){
        let newCompany = this.state.company
        let newCompany_id = this.state.company_id
        newCompany = ev.target.getAttribute('value')
        let aux = this.props.companies.filter(function(item){
            if(item.name === newCompany){
                return item
            }
        })
        newCompany_id = aux[0]._id
        // console.log(newCompany_id)
        this.setState({ company: newCompany, company_id: newCompany_id })
    }

    onPhoneChange(ev) {
        this.setState({ phone: ev.target.value })
    }

    onEmailChange(ev){
        this.setState({email: ev.target.value})
    }

    onPositionChange(ev){
        this.setState({position: ev.target.value})
    }

    onAddContact() {
        let newContact = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            position: this.state.position,
            company: this.state.company,
            company_id: this.state.company_id,
        }
        // console.log(newContact)
        this.props.addContact(newContact)
        this.props.history.push({
            pathname: '/Contact',
            search: '',
            state: {}
        });
    }

    render() {
        let element = this.state;
        let onDropdownClick = this.onDropdownClick
        let cont = 0
        return (
            <div className="col-md-10 class-container">
                <div className="card-table card-edit">
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
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" 
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {element.company}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {
                                    
                                    this.props.companies.map(function (item) {
                                        return <div className="dropdown-item" key={++cont} onClick={onDropdownClick} value={item.name} > {item.name} </div >
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Position:</label>
                        <input className="form-control" type="text" value={element.position} id="position" onChange={this.onPositionChange} />
                    </div>
                    <button className="btn btn-primary card-button" onClick={this.onAddContact}>Submit</button>
                </div>
            </div>
        );
    }
}


ContactNew.propTypes = {
    companies: PropTypes.array,
    addContact: PropTypes.func,
    fetchCompany: PropTypes.func,
    history: PropTypes.object
}

ContactNew.defaultProps = {
    companies: [],
    addContact: () => {},
    fetchCompany: () => {},
    history: null
}


function mapStateToProps(state) {
    return {
        companies: state.company.companies,
        contacts: state.company.contacts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCompany: dispatch(fetchCompany()),
        addContact: contact => dispatch(addContact(contact))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ContactNew);


