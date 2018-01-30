import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchCompany } from './CompanyActions'
import CompanyTable from './CompanyTable'


class CompanyContainer extends React.Component {

    constructor(props) {
        super(props);
        
    }

    componentDidMount(){
        this.props.loadData()
    }


    render() {
        //console.log(this.props)
        return (
            <div>
                <h1>Companies</h1>
                <CompanyTable companies={this.props.companies} />
            </div>
        );
    }
}

CompanyContainer.propTypes = {
    companies: PropTypes.array,
    loadData: PropTypes.func
}

CompanyContainer.defaultProps = {
    companies: [],
    loadData: () => { }
}

function mapStateToProps(state) {
    return {
        companies: state.company.companies
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => {
            dispatch(fetchCompany())
          }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CompanyContainer) ;