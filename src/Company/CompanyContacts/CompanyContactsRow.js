import React from 'react'
import PropTypes from 'prop-types'

const CompanyContactsRow = (props) => {
    return(
        <tr>
            <td>{props.contact.id}</td>
            <td>{props.contact.name}</td>
            <td>{props.contact.email}</td>
            <td>{props.contact.phone}</td>
            <td>{props.contact.position}</td>
            <td>{props.contact.company}</td>
        </tr>
    );

}

CompanyContactsRow.propTypes = {
    contact: PropTypes.object,
    onViewCompany: PropTypes.func
}

CompanyContactsRow.defaultProps = {
    contact: {},
    onViewCompany: () => {}
}

export default CompanyContactsRow;