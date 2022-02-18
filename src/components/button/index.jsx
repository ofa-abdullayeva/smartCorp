import React from 'react'

const Button = ({classNames,value}) => {
  return (
    <div>
        <button 
        type="button"
        className={classNames}
        >{value}</button>
    </div>
  )
}

export default Button;