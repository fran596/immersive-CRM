import React from 'react'
import PropTypes from 'prop-types'

const CompanyRow = (props) => {
    return(
        <tr onClick={()=>props.onViewCompany(props.company)}>
            <td>{props.company._id}</td>
            <td>{props.company.name}</td>
            <td>{props.company.address}</td>
            <td>{props.company.phone}</td>
        </tr>
    );

}

CompanyRow.propTypes = {
    company: PropTypes.object,
    onViewCompany: PropTypes.func
}

CompanyRow.defaultProps = {
    company: {},
    onViewCompany: () => {}
}

export default CompanyRow;