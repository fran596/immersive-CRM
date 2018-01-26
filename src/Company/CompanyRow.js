import React from 'react'
import PropTypes from 'prop-types'

const CompanyRow = (props) => {
    return(
        <tr>
            <td>{props.company.id}</td>
            <td>{props.company.name}</td>
            <td>{props.company.address}</td>
            <td>{props.company.phone}</td>
        </tr>
    );

}

CompanyRow.propTypes = {
    company: PropTypes.object
}

CompanyRow.defaultProps = {
    company: {},
}

export default CompanyRow;