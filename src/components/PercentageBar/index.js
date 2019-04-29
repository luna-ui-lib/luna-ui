import React from 'react'

const PercentageBar = ({ values, width, fontSize, padding = '1px 2px' }) => {
  const tenPercentOfFullWidth = width * 0.1
  const minWidth = tenPercentOfFullWidth > 20 ? tenPercentOfFullWidth : 20
  const total = values.reduce((acc, value) => acc += value.amount, 0)
  return (
    <div style={{
      width,
      display: 'flex'
    }}>
      {
        values.map(value => {
          const relativeSize = (value.amount * 100) / total
          const partialWidth =  width * (relativeSize / 100)
          return (
            <div
              key={JSON.stringify(value)}
              style={{
                padding,
                fontSize,
                width: partialWidth,
                minWidth,
                backgroundColor: value.color
              }}>
              {value.amount}
            </div>
          )
        })
      }
    </div>
  )
}

export default PercentageBar