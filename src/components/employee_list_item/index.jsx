import React from 'react'
import '../employee_list_item/style.css'

const EmployeeListItem = ({name,salary}) => {
  return (
    <li className='list-group-item d-flex justify-content-between '>
        <span className='list-group-item-label'>{name}</span>
        <input type="text"
         className='d-flex justify-content-center align-item-center '
         defaultValue = { `${salary} AZN `}/>
         <div className='d-flex justify-content-center align-item-center'>
            <button className='btn-bonus btn-sm'>
                <i class="fa-solid fa-coins"></i>
            </button>
            <button className='btn-trash btn-sm'>
                <i class="fa-solid fa-trash"></i>
            </button>

            <i className='fa-solid fa-star '></i>
         </div>
    
    </li>
  )
}

export default EmployeeListItem;