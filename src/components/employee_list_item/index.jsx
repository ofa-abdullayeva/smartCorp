import React  from 'react';

import '../employee_list_item/style.css';

const EmployeeListItem = (props) => {
    
    //----props----//
    const { name, salary,increase,like, onDelete, onToggleIncrease, onToggleLike } = props;
    

    let classNames = 'list-group-item d-flex justify-content-between';

    if (increase) {
      classNames += ' increase'
    }

    if (like) {
      classNames +=' like'
    }

    return (
      <li className={classNames}>
        <span 
        className='list-group-item-label'
        onClick={onToggleLike}
        >{name}</span>
        <input type="text"
          className='list-group-item-input'
          defaultValue={`${salary} AZN `} />
        <div className='d-flex justify-content-center align-item-center'>
          <button 
          className='btn-bonus btn-sm'
          onClick={onToggleIncrease}>
            <i className="fa-solid fa-coins"></i>
          </button>
          <button
           className='btn-trash btn-sm'
           onClick = {onDelete}>
            <i className="fa-solid fa-trash"></i>
          </button>

          <i className='fa-solid fa-star '></i>
        </div>

      </li>
    )
  }



export default EmployeeListItem;