import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchCompany } from './CompanyActions'
import CompanyTable from './CompanyTable'



class CompanyContainer extends React.Component {

    constructor(props) {
        super(props);
        this.onViewCompany = this.onViewCompany.bind(this);
    }

    componentDidMount() {
        this.props.loadData()
    }

    onViewCompany(element) {
        // console.log('hice click');
        // this.context.router.transitionTo('/Contact');
        // let x =this.props.companies;
        // let param = '?id='+id;
        // console.log(param);
        // let update = this.onUpdateCompany
        
        this.props.history.push({
            pathname: '/Company/viewCompany',
            search: '',
            state: {element}
        });
        
    }

    render() {
        return (
            <div className="col-md-10 class-container">
                {/* <h1>Companies</h1> */}
                <div className="card-table">
                    <CompanyTable companies={this.props.companies} onViewCompany={this.onViewCompany} />
                </div>
                {/* <Link  to={`${this.props.match.url}/viewCompany`}>
                <CompanyView />
                </Link> */}
            </div>
        );
    }

    
}

CompanyContainer.propTypes = {
    companies: PropTypes.array,
    loadData: PropTypes.func,
    history: PropTypes.func
}

CompanyContainer.defaultProps = {
    companies: [],
    loadData: () => { },
    history: () => {}
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



export default connect(mapStateToProps, mapDispatchToProps)(CompanyContainer);