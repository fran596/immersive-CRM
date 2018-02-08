import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchContact } from '../Contact/ContactActions'
import { fetchCompany } from '../Company/CompanyActions'
import HomeProfileCard from './HomeProfileCard'
import ToDosContainer from './Todos/ToDosContainer';
import BarChartContainer from './BarChart/BarChartContainer'

class HomeContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchContact()
        this.props.fetchCompany()
    }

    render() {
        return (
            <div className="col-md-10">
                <div className="row">
                    <div className='col-md-4 class-container'>
                        <HomeProfileCard />
                    </div>
                    <div className='col-md-8 class-container float-right '>
                        <div className="card-table animated fadeInUp">
                            <div className=" card-todos">
                                <h5>What's for today?</h5>
                                <ToDosContainer />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 class-container">
                        <div className="card-table animated fadeInUp">
                            <div className="card-charts">
                                <h5>Your contacts distribution</h5>
                                <BarChartContainer contacts={this.props.contacts} companies={this.props.companies} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

HomeContainer.propTypes = {
    fetchCompany: PropTypes.func,
    fetchContact: PropTypes.func
}

HomeContainer.defaultProps = {
    fetchCompany: () => { },
    fetchContact: () => { }
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
        fetchCompany: dispatch(fetchCompany())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);