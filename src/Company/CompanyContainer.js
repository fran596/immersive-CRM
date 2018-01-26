import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchCompany } from './CompanyActions'
import ContactTable from './CompanyTable'


class CompanyContainer extends React.Component {

    constructor(props) {
        super(props);
        
    }

    componentDidMount(){
        fetch('http://localhost:2000/Company').then((data) => {
            return data.json()
          }).then((company) => {
            this.props.fetchCompany(company)
          })
    }


    render() {
        //console.log(this.props)
        return (
            <div>
                <h1>Companies</h1>
                <ContactTable companies={this.props.companies} />
            </div>
        );
    }
}

CompanyContainer.propTypes = {
    companies: PropTypes.array,
    fetchCompany: PropTypes.func
}

CompanyContainer.defaultProps = {
    companies: [],
    fetchCompany: () => { }
}

function mapStateToProps(state) {
    return {
        companies: state.company.companies
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCompany: value => dispatch(fetchCompany(value))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CompanyContainer) ;