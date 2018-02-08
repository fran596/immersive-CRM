import React from 'react'
import PropTypes from 'prop-types'
import { BarChart } from 'react-easy-chart';

const BarChartContainer = (props) => {
    let contactCounter = 0
        let newData = []
        let contacts = props.contacts
        let companies = props.companies
        for (let i = 0; i < companies.length; ++i) {
            for (let j = 0; j < contacts.length; ++j) {
                if (companies[i]._id === contacts[j].company_id) {
                    ++contactCounter
                }
            }
            newData.push({
                x: companies[i].name,
                y: contactCounter
            })
            contactCounter = 0
        }
    return (
        <BarChart
            axes
            colorBars
            height={250}
            width={550}
            data={newData}
        />
    );
}

export default BarChartContainer