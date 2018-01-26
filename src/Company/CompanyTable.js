import React from 'react'
import CompanyRow from './CompanyRow'
import PropTypes from 'prop-types'

const CompanyTable = (props) => {
    //console.log(props.companies)
    return (
        <table className="table table-condensed">
            <thead className="thead-dark" >
                <tr>
                    <th scope="col" >ID</th>
                    <th scope="col" >Name</th>
                    <th scope="col" >Address</th>
                    <th scope="col" >Phone</th>
                </tr>
            </thead>
            <tbody>
            {
                
                props.companies.map(function (company) {
                    //console.log(company);
                return <CompanyRow key={company.id} company={company} />
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