import React from 'react'
import PropTypes from 'prop-types'

function TextElement(props) {
  return (
    <>
      <div>
        <span>{props.element.label}</span>
      </div>
      <div>
        <input 
          type="text" 
          className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          placeholder={props.element.placeholder} />
      </div>
    </>
  )
}

TextElement.propTypes = {
  element: PropTypes.object,
  label:  PropTypes.string,
  style:  PropTypes.string,
  placeholder:  PropTypes.string,
  value:  PropTypes.string
};

export default TextElement
