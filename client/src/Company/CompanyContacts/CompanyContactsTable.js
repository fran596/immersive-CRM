import React from 'react'
import PropTypes from 'prop-types'
import CompanyContactsRow from './CompanyContactsRow'

const CompanyContactsTable = (props) => {
    let companyName = props.company
    return (
        <table className="table table-condensed table-hover">
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
                    if(contact.company === companyName ){
                        return <CompanyContactsRow key={contact._id} contact={contact} />
                    }
               
            })}
            </tbody>
        </table>
    );

}

CompanyContactsTable.propTypes = {
    company: PropTypes.string,
    contacts: PropTypes.array
}

CompanyContactsTable.defaultProps = {
    company: "",
    contacts: []
}

export default CompanyContactsTable;