import React from 'react'
import PropTypes from 'prop-types'

const ContactRow = (props) => {
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

ContactRow.propTypes = {
    contact: PropTypes.object
}

ContactRow.defaultProps = {
    contact: {},
}

export default ContactRow;