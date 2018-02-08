import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addCompany } from './CompanyActions'


class CompanyNew extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            phone: ''
        },
        this.onAddCompany = this.onAddCompany.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onAddressChange = this.onAddressChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
    }


    onNameChange(ev) {
        this.setState({ name: ev.target.value })
    }

    onAddressChange(ev) {
        this.setState({ address: ev.target.value })
    }

    onPhoneChange(ev) {
        this.setState({ phone: ev.target.value })
    }

    onAddCompany() {
        let newCompany = {
            name: this.state.name,
            address: this.state.address,
            phone: this.state.phone
        }
        this.props.addCompany(newCompany)
        this.props.history.push({
            pathname: '/Company',
            search: '',
            state: {}
        });
    }

    render() {
        let element = this.state;
        return (
            <div className="col-md-10 class-container">
                <div className="card-table card-edit">
                    <h3>New Company</h3>
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
                    <button className="btn btn-primary card-button" onClick={this.onAddCompany}>Submit</button>
                </div>
            </div>
        );
    }
}


CompanyNew.propTypes = {
    addCompany: PropTypes.func,
    history: PropTypes.object
}

CompanyNew.defaultProps = {
    addCompany: () => {},
    history: null
}


function mapStateToProps(state) {
    return {
        companies: state.company.companies
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addCompany: company => dispatch(addCompany(company))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CompanyNew);


