import React from 'react'
import PropTypes from 'prop-types'
import { PieChart, Legend } from 'react-easy-chart';

const PieChartContainer = (props) => {
    let companyCounter = 0
    let newData = []
    let cond = false
    let companies = props.companies
    for (let i = 0; i < companies.length; ++i) {
        for (let j = 0; j < companies.length; ++j) {
            if (companies[i].address === companies[j].address) {
                ++companyCounter
            }
        }
        for (let n = 0; n < newData.length; ++n) {
            if (newData[n].key === companies[i].address) {
                cond = true
            }
        }
        if (!cond) {
            newData.push({
                key: companies[i].address,
                value: companyCounter
            })
        }
        cond = false
        companyCounter = 0
    }
    const customStyle = {
        '.legend': {
            backgroundColor: '#f9f9f9',
            border: '1px solid #e5e5e5',
            borderRadius: '12px',
            fontSize: '0.8em',
            maxWidth: '300px',
            padding: '12px'
        }
    }
    return (
        <div>
            <PieChart
                size={280}
                data={newData}
            />
            <Legend data={newData} dataId={'key'} styles={customStyle} horizontal />
        </div>
    );
}

export default PieChartContainer