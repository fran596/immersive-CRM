import React from 'react'
import CompanyRow from './CompanyRow'
import PropTypes from 'prop-types'

const CompanyTable = (props) => {
    // console.log(props)
    var aux = props;
    return (
        <table className="table table-condensed table-hover table-bg">
            <thead className="thead-bg " >
                <tr>
                    <th scope="col" >Name</th>
                    <th scope="col" >Address</th>
                    <th scope="col" >Phone</th>
                </tr>
            </thead>
            <tbody>
            {
                 
                 props.companies.map(function (company) {
                    //console.log(company);
                return <CompanyRow key={company._id} company={company} onViewCompany={aux.onViewCompany} />
            })}
            </tbody>
        </table>
    );

}

CompanyTable.propTypes = {
    companies: PropTypes.array
}

CompanyTable.defaultProps = {
    companies: [],
}

export default CompanyTable;