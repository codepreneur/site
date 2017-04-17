import React, { PropTypes } from "react"

const Container = (props) => (
  <div className='bg-white sans-serif'>
    { props.children }
  </div>
)

Container.propTypes = {
  children: PropTypes.node,
}

export default Container
