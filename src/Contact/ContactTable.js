import React from 'react'
import ContactRow from './ContactRow'
import PropTypes from 'prop-types'

const ContactTable = (props) => {
    //console.log(props.contacts)
    return (
        <table className="table">
            <thead className="thead-dark" >
                <tr>
                    <th scope="col" >ID</th>
                    <th scope="col" >Name</th>
                    <th scope="col" >Email</th>
                    <th scope="col" >Phone</th>
                    <th scope="col" >Position</th>
                    <th scope="col" >Company</th>
                </tr>
            </thead>
            <tbody>
            {
                
                props.contacts.map(function (contact) {
                    //console.log(contact);
                return <ContactRow key={contact.id} contact={contact} />
            })}
            </tbody>
        </table>
    );

}

ContactTable.propTypes = {
    contacts: PropTypes.array
}

ContactTable.defaultProps = {
    contacts: [],
}

export default ContactTable;