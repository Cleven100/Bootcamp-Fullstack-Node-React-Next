import React from 'react'
import './summary-box.scss'
import Box from '../box/Box'

const SummaryBox = ({item}) => {
  return (
    <Box>
    <div className='summary-box'>
        <div className="summary-box__info">
            <div className="summary-box__info__title">
                <div>{item.title}</div>
                <span>{item.subtitle}</span>
            </div>
            <div className="summary-box__info__value">
                {item.value}
            </div>
        </div>
        <div className="summary-box__chart"></div>
    </div>
    </Box>
  )
}

export default SummaryBox