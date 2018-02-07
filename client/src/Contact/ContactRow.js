import React from 'react'
import PropTypes from 'prop-types'

const ContactRow = (props) => {
    return(
        <tr onClick={()=>props.onViewContact(props.contact)}>
            <td>{props.contact.name}</td>
            <td>{props.contact.email}</td>
            <td>{props.contact.phone}</td>
            <td>{props.contact.position}</td>
            <td>{props.contact.company}</td>
        </tr>
    );

}

ContactRow.propTypes = {
    contact: PropTypes.object,
    onViewContact: PropTypes.func
}

ContactRow.defaultProps = {
    contact: {},
    onViewContact: () => {}
}

export default ContactRow;