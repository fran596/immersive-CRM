import React from 'react'
import ContactRow from './ContactRow'
import PropTypes from 'prop-types'

const ContactTable = (props) => {
    //console.log(props.contacts)
    var aux = props;
    return (
        <table className="table table-condensed table-hover table-bg">
            <thead className="thead-bg" >
                <tr>
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
                return <ContactRow key={contact._id} contact={contact} onViewContact={aux.onViewContact} />
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