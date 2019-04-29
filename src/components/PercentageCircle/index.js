import React, { useEffect } from 'react'

const radiansFromPercentage = (percentage) => {
  return (percentage * 2) / 100
}

const PercentageCircle = ({ value, lineWidth, size, color, contrastColor, ...restProps }) => {
  let canvas = React.createRef()
  const XPosition = (size+lineWidth)/2
  const YPosition = (size+lineWidth)/2
  const radius = size/2
  const percentageArcEndAngle = radiansFromPercentage(value * 10) * Math.PI
  const canvarSize = size + lineWidth

  useEffect(() => {
    const ctx = canvas.current.getContext("2d")
    if (ctx) {
      // Draws full circle
      ctx.beginPath()
      ctx.strokeStyle = contrastColor
      ctx.lineWidth = lineWidth
      ctx.arc(XPosition, YPosition, radius, 0, 2 * Math.PI)
      ctx.stroke()

      // Draws percentage circle
      ctx.beginPath()
      ctx.lineWidth = lineWidth
      ctx.strokeStyle = color
      ctx.arc(XPosition, YPosition, radius, 0, percentageArcEndAngle)
      ctx.stroke()
    }
  })

  return (
    <canvas {...restProps} width={canvarSize} height={canvarSize} ref={canvas}></canvas>
  )
}

export default PercentageCircle