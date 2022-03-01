import React from 'react';
import EmployeeListItem from '../employee_list_item';
import '../employee_list';



const EmployeeList = ({data , onDelete,onToggleIncrease,onToggleLike}) => {
  return (
    <ul className='app-list list-group'>

        {
            data.map(item =>{
              const {id, ...itemProps}=item;
                return(
                    <EmployeeListItem 
                    key={item.id}             
                    id = {item.id}
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleIncrease={() => onToggleIncrease(id)}
                    onToggleLike={() => onToggleLike(id)}
                    />
                )
            })
        }
      
  
    </ul>
  )
}

export default EmployeeList;